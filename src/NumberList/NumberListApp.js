import React from 'react';
import uuid from 'react-uuid'; // NOTE: using react-uuid to generate 128bit Universal Unique Identifier (UUID) !!! =D
// BUT IS IT WORKING????
// esLint: "Could not find a declaration file for module 'react-uuid'""


export default function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li key={uuid}>{number}</li>    // NOTE: using react-uuid to generate 128bit Universal Unique Identifier (UUID) !!! =D
    )
  return (
    <ul>{listItems}</ul>
  )
}
