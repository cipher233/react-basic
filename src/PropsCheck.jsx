import PropTypes from 'prop-types';


function List(props) {
  return (
    <>
      <div>{props.pageSize}</div>
      <ul>
        {props.lang.map((item, index) => <li key={index}>{item.value}</li>)}
      </ul>
    </>
  );
}

List.propTypes = {
  // 定义props规则
  lang: PropTypes.array
};

// Prop默认值
List.defaultProps = {
  pageSize: 10
};

export default List;