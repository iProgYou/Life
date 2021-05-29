import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

document.addEventListener("DOMContentLoaded", () => {
    // console.log(grid)
    const root = document.getElementById("root")
    ReactDOM.render(<App />, root)
})