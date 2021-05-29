import React from 'react';
import Tile from './tile';

const Grid = ({ grid, handleChange }) => {
  console.log(grid)
  const display = grid.map((row,i) => {
    return(<div className="row" key={`row-${i}`}>{row.map((tile,j) => {
      return(
            <Tile 
              key={`tile-${i}${j}`} 
              char={tile} 
              pos={[i,j]}
              handleChange={() => handleChange([[i,j]])} 
            />
    )
    })}</div>)
  })
  return(
      <>
        {display}
      </>
  )
}

export default Grid;