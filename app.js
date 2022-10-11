const express = require ('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3001; 

app.listen (port, () =>  
    console.log("Iniciando servidor en el ${port}"));

app.use(express.static('public'));

app.get ('/', (req, res) => {
    let htmlPath = path.resolve(__dirname, './views/index.html');  /* ---> CON RESOLVE */
    res.sendFile (htmlPath)
})