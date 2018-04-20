/*
1-  We're not using real html tags, the tags used in JSX code(just similar to HTML, but it isn't in real) is being converted to HTML behind the scenes by React.
2- className is the JSX attribute which is needed to render it as HTML class in the DOM.
*/


import React, { Component } from 'react';
import './App.css';
// The name of the import can be any name but it is mandatory that it starts with capital letter.
import PersonComponent from './Person/Person'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Hi, I am component-1 </h1>
        <p> This is really working! </p>
        <PersonComponent name="Rahul" age="26"> </PersonComponent> 
        <PersonComponent name="C'ni" age="28"> </PersonComponent>
        <PersonComponent name="Hari" age="32"> </PersonComponent>
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
