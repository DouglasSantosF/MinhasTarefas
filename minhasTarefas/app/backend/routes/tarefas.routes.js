const express = require('express');
const tarefasController = require('../controllers/tarefas.controller');

const router = express.Router();

router.get('/', tarefasController.getAllTarefas);
router.post('/', tarefasController.createTarefa);
router.put('/tarefa', tarefasController.updateTarefa);
router.put('/status', tarefasController.updateStatus);
router.delete('/:id', tarefasController.deleteTarefa);

module.exports = router;
