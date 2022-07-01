import React, { createRef, useState } from "react";


// 函数组件
function Hello() {
  return (
    <div>Hello Function Components</div>
  );
}

// 类组件
class HelloClass extends React.Component {
  render() {
    return (
      <div>
        Hello Class Components
      </div>
    );
  }
}

// 事件绑定: on+事件名称={事件处理程序}
// eg: <div onClick={()=>{alert('233')}}></div>
function HelloFn() {
  const clickHandler = () => {
    alert(new Date().toUTCString());
  };
  return (
    <button onClick={clickHandler}>Func请点击</button>
  );
}

class HelloClassFn extends React.Component {
  clickHandler = () => {
    alert('类组件事件绑定');
  };

  render() {
    return (
      <button onClick={this.clickHandler}>Class请点击</button>
    );
  }
}

// 获取事件对象e
function HelloEFn() {
  const clickHandler = e => {
    console.log(e);
  };

  const clickPrevent = e => {
    // 阻止默认行为
    e.preventDefault();
    console.log(e);
  };
  return (
    <>
      <button onClick={clickHandler}>获取事件对象e</button>
      <a href='https://www.google.com' onClick={clickPrevent}>Google</a>
    </>
  );
}

// 传递自定义参数
// 1. () => handler(params)
// 2. (e) => handler(e, params)
function HelloMessage() {
  const clickHandler = (e, msg) => {
    console.log('函数组件传递自定义参数:', msg);
    console.log(e);
  };
  return <button onClick={(e) => clickHandler(e, new Date().toISOString())}>传递自定义参数</button>;
}

// 组件状态
class HelloState extends React.Component {
  state = { counter: 0 };
  // this 绑定
  // constructor(props) {
  //   super(props);
  //   this.state = { num: 1 };
  //   this.addNum = this.addNum.bind(this); // 按钮四
  // }
  // addNum() {
  //   this.setState({ num: this.state.num + 1 });
  // }
  // <div>
  // <h2>数字为： {this.state.num}</h2>
  // <button onClick={() => { this.setState({ num: this.state.num + 1 }); }}>按钮一：加1</button>
  // {/* 通过bind修改this指向 */}
  // <button onClick={this.addNum.bind(this)} >按钮二：加1</button>
  // <button onClick={() => this.addNum()} >按钮三：加1</button>
  // <button onClick={this.addNum} >按钮四：加1</button>
  // </div>;

  addOne = () => {
    this.setState(state => ({
      counter: state.counter + 1
    }));
  };

  render() {
    return (
      <button onClick={this.addOne}>Class: Clicked {this.state.counter} times</button>
    );
  }
}

function HelloStateFunc() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>Func: Clicked {count} times</button>
  );
}

// 组件复杂状态的不可变性
class ComplexState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      list: [1, 2, 3],
      person: {
        name: 'jack',
        age: 22,
      },
    };
  }

  changeState = () => {
    this.setState(state => ({
      count: state.count + 1,
      list: [...state.list, 4],
      person: {
        ...state.person,
        name: 'rose',
      }
    }));
  };

  render() {
    return (
      <div>
        <button onClick={this.changeState}>change state</button>
        <div>count: {this.state.count}</div>
        <div>list: {this.state.list}</div>
        <div>person name: {this.state.person.name}, age: {this.state.person.age}</div>
      </div>
    );
  }
}

// 表单处理: 受控组件 非受控组件
// 受控组件就是可以被`react的状态控制的组件`
// 非受控组件通过手动操作dom的方式获取文本框的值,文本框的状态不受state控制
// 类似vue的v-model双向绑定操作
class ControlCmp extends React.Component {
  // 1. 声明react状态
  state = { message: 'please input' };

  changeInput = (e) => {
    // 4.拿到value属性交给react state
    this.setState({ message: e.target.value });
  };

  render() {
    return (
      <div>
        {/* 2. 给value属性绑定react state
        3. 给tag绑定change事件 */}
        <input type="text" value={this.state.message} onChange={this.changeInput} />
      </div>
    );
  }
}

class UnControlCmp extends React.Component {
  // 1.使用createRef产生一个存放dom的对象容器
  msgRef = createRef();

  changeHandler = () => {
    // 3. 事件处理中， 通过`msgRef.current`拿到input的dom元素， `msgRef.current.value`拿到文本框的值
    console.log(this.msgRef.current.value);
  };

  render() {
    return (
      <div>
        {/* 2.ref绑定 获取真实dom */}
        <input ref={this.msgRef} />
        <button onClick={this.changeHandler}>click</button>
      </div>
    );
  }
}


function App() {
  return (
    <div className="App">
      <Hello />
      <Hello></Hello>
      <HelloClass />
      <HelloFn />
      <HelloClassFn />
      <HelloEFn />
      <HelloMessage />
      <HelloState />
      <HelloStateFunc />
      <ComplexState />
      <ControlCmp />
      <UnControlCmp />
    </div>
  );
}

export default App;
