module.exports = (sequelize, DataTypes) => {
  const Tarefas = sequelize.define(
    'Tarefa',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },

      tarefa: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      status: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false,
      tableName: 'tarefas',
    },
  );
  return Tarefas;
};
