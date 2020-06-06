import React, {useState} from 'react';
import './App.css';
import ChildButtons from './ChildButtons';
import Clock from './Clock';


// newer version using Hooks for state
// see: https://reactjs.org/docs/hooks-state.html

// function App() {
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


// my old skool way

class App extends React.Component {

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
      <div className='App'>

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

        <div className='Clock'>
          <Clock date={new Date()}/>
        </div>
      </div>
    )
  }
}

export default App;
