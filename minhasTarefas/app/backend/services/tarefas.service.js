/* eslint-disable no-console */
const { Tarefa } = require('../database/models');

const createTarefa = async ({ tarefas, status }) => {
  try {
    return await Tarefa.create({ tarefas, status });
  } catch (error) {
    console.log(error);
    return error;
  }
};

const getAllTarefas = async () => {
  try {
    const tarefas = await Tarefa.findAll();
    return tarefas;
  } catch (error) {
    console.log(error);
    return error;
  }
};

module.exports = { createTarefa, getAllTarefas };
