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
    this.state = { value: 0, historyValue: null, history: []};
    this.updateValue = this.updateValue.bind(this);
    this.calculate = this.calculate.bind(this);
  }



  updateValue(newValue) {
    if( !isNaN(parseInt(newValue)) && 0 <= parseInt(newValue) <= 9){
      if(isNaN(parseInt(this.state.historyValue))){
        this.setState({ historyValue: newValue.toString()});

      }else{
        this.setState({ historyValue: (this.state.historyValue.toString() + newValue.toString())});
      }
    }else{
      this.setState({ historyValue: newValue});
    }
  }

  calculate  (){
    if(this.state.history.length <= 0){
      return;
    }
    // Shunting Yard algorithm from infix notation to RPN
    const operators = {
      "+": 2,
      "-": 2,
      "*": 3,
      "/": 3,
      "^": 4
    };
    const output = [];
    let stack = [];
    
    for (const token of this.state.history) {
      if (!isNaN(parseFloat(token))) {
        output.push(token);
      } else if (token in operators) {
        while (stack.length && operators[token] <= operators[stack[stack.length - 1]]) {
          output.push(stack.pop());
        }
        stack.push(token);
      } else if (token === "(") {
        stack.push(token);
      } else if (token === ")") {
        while (stack.length && stack[stack.length - 1] !== "(") {
          output.push(stack.pop());
        }
        if (!stack.length) {
          throw new Error("Mismatched parentheses");
        }
        stack.pop();
      } else {
        throw new Error("Invalid token: " + token);
      }
    }
    
    output.push(...stack.reverse());  
 // RPN calculate
 stack = [];
    
 for (let i = 0; i < output.length; i++) {
   const token = output[i];
 
   if (!isNaN(parseFloat(token))) {
     stack.push(parseFloat(token));
   } else {
     const b = stack.pop();
     const a = stack.pop();
     
     if (token === "+") {
       stack.push(a + b);
     } else if (token === "-") {
       stack.push(a - b);
     } else if (token === "*") {
       stack.push(a * b);
     } else if (token === "/") {
       stack.push(a / b);
     } else if (token === "^") {
       stack.push(Math.pow(a, b));
     } else {
       throw new Error("Invalid operator: " + token);
     }
   }
 }

  this.setState({ value: stack.pop()});
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
            <Keypad updateValue={this.updateValue} />
           </div>
          
          <Information  calculate={this.calculate} historyValue={this.state.historyValue} history={this.state.history} />
        </div>
      </div>
    );
  }
}

export default Application;

