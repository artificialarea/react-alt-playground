import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Clock from './Clock';

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );


// function tick() {
//   ReactDOM.render(
//     <Clock date={new Date()} />,
//     document.getElementById('root')
//   );
// }

// setInterval(tick, 1000);


ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);


