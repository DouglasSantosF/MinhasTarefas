require('dotenv').config();
const express = require('express');
const tarefasRouter = require('./routes/tarefas.routes');

const app = express();
app.use(express.json());

app.use('/', tarefasRouter);

const PORT = process.env.PORTA || 3002;

// eslint-disable-next-line no-console
app.listen(PORT, () => console.log(`rodando na porta: ${PORT}`));
