import {
    createAsyncThunk,
    createSlice,
    createEntityAdapter
} from '@reduxjs/toolkit';

const booksAdapter = createEntityAdapter();

export const fetchBooks = createAsyncThunk(
    'bookList/fetchBooks',
    async (bookstoreService) => {
        return await bookstoreService.getBooks();
    }
);

export const bookListSlice = createSlice({
    name: 'bookList',
    initialState: booksAdapter.getInitialState({
        loading: true,
        error: null
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchBooks.pending, (state, action) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchBooks.fulfilled, (state, action) => {
                booksAdapter.upsertMany(state, action.payload);
                state.loading = false;
                state.error = null;
            })
            .addCase(fetchBooks.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error;
            })
    }
});

export default bookListSlice.reducer;

export const {
    selectAll: selectAllBooks,
    selectById: selectBookById,
} = booksAdapter.getSelectors((state) => state.bookList);