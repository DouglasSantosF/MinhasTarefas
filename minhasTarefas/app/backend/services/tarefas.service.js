/* eslint-disable no-console */
const { Tarefa } = require('../models');

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

const updateTarefa = async ({ id, tarefa }) => {
  try {
    await Tarefa.update({ tarefa }, { where: { id } });
    return await getAllTarefas();
  } catch (error) {
    console.log(error);
    return error;
  }
};

const updateStatus = async ({ id, status }) => {
  try {
    await Tarefa.update({ status }, { where: { id } });
    return await getAllTarefas();
  } catch (error) {
    console.log(error);
    return error;
  }
};

const deleteTarefa = async ({ id }) => {
  try {
    const exclude = await Tarefa.destroy({ where: { id } });
    return exclude;
  } catch (error) {
    return error;
  }
};

module.exports = {
  createTarefa, getAllTarefas, updateTarefa, deleteTarefa, updateStatus,
};
