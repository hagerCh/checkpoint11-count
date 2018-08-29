import React from 'react';
import { connect } from 'react-redux';
import '../App.css';

class Counter extends React.Component { 
  increment = () => {
    this.props.dispatch({ type: 'INCREMENT' });
  }

  decrement = () => {
    this.props.dispatch({ type: 'DECREMENT' });
  }

  render() {
    return (
      <div>
        <center>
            <h2>Counter</h2>
            <div>
            <button onClick={this.decrement}>-</button>
            <span>{this.props.count}</span>
            <button onClick={this.increment}>+</button>
            </div>
        </center>
      </div>
    )
  }
}
function mapStateToProps(state) {
    return {
      count: state.count
    };
  }

export default connect(mapStateToProps)(Counter);