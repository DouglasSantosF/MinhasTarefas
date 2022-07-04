module.exports = {
  up: async (queryInterface, Sequelize) => {
    const tarefasTable = queryInterface.createTable('tarefas', {

      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },

      tarefa: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      status: {
        type: Sequelize.STRING,
        allowNull: false,
      },

    });
  },

  async down(queryInterface, Sequelize) {

  },
};
