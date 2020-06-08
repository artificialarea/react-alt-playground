import React from 'react';
import './App.css';
import CounterApp from './Counter/CounterApp'
import ClockApp from './Clock/ClockApp';
import NumberListApp from './NumberList/NumberListApp'


class App extends React.Component {

  render() {

    // for NumberListApp
    const numbers =[1, 2, 3, 4, 5];
    
    return (
      <div className='UberApp'>

        <div className="NumberListApp">
          <NumberListApp numbers={numbers} />
        </div>

        <div className='ClockApp'>
          <ClockApp />
        </div>

        <div className="CounterApp">
          <CounterApp />
        </div>

      </div>
    )
  }
}

export default App;
