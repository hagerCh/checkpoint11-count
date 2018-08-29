import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; 
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Counter from './components/Counter';

const initialState = {
    count: 0
  };

  function reducer(state = initialState, action) {
    switch(action.type) {
      case 'INCREMENT':
        return {
          count: state.count + 1
        };
      case 'DECREMENT':
        return {
          count: state.count - 1
        };
      default:
        return state;
    };
  } 

const store = createStore(reducer); 
const App = () => (
    <Provider store={store}>
        <Counter />
    </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker(); 
