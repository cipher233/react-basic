## 组件通信
1. [父子关系](./src/ToChildren.jsx)
- 父组件提供要传递的数据 - state
- 给子组件标签添加属性值为 state中的数据
- 子组件中通过 props 接收父组件中传过来的数据
  - 类组件使用this.props获取props对象
  - 函数式组件直接通过参数获取props对象 
  
**`props`只是只读对象, `props`可以传递任意数据**

- [子传父实现](./src/ToFather.jsx)
  - 父组件提供一个回调函数 - 用于接收数据
  - 将函数作为属性的值, 传递子组件
  - 子组件通过props调用 回调函数
  - 将子组件中的数据作为参数传递给回调函数

2. [兄弟关系](./src/Sibling.jsx) - 自定义时间模式产生技术方法 eventBus / 通过共同的父组件通信
- 通过状态提升机制, 利用共同的父组件实现兄弟通信

3. [跨组件通信](./src/AcrossC.jsx) 

Context 提供了一个无需为每层组件手动添加 props，就能在组件树间进行数据传递的方法
- 创建Context对象 导出 Provider 和 Consumer对象
```jsx
const { Provider, Consumer } = createContext()
```
- 使用Provider包裹根组件提供数据
```jsx
<Provider value={this.state.message}>
    {/* 根组件 */}
</Provider>
```
- 需要用到数据的组件使用Consumer包裹获取数据
```jsx
<Consumer >
    {value => /* 基于 context 值进行渲染*/}
</Consumer>
```

1. 其他关系 - **mobx / redux / 基于hook的方案**