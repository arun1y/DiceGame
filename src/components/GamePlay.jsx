import React, { useState } from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import styled from 'styled-components';
import RollDice from './RollDice';

const BoxContainer=styled.div`
padding-top: 60px;
  .topElement{
    display: flex;
    justify-content: space-around;
    align-items: end;
  }
  
`;

const GamePlay = () => {
  const [score,setScore]=useState(0);
  const [selectedNumber,setSelectedNumber]=useState();
  const [currentDice, setCurrentDice]=useState(1);
  const [error,setError]=useState();

  const generateRandomNumber=(min,max)=>{
  return Math.floor(Math.random()*(max-min+1))+min;
  };

  const rollDice=()=>{
    if(!selectedNumber){
      setError("You have not selected any number");
      return;
    }
    
    const randomNumber=generateRandomNumber(1,6);
    setCurrentDice((prev)=>randomNumber);

    if(selectedNumber == randomNumber){
      setScore(prev=>prev+randomNumber);
    }else{
      setScore(prev=>prev-2);
    }

    setSelectedNumber(undefined);

  };


  return (
    <BoxContainer>
      <div className='topElement'>
      <TotalScore score={score} /> 
      <NumberSelector 
      error={error}
      setError={setError}
      selectedNumber={selectedNumber} 
      setSelectedNumber={setSelectedNumber}
      />
      </div>
      <RollDice setScore={setScore} currentDice={currentDice} rollDice={rollDice} />
      </BoxContainer>
      
  );
};

export default GamePlay;

