import React from 'react';
// import {useState} from 'react'; // for Hooks
import ChildButtons from './ChildButtons';


// new skool way, using Hooks for state
// see: https://reactjs.org/docs/hooks-state.html

// function CounterApp() {
//   const [count, setCount] = useState(0);
//   return (
//     <div>
//       The count is {count}
//       <div>
//          <ChildButtons 
//            onClick={setCount} 
//            count={count} 
//          />
//       </div>
//     </div>
//   );
// }


// old skool way
class CounterApp extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      count: 0,
    }
  }

  setCount = (count) => {
    this.setState({
      count
    })
  }

  render() {
    const { count } = this.state;
    return (
      <div className='Counter'>
        The count is {count}
        <div>   
          <ChildButtons 
            // method 1
            // onClick={(count) => {this.setCount(count)}} 
            // method 2 (^^^ why the tendency to use method 1?)
            onClick={this.setCount} 
            count={count} 
            />
        </div>
      </div>
    )
  }
}

export default CounterApp;