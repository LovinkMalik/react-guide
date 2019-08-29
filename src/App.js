import React, { Component } from 'react';
import './App.css';

import Person from './person/person';
class App extends Component {
  state = {
    persons:[
      {id: 'hjbfh',name:'Max',age:'28'},
      {id: 'jnfj',name:'rohan',age:'20'},
      {id: 'nfkjn',name:'deep',age:'22'}
    ],
    otherstate:'some other value',
    showPersons:false
  }

  togglePersonsHandler = () => {
const doesShow = this.state.showPersons;
this.setState({showPersons:!doesShow});

  }

  nameChangedHandler = (event, id) => {
   const personIndex = this.state.persons.findIndex(p => {
     return p.id ===id;
   });

   const person = {
     ...this.state.persons[personIndex]
   };
   //alternative approach
   //const person = Object.assign({},this.state.persons[personIndex] );
 person.name = event.target.value;
 const persons = [...this.state.persons];
 persons[personIndex] = person;

    this.setState( {persons: persons} )
     
     
  }
  deletePersonHandler = (personIndex) => {
    //const persons =this.state.persons.slice();
    const persons =[...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
    
      }
 
  render() {
    const style={
      backgroundColor:'green',
      color:'white',
      font:'inherit',
      border:'1px solid blue',
      padding:'8px',
      cursor:'pointer',
      
    };


    let persons = null;
    if(this.state.showPersons){
      persons =(
<div>
  {this.state.persons.map((person, index) => {
    return <Person
    click={() => this.deletePersonHandler(index)}
     name={person.name}
      age={person.age}
      key={person.id} 
      changed={(event) => this.nameChangedHandler(event, person.id)}/>
  })}
      

       </div>
      );
      style.backgroundColor = 'red';
     
    }
    return (
      
      <div className="App">
       <h1> hi I am react app</h1>
      <button
      style={style}
       onClick={this.togglePersonsHandler}>toggle person</button>
      {persons}
       
       
      
      </div>
      
    );
  }
}

export default App;
