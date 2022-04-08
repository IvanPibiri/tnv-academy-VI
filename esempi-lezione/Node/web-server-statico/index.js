// Importiamo il modulo express
// const express = require('express'); // se type=commonjs in package.json
import express from 'express'; // se type=module in package.json

const PORT = 1234;

// Creiamo un'istanza di express
const app = express();

// Mettiamo il server in ascolto sulla porta 'PORT' e logghiamo in console
app.listen(
    PORT,
    () => console.log(`Server listening: ${PORT}`)
);

// Impostiamo la cartella dalla quale servire i file statici
app.use(express.static('public'));