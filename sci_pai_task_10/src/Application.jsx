import React, { Component } from 'react';

import DisplayBinary from './Components/DisplayBinary';
import DisplayDecimal from './Components/DisplayDecimal';
import DisplayHexadecimal from './Components/DisplayHexadecimal';
import DisplayOctal from './Components/DisplayOctal';
import Keypad from './Components/Keypad';
import Information from './Components/Information';

import './style/KeypadStyle.css'
import './style/ComponentsStyle.css'
import './style/AppStyle.css'

class Application extends Component {
  constructor(props) {
    super(props);
    this.state = { value: 2137, historyValue: null};
    this.updateValue = this.updateValue.bind(this);
    this.randomValue = this.randomValue.bind(this);
  }

  randomValue(newValue) {
    this.setState({ value: newValue});
  }

  updateValue(newValue) {
    if( !isNaN(parseInt(newValue)) && 0 <= parseInt(newValue) <= 9){
      if(isNaN(parseInt(this.state.historyValue))){
        this.setState({ historyValue: newValue.toString()});

      }else{
        this.setState({ historyValue: parseInt(this.state.historyValue.toString() + newValue.toString())});
      }
    }else{
      this.setState({ historyValue: newValue});
    }
  }


  render() {
    return (
      <div id="app">
        <div className="container">
          <div className="resultValues">
            <DisplayHexadecimal  value={this.state.value} />
            <DisplayDecimal  value={this.state.value} />
            <DisplayOctal  value={this.state.value} />
            <DisplayBinary value={this.state.value}/>
            <Keypad updateValue={this.updateValue} randomValue={this.randomValue} />
           </div>
          
          <Information historyValue={this.state.historyValue} />
        </div>
      </div>
    );
  }
}

export default Application;

