export default class BookstoreService {
    data = [
        {
            id: 1,
            title: 'Production-Ready Microservices',
            author: 'Susan J. Fowler',
            price: 32,
            imgUrl: 'https://image.ceneostatic.pl/data/products/101140684/i-production-ready-microservices-building.jpg'
        },
        {
            id: 2,
            title: 'Release It!',
            author: 'Michael T. Nygard',
            price: 45,
            imgUrl: 'https://ecsmedia.pl/c/release-it-b-iext66460640.jpg'
        },
        {
            id: 3,
            title: 'JavaScript: The Good Parts',
            author: 'Douglas Crockford',
            price: 51,
            imgUrl: 'https://miro.medium.com/max/384/1*Pdz3MkutaXErA_1NwpAw_Q.jpeg'
        },
        {
            id: 4,
            title: 'JavaScript: The Definitive Guide',
            author: 'David Flanagan',
            price: 57,
            imgUrl: 'https://miro.medium.com/max/381/1*DGBEwSHMG8i9A3nnTJj4QA.jpeg'
        },
        {
            id: 5,
            title: 'Clean Code',
            author: 'Robert C. Martin',
            price: 62,
            imgUrl: 'https://hackr.io/blog/uploads/images/clean-code-a-handbook-of-agile-software-craftsmanship-1st-edition.jpg'
        }
    ];

    getBooks() {
        // simulation of a real response from the server with time delay
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() > .85) {  // simulation of a failed request
                    reject(new Error('Smth bad happened'));
                } else {
                    resolve(this.data);
                }
            }, 700);
        });
    }
}