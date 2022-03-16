
import React, { Component } from "react";
import './Counter.css'

class Counter extends Component {

  constructor() {
    super()
    this.state = {
      counter: 0
    }

    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
    this.reset = this.reset.bind(this)
  }

  render() {
    return (
      <div>
        <CounterButton incrementBy={1} decrementBy={1} decrementMethod={this.decrement} incrementMethod={this.increment} />
        <CounterButton incrementBy={5} decrementBy={5} decrementMethod={this.decrement} incrementMethod={this.increment} />
        <CounterButton incrementBy={10} decrementBy={10} decrementMethod={this.decrement} incrementMethod={this.increment} />
        <span className="span-counter">{this.state.counter}</span>
        <button className="reset" onClick={this.reset}>Reset</button>
      </div>
    )
  }

  increment(incrementBy) {
    this.setState({ counter: this.state.counter + incrementBy })
  }

  decrement(decrementBy) {
    this.setState({ counter: this.state.counter - decrementBy })
  }
  reset(){
    this.setState({counter:0})
  }
}




class CounterButton extends Component {
  constructor() {
    super()
    this.state = {
      counter: 0
    }

    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
    
  }
  render() {
    return (
      <div>
        <button className="btn-counter" onClick={this.increment}>+ {this.props.incrementBy}</button>
        <button className="btn2-counter" onClick={this.decrement}>- {this.props.decrementBy}</button>
        
        {/* <span className="count">{this.state.counter}</span> */}
      </div>
    )
  }

  increment() {
    this.setState({ counter: this.state.counter + this.props.incrementBy })
    this.props.incrementMethod(this.props.incrementBy)
  }

  decrement() {
    this.setState({ counter: this.state.counter - this.props.decrementBy })
    this.props.decrementMethod(this.props.decrementBy)
  }
  

}


export default Counter;



