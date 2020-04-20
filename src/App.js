import React, { Component } from 'react';
import Button from "./Button"
import Input from "./Input"
import Clear  from "./Clear"
import Equals from "./Equals"
import './App.css';

class  App extends Component {
  constructor(props){
    super(props)

    this.state ={
      input:"",
      previousNumber:"",
      currentNumber:"",
      operator:""
    }
  }

  addToInput = value =>{
    this.setState({input:this.state.input + value})
  }

  addZeroToInput = value =>{
      this.setState({
        input: this.state.input + value
    })
  }

  addDecimalToInput = value =>{
    if(this.state.input.indexOf(".") === -1){
      this.setState({input: this.state.input + value})
    }
  }

  Clear = () =>{
    this.setState({
      input:"",
      previousNumber:"",
      currentNumber:""
    })
  }

  addition = () => {

    this.setState({
      previousNumber:this.state.input,
      input:"",
      operator:"plus"
    })
    
  }
 subtraction = ()=> {
    this.setState({
      previousNumber:this.state.input,
      input:"",
      operator:"minus"
    })
 } 
 multiply = ()=>{
   this.setState({
     previousNumber:this.state.input,
     input:"",
     operator:"multiply"
   })
 }
 divide = () =>{
   this.setState({
     previousNumber:this.state.input,
     input:"",
     operator:"divide"
   })
 }
  evalute = () =>{
    switch(this.state.operator){
      case "plus":    
        this.setState({
          input:parseInt(this.state.previousNumber) + parseInt(this.state.input)
        })
        break;
      case "minus":
        this.setState({
          input:parseInt(this.state.previousNumber) - parseInt(this.state.input)
        })
        break;
      case "multiply":
        this.setState({
          input:parseInt(this.state.previousNumber) * parseInt(this.state.input)
        })
        break;
      case "divide":
        this.setState({
          input:parseInt(this.state.previousNumber) / parseInt(this.state.input)
        })
        break;
        default:
          this.setState({
            input:this.state.input
          })
    
      }
  }

  render(){

    return (
    <div className="App">
      <div className="panel">
        <div className="row">
         <Input>{this.state.input}</Input>
        </div>
        <div className="row">
          <Button handleClick={this.addToInput}>7</Button>
          <Button handleClick={this.addToInput}>8</Button>
          <Button handleClick={this.addToInput}>9</Button>
          <Button handleClick={this.multiply}>x</Button>
        </div>
        <div className="row">
          <Button handleClick={this.addToInput}>4</Button>
          <Button handleClick={this.addToInput}>5</Button>
          <Button handleClick={this.addToInput}>6</Button>
          <Button handleClick={this.addition}>+</Button>
        </div>
        <div className="row">
          <Button handleClick={this.addToInput}>3</Button>
          <Button handleClick={this.addToInput}>2</Button>
          <Button handleClick={this.addToInput}>1</Button>
          <Button handleClick={this.subtraction}>-</Button>
        </div>
        <div className="row">
          <Button handleClick={this.addZeroToInput}>0</Button>
          <Button handleClick={this.addDecimalToInput}>.</Button>
          <Equals handleClick={this.evalute}>=</Equals>
          <Clear  handleClear={this.Clear}>AC</Clear>
          <Button  handleClick={this.divide}>/</Button>
        </div>
      </div>
    </div>
        
    )
  }
  
}

export default App;
