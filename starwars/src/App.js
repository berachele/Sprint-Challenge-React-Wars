import React from 'react';
import ParentCard from "./components/ParentCard"
import './App.css';
import styled from "styled-components"


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const H1Style = styled.h1`
    font-family: "Righteous", sans-serif;
    text-shadow: 2px 2px white;
    font-size: 3rem;
  `

  return (
    <div className="App">
      <H1Style className="Header">React Wars</H1Style>
      <ParentCard/>
    </div>
    
  );
}

export default App;