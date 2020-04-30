import React from 'react';
import Styled from 'styled-components'
const Person = (props) => {
    /* const style = {
         '@media (min-width: 500px)' : {
             width: '450px'
         }
     }*/
    const StyledDiv = Styled.div`
    width: 60%;
    margin: 16px, auto;
    border: 1px, solid, #eee;
    box-shadow: 0, 2px, 3px, #ccc;
    padding: 16px;
    text-align: center;

    @media (min-width: 500px) : {
        width: '450px'
    }
    `
    return (
        <StyledDiv>
            <h1>Name: {props.name}</h1>
            <p>Age: {props.age}</p>
            <button onClick={props.click}> bla</button>
            <input type="text" onChange={props.changed}></input>
        </StyledDiv>
    )
}

export default Person;