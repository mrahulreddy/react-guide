import React from 'react';

const Person = (props) => {
    return <p> I am {props.name} from component-2 and I'm {props.age} years old. </p>
}

export default Person;