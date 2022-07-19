import React from 'react';


class FatherProps extends React.Component {
  constructor(props) {
    super(props);
    this.state = { message: 'this is message' };
  }

  changeMessage = (newMsg) => {
    this.setState({ message: newMsg });
  };

  render() {
    return (
      <>
        <Son
          msg={this.state.message}
          changeMsg={this.changeMessage}
        />
      </>
    );
  }
}

function Son(props) {
  function handleClick() {
    props.changeMsg("this is new message");
  }

  return (
    <div>
      {props.msg}
      <button onClick={handleClick}>change</button>
    </div>
  );
}

export default FatherProps;