import styled from "styled-components";
import { Link } from "react-router-dom";
// import { useState, useEffect } from "react";

const Body = styled.div`
    display: flex;
    justify-content:center;
    flex-direction:column;
`

const Contents = styled.div`
    display:flex;
    justify-content:center;
`

const SaleList = styled.ul`
    display:flex;
    list-style: outside none none;
    align-content:center;
    flex-direction: column;
    gap: 0px 10px;
`

const ListItem = styled.li`
    display:flex;
    align-content:space-around;
    margin: 10px 0px;
`

const ListButton = styled.button`
    margin: 5px;
`

const Button = styled(ListButton)`
    display:flex;
    justify-content:center;
    flex-direction:column;
    flex-wrap: wrap;
`

const ForSale = ({ducks, selectedItems, setSelectedItems}) => {


    const selectItem = function(duck) {
        const newItems = [...selectedItems, duck]
        setSelectedItems(newItems);
        
    }

    const priceItems = ducks.map((duck, index) => {
        return <Contents>
            <ListItem key={index}> {duck.thing}: £{duck.cost}</ListItem>
            <ListButton type="submit" onClick={() => selectItem(duck)}>Add to Basket</ListButton>
            </Contents>
      })

    return (
        <Body>
            <SaleList>
                {priceItems}
            </SaleList>
            <Link to="/basket"><Button>Go To Basket</Button></Link>
        </Body>
    )

}

export default ForSale;