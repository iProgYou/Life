import React, { useState, useEffect } from 'react';
import gridThing from '../grid.js';
import Grid from './grid.jsx';

export default () => {
  const [grid,setGrid] = useState(gridThing);
  // console.log(grid)
  const handleChange = (posToFlip) => {
    if (!posToFlip.length) {
      return null;
    }
    console.log('changing')
    for (let i = 0; i < posToFlip.length; i++) {
      let currPos = posToFlip[i];
      if (grid[currPos[0]][currPos[1]] === '0') {
        grid[currPos[0]][currPos[1]] = '1'
      } else {
        grid[currPos[0]][currPos[1]] = '0'
      }
    }

    setGrid([...grid])
  }

  const getNeighbors = (grid) => {
    let posToFlip = [];
    for (let i = 1; i < grid.length - 1; i++) {
      for (let j = 1; j < grid.length - 1; j ++) {
        const neighbors = numNeighbors(grid, [i,j]);
        let gridChar = grid[i][j];
        if ((gridChar === '0' && neighbors === 3) || (gridChar === '1' && (neighbors < 2 || neighbors > 3))) {
          posToFlip.push([i,j]);
        }
      }
    }

    return posToFlip;
  }

  const numNeighbors = (grid,pos) => {
    const dirs = [
      [0,1], // right
      [1,0], // down
      [1,1], // down-right
      [-1,0], // up
      [0,-1], // left
      [-1,-1], // left-up
      [-1,1], // up-right
      [1,-1] // down-left
    ];

    let neighbors = 0;

    for (let i = 0; i < dirs.length; i++) {
      let dir = dirs[i];
      let currPos = [pos[0] + dir[0], pos[1] + dir[1]];
      let gridChar = grid[currPos[0]][currPos[1]];
      if (gridChar === '1') {
        neighbors++;
      }
    }

    return neighbors;
  }

  useEffect(() => {
    let intervalId = setInterval(() => {
      // console.log(grid)
      console.log('intervalling')
      handleChange(getNeighbors(grid))
    },100)
    return () => {
      clearInterval(intervalId);
    };
  },[grid])

  return(
    <>
      <Grid grid={grid} />
    </>
  )
}