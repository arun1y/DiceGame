import React, { useState } from 'react'
import styled from 'styled-components';

const Box=styled.div`
    width: 72px;
    height: 72px;
    border: 1px solid black;
    font-size: 24px;
    font-weight: 700;
    display: grid;
    align-items: center;
    background-color: ${(props)=>(props.isSelected?"black":"white")};
    color: ${(props)=>(props.isSelected?"white":"black")};
`;
const FlexBoxes=styled.div`
div{
    display: flex;
    gap: 24px;
}
p{
    font-weight: 700;
    font-size: 24px;
    text-align: right;
}
.error{
    font-size: 20px;
    color: red;
}
`;

const NumberSelector = ({setError,error,selectedNumber,setSelectedNumber}) => {
        const numArray=[1,2,3,4,5,6];
        const numberSelectorHandler=(value)=>{
            setSelectedNumber(value);
            setError("");
        };
        
  return (
    <FlexBoxes className='flex'>
        <p className='error'>{error}</p>
    <div>
        {
            numArray.map((value,i)=>(
                <Box isSelected={value==selectedNumber} key={i} onClick={()=>numberSelectorHandler(value)}>{value}</Box>
            ))
        }
    </div>
    <p>Select Number</p>
    </FlexBoxes>
    
  );
}

export default NumberSelector