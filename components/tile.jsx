import React from 'react';
import classNames from 'classnames';

const Tile = ({ handleChange,char }) => {

  const tileClassNames = classNames({
    'tile': true,
    'dead': char === '0',
    'alive': char === '1',
    'border': char === '_'
  
  })

  let leDiv = char !== '_' ? 
    <div onClick={handleChange} className={tileClassNames} ></div> :
    <div className={tileClassNames} ></div> 

  return(
    <>
      {leDiv}
    </>
  );
};

export default Tile;