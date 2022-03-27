import React from "react";

import "./error-indicator.css";
import img from "./oops.png";

const ErrorIndicator = ({ value }) => {
    const label = value ? value : 'Something has gone terribly wrong ...';

    return (
        <div className="error-indicator">
            <img src={img} alt="Oops!" />
            <h3>{label}</h3>
        </div>
    );
};

export default ErrorIndicator;