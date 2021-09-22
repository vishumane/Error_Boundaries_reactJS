
import React,{Component} from "react";
class Counter extends Component {
    constructor(props) {
      super(props);
      this.state = { counter: 0 };
      this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick() {
      this.setState(({counter}) => ({
        counter: counter + 1
      }));
    }
    
    render() {
      if (this.state.counter === 5) {
        // Simulate a JS error
        throw new Error('application crashed!');
      }
      return <h1 onClick={this.handleClick}>{this.state.counter}</h1>;
    }
  }

  export default Counter;