function F() {
  return (
    <>
      <C>出现在子组件的children属性</C>
    </>
  );
}

function C(props) {
  return (
    <div>
      {props.children}
    </div>
  );
}

export default F;