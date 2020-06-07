import React from 'react';

const ChildButtons = props => (
  <div>
    <button onClick={() => props.onClick(props.count + 1)}>
      Increase count
    </button>
    <button onClick={() => props.onClick(props.count - 1)}>
      Decrease count
    </button>
  </div>
);

export default ChildButtons;