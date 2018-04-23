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
    otherState: 'some other value'
  }

  switchNameHandler = () => {
    console.log('Clicked!');
    // DON'T DO THIS: this.state.prsons[0].name = 'RahulReddy'; 
    /*  1- component object has a setState method whoich allows us to update state property and ensures that react knows about it and updates DOM.
        2- setState will override/merge the old state (persons - above) with the new one(persons-below), it doesn't touch the other state (otherState) because nothing is said in setState method about it
    */
    this.setState({
      persons : [
        { name: "RahulReddy", age: 26 },
        { name: "C'ni", age: 28 },
        { name: "Hari", age: 35 }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1> Hi, I am component-1 </h1>
        <p> This is really working! </p>
        <button onClick={this.switchNameHandler}> Switch Name </button>
        <PersonComponent 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age} /> 
        <PersonComponent
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          eventBetweenComponents={this.switchNameHandler}> My hobbies : Researching
        </PersonComponent>
        <PersonComponent 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}> 
        </PersonComponent>
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
