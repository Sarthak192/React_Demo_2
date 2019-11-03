import React, {useState} from 'react';
import './App.css';
import Person from './Person/Person'

const App = props => {
  const [personState, setPersonState] = useState({
    persons :[
      {name: "Sarthak", age: 22},
      {name: "Somil", age: 23},
      {name: "Sarita", age: 24}
    ],
    Hobby: "cricket"
  });

  // const [otherState, setOtherState] = useState({Hobby: "cricket"})

  console.log("Person State", personState);
  // console.log("Other State", otherState);

  const switchNameHandler = (newName)=>{
    setPersonState({
      persons :[
        {name: newName, age: 22},
        {name: "Somil", age: 23},
        {name: "Sarita", age: 24}
      ]
      // ],
      // Hobby: personState.Hobby
    })
  }

  return (
    <div className="App">
      <h1>Angular-Demo-2</h1>
      <h1>I am a React App</h1>
      <p>This is really working</p>
      <button onClick={()=>switchNameHandler('Abhay')}>Switch Name</button>
      <Person name = {personState.persons[0].name} age = {personState.persons[0].age}/>
      <Person onChange = {()=>switchNameHandler('Abhay!!!')} name = {personState.persons[1].name} age = {personState.persons[1].age}/>
      My Hobby is playing cricket
      <Person name = {personState.persons[2].name} age = {personState.persons[2].age}/>
    </div>
  );

}

export default App;


