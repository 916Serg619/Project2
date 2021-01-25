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
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        len: [7 - 10]
      }
    }
    // foodChoice: {
    //   type: DataTypes.STRING,
    //   allowNull: true,
    //   validate: {
    //     len: [1]
    //   }
    // }
  });
  return Guest;
};
