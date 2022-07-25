import F from './ChildrenP';
import List from './PropsCheck';

let data = [
  { value: "java" },
  { value: "python" },
  { value: "c" },
  { value: "rust" },
  { value: "golang" }
];

function App() {
  return (
    <div className="App">
      <F />
      <List lang={data} />
    </div>
  );
}

export default App;
