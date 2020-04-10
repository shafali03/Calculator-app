import React, { Component } from 'react';
import './Calculator.css'
import Display from '../Display/Display';
import Keypad from '../Keypad/Keypad';

class Calculator extends Component {
  state = {
    displayValue: '0',
    numbers: ['9', '8', '7', '6', '5', '4', '3', '2', '1', '.', '0', 'ce'],
    operators: ['/', 'x', '-', '+'],
    selectedOperator: '',
    storedValue: '',
  }

  callOperator = () => {
    console.log('call operation');
  }

  setOperator = (value) => {
    let { displayValue, selectedOperator, storedValue } = this.state;

    // check if a value is already present for selectedOperator
    if (selectedOperator === '') {
      // update storeValue to the value of displayValue
      storedValue = displayValue;
      // rest of the value display to '0'
      displayValue = '0';
      // update the value of selectedOperator to the given value
      selectedOperator = value;
    } else {
      // if selectedOperator is not an empty string
      // Update the value of selectedOperator to the given value
      selectedOperator = value;
    }
    this.setState({ displayValue, selectedOperator, storedValue });
  }

  updateDisplay = (value) => {
    let { displayValue } = this.state;

    // prevent multiple occurrences of '.'
    if (value === '.' && displayValue.includes('.')) value = '';

    if (value === 'ce') {
      // deletes last char in displayValue
      displayValue = displayValue.substr(0, displayValue.length - 1);
      // set displayValue to '0 if displayValue is empty string
      if (displayValue === '') displayValue = '0';
    } else {
      // replace displayValue with value if displayValue equal to '0'
      // else concatenate displayValue and value
      displayValue === '0' ? displayValue = value : displayValue += value;
    }
    this.setState({ displayValue })
  }

  render = () => {
    const { displayValue, numbers, operators } = this.state;

    return (
      <div className="calculator-container">
        <Display displayValue={displayValue} />
        <Keypad
          callOperator={this.callOperator}
          numbers={numbers}
          operators={operators}
          setOperator={this.setOperator}
          updateDisplay={this.updateDisplay}
        />
      </div>
    );
  }
}

export default Calculator;