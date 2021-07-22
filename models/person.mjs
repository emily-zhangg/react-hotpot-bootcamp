export default function initPersonModel(sequelize, DataTypes) {
  return sequelize.define(
    'person',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      amount: {
        type: DataTypes.FLOAT,
      },
      name: {
        type: DataTypes.STRING,
      },
      billId: {
        type: DataTypes.INTEGER,
        refereces: {
          model: 'bills',
          key: 'id',
        },
      },
      // ... [<OTHER_COLUMNS>]
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      // The underscored option makes Sequelize reference snake_case names in the DB.
      underscored: true,
    }
  );
}
