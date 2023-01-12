import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Basket from "./components/Basket";
import ErrorPage from "./components/ErrorPage";
import ForSale from "./components/ForSale";
import Welcome from "./components/Welcome";
import NavBar from "./components/NavBar";
import "styled-components";
import styled from "styled-components";

const Body = styled.div`
  background-color:black;
  color:yellow;
  height:1280px;


`


function App() {
  let initialPricing = [
    { thing: "Red Duck", cost: 10 },
    { thing: "Green Duck", cost: 10 },
    { thing: "Black Duck", cost: 66 },
    { thing: "Magic Duck", cost: 777 }
  ];
  
  const [pricing, setPricing] = useState(initialPricing);
  const [name, setName] = useState("")
  const [selectedItems, setSelectedItems] = useState([])

  return (
    <Body>
      <Router>
          <NavBar />

        <Routes>
          
          <Route exact path="/" element={< Welcome name={name} setName={setName} />} />
          <Route
            path="/forsale" exact
            element={ <ForSale ducks={pricing} selectedItems={selectedItems} setSelectedItems={setSelectedItems}/> }
          />
          <Route path="/basket" element={< Basket name={name} selectedItems={selectedItems}/>} />
          <Route path="*" element={< ErrorPage />}/>
        </ Routes>
      </Router>
    </Body>
  );
  
}

export default App;
