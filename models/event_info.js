module.exports = function(sequelize, DataTypes) {
  const eventInfo = sequelize.define("eventInfos", {
    couple: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1]
      }
    },
    venueName: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1]
      }
    },
    eventDate: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1]
        // isDate: true
      }
    },
    addressStreet: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1]
      }
    },
    addressCity: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1]
      }
    },
    foodOptionOne: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1]
      }
    },
    foodOptionTwo: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1]
      }
    }
  });
  return eventInfo;
};
