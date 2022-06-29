import './App.css';

// 1. 识别常规变量
const name = 'Cipher233';
// 2. 原生js方法调用
const getAge = () => {
  return 18;
};
// 3. 三元运算符
const flag = true;

// JSX列表渲染
const songs = [
  { id: 1, name: 'Wild World' },
  { id: 2, name: 'California Dream' },
  { id: 3, name: '僕が死のうと思ったのは' },
];

// 条件渲染: 三元表达式 逻辑&& 复杂的多分支逻辑(收敛到函数)
const getTag = type => {
  switch (type) {
    case 1:
      return <h1>H1</h1>;
    case 2:
      return <h2>H2</h2>;
    case 3:
      return <h3>H3</h3>;
    default:
      return <h1>H1</h1>;
  }
};

// 样式处理: 内联样式 类名样式 
const innerStyle = {
  color: 'cyan',
  fontSize: '30px',
};
const CyanText = () => {
  return <span style={innerStyle}>Cyan Text</span>;
};

const isActive = true;
const CadetBlueText = () => {
  return <span className={isActive ? 'active' : ''}>CadetBlue Text</span>;
};



function App() {
  return (
    <div className="App">
      name: {name} | age: {getAge()} | {flag ? 'good' : 'bad'}
      <ul>
        {
          songs.map(item => <li key={item.id}>{item.name}</li>)
        }
      </ul>

      {/* 条件渲染 */}
      {flag ? (
        <div>
          <span>三元条件渲染</span>
        </div>
      ) : null}

      {true && <span>逻辑&&条件渲染</span>}
      {getTag(1)}
      {getTag(2)}
      {getTag(3)}

      {/* 样式处理 */}
      <CyanText />
      <CadetBlueText />
    </div>
  );
}

export default App;
