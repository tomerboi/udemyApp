import React from 'react';
import classes from './Person.module.css';

const Person = (props) => {

    return (
        <div className={classes.Person}>
            <h1>Name: {props.name}</h1>
            <p>Age: {props.age}</p>
            <button onClick={props.click}> bla</button>
            <input type="text" onChange={props.changed} value={props.name}></input>
        </div>
    )
}

export default Person;