import React from 'react';

export default function BoilingVerdict(props) {
  
  if (props.celsius >= 100) {
    return <p><b>The water would boil.</b></p>
  }
  return <p><b>The water would not boil.</b></p>
}