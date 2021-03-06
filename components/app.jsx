import React, { useState, useEffect } from 'react';
import gridThing from '../grid.js';
import Grid from './grid.jsx';

export default () => {
  const [grid,setGrid] = useState(gridThing);
  const [isChanging,setIsChanging] = useState(false);
  const [intId,setIntId] = useState(null);

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

  const startStop = () => {
    if (isChanging) {
      clearInterval(intId)
      setIntId(null);
      setIsChanging(false)
    } else {
      let id = setInterval(() => {
        // console.log(grid)
        console.log('intervalling')
        handleChange(getNeighbors(grid))
      },100)
      setIsChanging(true)
      setIntId(id)
    }
  }

  return(
    <div className="container">
      <h1>The Game of Life</h1>
      <button className="start-button" onClick={startStop}>{isChanging ? "Stop" : "Start"}</button>
      <div className="grid">
        <Grid grid={grid}  handleChange={handleChange}/>
      </div>
    </div>
  )
}