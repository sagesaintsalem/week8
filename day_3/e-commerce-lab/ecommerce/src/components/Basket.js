import styled from "styled-components";
import { Link } from "react-router-dom";



const NamesBasket = styled.h1`
    font-style:bold;

`
const Contents = styled.div`
    display:flex;
    justify-content:center;
    flex-direction:column;
    
`

const Basket = ({name, selectedItems}) => {

    const inBasket = selectedItems.map((item, index) => {
        return <li key={index}>{item.thing} | £{item.cost}</li>
    }
    ) 

    const finalTotal = ((selectedItems.reduce((total, currentValue) => total = total + currentValue.cost,0)))


    

    return (
        <Contents>
            <NamesBasket>{name}'s Basket</NamesBasket>
            <ul>
                {inBasket}
            </ul>
            <h4>Total: £{finalTotal}</h4>
            <Link to="/forsale"><button>Back to Shopping!</button></Link>
        </Contents>
    )
}

export default Basket;