import React from 'react';
import uuid from 'react-uuid'; // NOTE: using react-uuid to generate 128bit Universal Unique Identifier (UUID) !!! =D


export default function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li key={uuid}>{number}</li>    // NOTE: using react-uuid to generate 128bit Universal Unique Identifier (UUID) !!! =D
    )
  return (
    <ul>{listItems}</ul>
  )
}

// const numbers =[1, 2, 3, 4, 5];
// ReactDOM.render(
//   <NumberList numbers={numbers} />,
//   document.getElementById('root')
// );