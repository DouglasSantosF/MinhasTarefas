const tarefasService = require('../services/tarefas.service');

const createTarefa = async (req, res) => {
  try {
    const { tarefa, status } = req.body;
    await tarefasService.createTarefa({ tarefa, status });
    return res.status(200);
  } catch (error) {
    return error;
  }
};

module.exports = { createTarefa };
