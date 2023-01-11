import React from "react";
import { useParams } from "react-router-dom";

const Choices = () => {
    const {choice} = useParams();

    return (
        <>
        <h1>Choices.</h1>
        <p>You're on page {choice}</p>
        </>
    )

}

export default Choices;