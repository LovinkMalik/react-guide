import React, { Component } from 'react';
import './App.css';
import Person from './person/person';
class App extends Component {
  state = {
    persons:[
      {name:'Max',age:'28'},
      {name:'rohan',age:'20'},
      {name:'deep',age:'22'}
    ],
    otherstate:'some other value'
  }

  switchNameHandler = () => {
    //console.log('was clicked');
    this.setState( {
      persons:[
        {name:'Maxmilian',age:'28'},
        {name:'rohan',age:'20'},
        {name:'deep',age:'27'}
      ]

    })
  }
  nameChangedHandler = (event) => {
    this.setState( {
      persons:[
        {name:'Maxmilian',age:'28'},
        {name:event.target.value,age:'20'},
        {name:'deep',age:'27'}
      ]

    })
  }
 
  render() {
    const style={
      backgroundColor:'white',
      font:'inherit',
      border:'1px solid blue',
      padding:'8px',
      cursor:'pointer'
    };
    return (
      <div className="App">
       <h1> hi I am react app</h1>
      <button
      style={style}
       onClick={this.switchNameHandler}>Switch name</button>
      <Person 
      name={this.state.persons[0].name}
       age={this.state.persons[0].age}/>
      <Person 
      name ={this.state.persons[1].name}
       age={this.state.persons[1].age}
       changed={this.nameChangedHandler}></Person>
      
      <Person 
      name={this.state.persons[2].name} 
      age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
