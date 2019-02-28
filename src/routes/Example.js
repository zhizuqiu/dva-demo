import React from 'react';
import {connect} from 'dva';
import {Link} from 'dva/router';
import Example from '../components/Example';

const Examples = ({dispatch, example}) => {
  function handleClickBtn(id) {
    dispatch({
      type: 'example/fetch',
      payload: id,
    });
  }

  console.log(example);
  return (
    <div>
      <h2>Example : {example.data}</h2>
      <Link to="/index">index</Link>
      <Example onClickBtn={handleClickBtn}/>
    </div>
  );
};

// export default Examples;
export default connect(({example}) => ({
  example,
}))(Examples);
