import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Body = styled.div`
    display:flex;
    justify-content:center;
    flex-direction:row;
    background-color:yellow;
`

const Title = styled.h1`
    color:white;
    font-family:Arial, Helvetica, sans-serif;
    font-style:bold;
    color:black;
`

const NavList = styled.ul`
    display:flex;
    list-style: outside none none;
    align-content:center;
    gap: 0px 10px;
`

const ListItem = styled.li`
    display:flex;
    justify-content: space-around;
`

const NavBar = () => {
    return (
        <Body>
            <Title>Who Gives a Duck?</Title>
                <NavList>
                    <ListItem>
                        <Link to="/">Home</Link>
                    </ListItem>
                    <ListItem>
                        <Link to="/forsale">For Sale</Link>
                    </ListItem>
                    <ListItem>
                        <Link to="/basket">Basket</Link>
                    </ListItem>
                </NavList>
        </Body>
    )

}

export default NavBar;