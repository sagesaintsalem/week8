import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Body = styled.div`
    display:flex;
    justify-content:space-evenly;
    flex-direction:column;
    align-items:center;
`

const Title = styled.h1`
    color:white;
    font-family:Arial, Helvetica, sans-serif;
`




const Welcome = ({name, setName}) => {


    

    const handleInput = function(event){
        const name = event.target.value
        setName(name);
    }

    // const submitAndRedirect = function(event){
        
    // }

    return (
        <Body>
            <Title>Welcome! Buy Something!</Title>
            <h4>Hi {name}!</h4>
            <label>Login: </label>
            <input type="text" placeholder="Your name" onChange={handleInput}></input>
            <Link to="/forsale"><button type="submit">Go!</button></Link>
        </Body>
    )


}

export default Welcome;