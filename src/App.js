import React, { Component } from 'react';
import './App.css';
import Button from './components/Button';
import Input from './components/Input';
import ClearButton from './components/ClearButton';
import * as math from 'mathjs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };
  }

  addToInput = val => {
    if (val === 'x') val = '*';
    if ((this.state.input === "ERROR") || (this.state.input === "Infinity")) this.setState({ input: "" + val });
    else {
      this.setState({ input: this.state.input + val });
    }
  };

  handleEqual = () => {
    try {
      const mathVar = math.evaluate(this.state.input).toString();
      if (!isNaN(mathVar))
        this.setState({ input: mathVar });
      else
        throw "ERROR".toString();  
    }
    catch (err) {
      this.setState({ input: "ERROR" });
    }
  };

  backSpaceClear = () => {
    if ((this.state.input === "ERROR") || (this.state.input === "Infinity")) this.setState({ input: "" });
    else this.setState({ input: this.state.input.slice(0, -1) })
  };

  clearAll = () => {
    this.setState({ input: "" });
  };

  render() {
    return (
      <div className="app">
        <div className="calc-wrapper">
          <Input input={this.state.input} />
          <div className="row">
            <ClearButton handleClear={() => this.backSpaceClear()}>CE</ClearButton>
            <ClearButton handleClear={() => this.clearAll()}>C</ClearButton>
            <Button handleClick={this.addToInput}>(</Button>
            <Button handleClick={this.addToInput}>)</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>1</Button>
            <Button handleClick={this.addToInput}>2</Button>
            <Button handleClick={this.addToInput}>3</Button>
            <Button handleClick={this.addToInput}>+</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>4</Button>
            <Button handleClick={this.addToInput}>5</Button>
            <Button handleClick={this.addToInput}>6</Button>
            <Button handleClick={this.addToInput}>-</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>7</Button>
            <Button handleClick={this.addToInput}>8</Button>
            <Button handleClick={this.addToInput}>9</Button>
            <Button handleClick={this.addToInput}>x</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>.</Button>
            <Button handleClick={this.addToInput}>0</Button>
            <Button handleClick={() => this.handleEqual()}>=</Button>
            <Button handleClick={this.addToInput}>/</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
