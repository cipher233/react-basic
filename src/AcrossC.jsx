import React from 'react';
import { createContext } from 'react';

const { Provider, Consumer } = createContext();

class AcrossF extends React.Component {
  state = { message: 'this is message' };

  render() {
    return (
      <Provider value={this.state.message}>
        <div className='app'>
          <ComA />
        </div>
      </Provider>
    );
  }
}

function ComA() {
  return (
    <ComC />
  );
}

function ComC() {
  return (
    <Consumer>
      {value => <div>{value}</div>}
    </Consumer>
  );
}

export default AcrossF;

