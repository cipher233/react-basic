import React from 'react';

class ChildrenProps extends React.Component {
  constructor(props) {
    super(props);
    this.state = { message: 'from father message' };
  }

  render() {
    return (
      <>
        <FSon
          msg={this.state.message}
          age={20}
          isMale={true}
          cb={() => { console.log(1); }}
          child={<div style={{ color: 'pink' }}>this is child</div>}
        />
        <CSon msg={this.state.message} />
      </>
    );
  }
}

function FSon(props) {
  return (
    <div>
      msg: {props.msg} | age: {props.age} | isMale: {props.isMale}
      {props.child}
    </div>
  );
}

class CSon extends React.Component {
  render() {
    return (
      <div>{this.props.msg}</div>
    );
  }
}

export default ChildrenProps;
