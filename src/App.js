/*
1-  We're not using real html tags, the tags used in JSX code(just similar to HTML, but it isn't in real) is being converted to HTML behind the scenes by React.
2- className is the JSX attribute which is needed to render it as HTML class in the DOM.
*/


import React, { Component } from 'react';
import './App.css';
// The name of the import can be any name but it is mandatory that it starts with capital letter.
import PersonComponent from './Person/Person'

class App extends Component {
  /* state property is available in a CLASS only and works in components that extends components.
     It doesn't work in function components.
     state is used to change the component state from within
     state and props are the only two things which leads react to update DOM, if something is changed.
  */
  state = {
    persons : [
      { name: "Rahul", age: 26 },
      { name: "C'ni", age: 28 },
      { name: "Hari", age: 32 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  switchNameHandler = (newName) => {
    console.log('Clicked!');
    // DON'T DO THIS: this.state.prsons[0].name = 'RahulReddy'; 
    /*  1- component object has a setState method which allows us to update state property and ensures that react knows about it and updates DOM.
        2- setState will override/merge the old state (persons - above) with the new one(persons-below), it doesn't touch the other state (otherState) because nothing is said in setState method about it
    */ 
    this.setState({
      persons : [
        { name: newName, age: 26 },
        { name: "C'ni", age: 28 },
        { name: "Hari", age: 35 }
      ]
    })
  }

  //Arrow function syntax is used for changedNameHandler because we will use this keyword, though this keywprd works in render method, we don't use the render method syntax because this keyword for event handlers doesn't work for render method syntax. It works as expected only with arrow function syntax.
  changedNameHandler = (event) => {
    this.setState({
      persons : [
        { name: "Rahul", age: 26 },
        { name: "C'ni", age: 28 },
        { name: event.target.value, age: 35 }
      ]
    })
  }
// show and hide the persons components
  togglePersonsHandler = () => {
    const loadPersons = this.state.showPersons;
    this.setState({
      showPersons : !loadPersons
    })
  }

  render() {
    const btnStyle = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid #6868c5',
      padding: '8px',
      cursor: 'pointer',
      boxShadow: '0px 2px 3px #8e8dd2'
    }
    {/* 1- The code in return block is JSX code and it looks like html but it is JS in real, so we may also use teriniary operator in retun block instead the below i.e outside the return block, but this is the optimal way of doing it.
        2- Whatsoever to render content to DOM, the entire render block gets executed and not just the return statement.
        3- The entire JSX code is just a syntactical sugar of React createElement.
     */}

     let persons = null;
     if (this.state.showPersons) {
      persons = 
      <div> 
      <PersonComponent 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age} /> 
      <PersonComponent
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          eventBetweenComponents={this.switchNameHandler.bind(this,'Rahul!')}>
          My hobbies : Researching
      </PersonComponent>
      <PersonComponent 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}
          changed={this.changedNameHandler}> 
      </PersonComponent>
    </div>
     }

    return (
      <div className="App">
        <h1> Hi, I am component-1 </h1>
        <p> This is really working! </p>
        <button 
          style={btnStyle}
          onClick={this.togglePersonsHandler}> Toggle Persons
        </button>
          {persons}
      </div>
    );

/* The below code is what the above code is compiled to. 
    createElement() is a methodin React which takes infinite amount of arguments, minimum it takes 3.
    We can even render other components within it as an argument.
    second argument is optional. (we can pass a JS obj, which has className)
    third argument is children i.e the one that is present within the one and only parent div.
*/
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hello Rahul'));
  }
}

export default App;
