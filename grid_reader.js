const fs = require('fs')
// import fs from 'fs';
// export default () => {
  
    console.log(fs.readFile('grid.txt','utf-8'))
// }
// let gridReader = async () => {
//     let grid;
//     await fs.readFileSync('grid.txt','utf-8',(err,data) => {
//         if (err) throw err;

//         console.log(data)
//         console.log('hey')
//     });

//     return grid;
// };

// export default gridReader;