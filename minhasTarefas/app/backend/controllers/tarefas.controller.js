const tarefasService = require('../services/tarefas.service');

const createTarefa = async (req, res) => {
  try {
    const { tarefa, status } = req.body;
    await tarefasService.createTarefa({ tarefa, status });
    return res.status(201);
  } catch (error) {
    return error;
  }
};

const getAllTarefas = async (req, res) => {
  try {
    const tarefas = await tarefasService.getAllTarefas();
    return res.status(200).json(tarefas);
  } catch (error) {
    return error;
  }
};

const updateTarefa = async (req, res) => {
  try {
    const { id, tarefa } = req.body;
    await tarefasService.updateTarefa({ id, tarefa });
    return res.status(200).end();
  } catch (error) {
    return error;
  }
};

module.exports = { createTarefa, getAllTarefas, updateTarefa };
