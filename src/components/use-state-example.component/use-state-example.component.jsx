import React, { useState } from "react";
import Card from "../card-component/card-component";

const UseStateExample = () => {
    const [name, setName] = useState("William");
    const [address, setAddress] = useState("Canada");

    const toggleName = () => {
        if (name === "William") {
            setName("Liam");
        } else {
            setName("William");
        }
    };

    const toggleAddress = () => {
        if (address === "Canada") {
            setAddress("Denmark");
        } else {
            setAddress("Canada");
        }
    };

    return (
        <Card>
            <h1>{name}</h1>
            <h2>{address}</h2>

            <button onClick={toggleName}>Change name</button>
            <button onClick={toggleAddress}>Change address</button>
        </Card>
    )
};

export default UseStateExample;