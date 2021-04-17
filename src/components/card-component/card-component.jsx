import React from "react";
import "./card-component.css";

const Card = ({ children }) => {
    return (
        <div className="card">{children}</div>
    )
};

export default Card;