const express = require ('express');
const app = express();
const path = require('path');

app.listen (3000, () => console.log('Alta de servidor: http://localhost:3000'));

app.use(express.static('public'));

app.get ('/', (req, res) => {
    let htmlPath = path.resolve(__dirname, './views/index.html');  /* ---> CON RESOLVE */
    res.sendFile (htmlPath)
})