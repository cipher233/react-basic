import React from 'react';
import ChildrenProps from './ToChildren';
import FatherProps from './ToFather';
import FC from './Sibling';
import AcrossF from './AcrossC';

class App extends React.Component {

  render() {
    return (
      <>
        <div style={{ color: 'red' }}>Props Father to Children:</div>
        <ChildrenProps />
        <hr />
        <div style={{ color: 'red' }}>Props Children to Father:</div>
        <FatherProps />
        <hr />
        <div style={{ color: 'red' }}>Props Sibling:</div>
        <FC />
        <hr />
        <div style={{ color: 'red' }}>Props Across Component:</div>
        <AcrossF />
        <FC />
      </>
    );
  }
}

export default App;
