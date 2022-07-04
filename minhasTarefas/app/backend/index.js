require('dotenv').config();

const express = require('express');

const app = express();
app.use(express.json());

const PORT = process.env.PORTA || 3002;

app.listen(PORT, () => console.log(`rodando na porta: ${PORT}`));
