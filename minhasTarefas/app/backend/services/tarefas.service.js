/* eslint-disable no-console */
const { Tarefa } = require('../database/models');

const createPost = async ({ tarefas, status }) => {
  try {
    return await Tarefa.create({ tarefas, status });
  } catch (error) {
    console.log(error);
    return error;
  }
};

module.exports = { createPost };
