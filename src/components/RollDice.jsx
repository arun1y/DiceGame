
import { useState } from 'react';
import styled from 'styled-components'

const RollDice = ({setScore,currentDice,rollDice}) => {
   
  const [showRules,setShowRules]=useState(false);
  const resetScore=()=>{
    setScore(0);
  };

  return (
    <DiceContainer>
        <div className='dice' onClick={rollDice}>
          <img src={`/images/dice_${currentDice}.png`} alt="dice 1" />
          </div>
        <p>Click on Dice to roll</p>
        <div>
        <button onClick={resetScore}>Reset Score</button>
        <button className='rulesBttn' onClick={()=>setShowRules(prev=>!prev)}>{showRules?'Hide Rules':'Show Rules'}</button>
        </div>
        {showRules && (
            <ShowRulesContainer>            
              <h3>How to play dice game</h3><br />
              <p>Select any number</p>
              <p>Click on dice image</p>
              <p>after click on dice if selected number is equal to dice number you will get same point as dice</p>
              <p>if you get wrong guess then 2 poin will be dedcuted</p>
            </ShowRulesContainer>
        )}

    </DiceContainer>
  )
}

export default RollDice;

const DiceContainer=styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 40px;
    .dice{
      cursor: pointer;
    }
    img{
        width: 110px;
        height: auto;
    }
    p{
      font-weight: 500;
      font-size:24px;
    }
    div{
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    div button{
      width: 220px;
      height: 30px;
      border: 1px solid black;
      border-radius: 5px;
      padding: 10px 18px;
      cursor: pointer;
      transition:0.3s background ease-in;
      &:hover{
        background-color: black;
        border: 1px solid black;
        color: white;
        transition:o.3s background ease-in;
      }
    }
    .rulesBttn{
       background-color: black;
       color: white;
            &:hover{
        background-color: white;
        border: 1px solid black;
        color: black;
        transition:o.3s background ease-in;
      }
    }
`;

const ShowRulesContainer=styled.div`
  width: 770px;
  height: 170px;  
  padding: 24px;
  align-content: center;
  background-color: #FBF1F1;
  h3{
    font-size: 12px;
  }
  p{
    font-size: 12px;;
  }
`;