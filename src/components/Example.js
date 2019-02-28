import React from 'react';
import {Button} from 'antd';

const Example = ({onClickBtn}) => {
  return (
    <div>
      <Button type="primary" onClick={() => onClickBtn(1)}>Primary</Button>
    </div>
  );
};

Example.propTypes = {};

export default Example;
