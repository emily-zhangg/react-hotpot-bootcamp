export default function initBillModel(sequelize, DataTypes) {
  return sequelize.define(
    'bill',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      total: {
        type: DataTypes.FLOAT,
      },
      name: {
        type: DataTypes.STRING,
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
