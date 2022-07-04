/* eslint-disable no-unused-vars */
module.exports = {
  up: async (queryInterface, _Sequelize) => queryInterface.bulkInsert(
    'tarefas',
    [
      {
        tarefa: 'Ir para a academia',
        status: 'pendente',
      },
      {
        tarefa: 'Ir ao mercado',
        status: 'em andamento',
      },
      {
        tarefa: 'Jogar o lixo fora',
        status: 'pronto',
      },
    ],
    {},
  ),

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('tarefas', null, {});
  },
};
