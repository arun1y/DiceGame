import React from 'react'
import styled from "styled-components";

const Container=styled.div`
    max-width: 100%;
    display: flex;
    margin: 0 auto;
    height: 100vh;
    align-items: center;

    h1{
        font-size: 96px;
  
    }
`;
const Button=styled.button`

    background-color: black;
    color: white;
    min-width: 220px;
    padding: 10px 18px;
    border-radius: 5px;
    border: none;
    font-size:16px;
    transition: 0.4ms background ease-in;
    border: 1px solid transparent;

&:hover{
    background-color: whitesmoke;
    color: black;
    border: 1px solid black;
    transition: 0.3ms background ease-in;
    cursor: pointer;
}
`;



const StartGame = ({toggle}) => {
  return (
   <>
    <Container>
        <div>
        <img src="../images/dices 1.png" alt="dice_image" />
        </div>
        <div>
        <h1>DICE GAME</h1>
        <Button onClick={toggle}>Play Game</Button>
        
        </div>
    </Container>
   </>
  )
}

export default StartGame