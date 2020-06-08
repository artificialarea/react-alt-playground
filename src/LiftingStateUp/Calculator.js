import React from 'react';
import BoilingVerdict from './BoilingVerdict';
import TemperatureInput from './TemperatureInput';


function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}
function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}


export default class Calculator extends React.Component {

  constructor(props) {
    super(props)
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFarenheitChange = this.handleFarenheitChange.bind(this);
    this.state = { 
        temperature: '',
        scale: 'c',
    };
  }

  handleCelsiusChange(temperature) {
    this.setState({scale: 'c', temperature})
  }
  handleFarenheitChange(temperature) {
    this.setState({scale: 'f', temperature})
  }

  render() {
    const { scale, temperature } = this.state
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

    // console.log(this.state)
    return (
      <>
        <TemperatureInput 
          scale={'c'}
          temperature={celsius}
          onTemperatureChange = {this.handleCelsiusChange}
          />
        <TemperatureInput 
          scale={'f'}
          temperature={fahrenheit}
          onTemperatureChange = {this.handleFarenheitChange}
        />
        <BoilingVerdict 
          celsius={parseFloat(temperature)}
        />
      </>
    )
  }
}