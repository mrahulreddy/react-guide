import React from 'react';

/*  1- receive prop as an argument and output them dynamically in code
    2- props give us the access to all the attr we pass to our own components
    3- props allow you to pass data from a parent (wrapping) component to a child (embedded) component.
    4- Props can be even used to make state changes if the function containing setState method is passed as a property to the custom elememt(component) which is called in stateless component using props.
*/
const Person = (props) => {
    return (
        <div>
            <p> I am {props.name} from component-2 and I'm {props.age} years old. </p>
             {/* children holds everything(element and text) that is between opening and closing tag of our component */}
            <p onClick={props.eventBetweenComponents}> {props.children} </p>
        </div>
    );
    
}

export default Person;