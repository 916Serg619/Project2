module.exports = function(sequelize, DataTypes) {
  const Guest = sequelize.define("Guest", {
    firstName: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1]
      }
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1]
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        isEmail: true
      }
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1]
      }
    }
  });
  Guest.associate = function(models) {
    Guest.belongsTo(models.eventInfos, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Guest;
};
