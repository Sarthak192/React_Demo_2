import React from 'react';
import './Person.css';

const person = (props)=>{
    return (
    <div className = "Person">
        <p onClick={props.onChange}>I am a {props.name} and my age is {props.age} years old</p>
        <p>{props.children}</p>
    </div>
    )
}

export default person;