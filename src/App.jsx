import React from 'react';


// 子组件
function ListItem(props) {
  const { name, price, info, id, delHandler } = props;
  return (
    <div style={{ borderStyle: 'double', margin: '10px', padding: '10px' }}>
      <h3>{name}</h3>
      <p>{price}</p>
      <p>{info}</p>
      <button onClick={() => delHandler(id)}>删除</button>
    </div>
  );
}

// 父组件
class App extends React.Component {
  state = {
    list: [
      { id: 1, name: '超级好吃的棒棒糖', price: 18.8, info: '开业大酬宾，全场8折' },
      { id: 2, name: '超级好吃的大鸡腿', price: 34.2, info: '开业大酬宾，全场8折' },
      { id: 3, name: '超级无敌的冰激凌', price: 14.2, info: '开业大酬宾，全场8折' }
    ]
  };

  delHandler = (id) => {
    this.setState({
      list: this.state.list.filter(item => item.id !== id)
    });
  };

  render() {
    return (
      <>
        {
          this.state.list.map(item =>
            <ListItem
              key={item.id}
              {...item}
              delHandler={this.delHandler}
            />
          )
        }
      </>
    );
  }
}

export default App;