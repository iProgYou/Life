import React from 'react';
import classNames from 'classnames';

const Tile = ({ pos,char }) => {

  const tileClassNames = classNames({
    'tile': true,
    'dead': char === '0',
    'alive': char === '1',
    'border': char === '_'
  
  })
  return(
    <div className={tileClassNames} ></div>
  );
};

export default Tile;