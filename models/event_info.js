module.exports = function(sequelize, DataTypes) {
  const eventInfo = sequelize.define("eventInfos", {
    // eventInfoId: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    //   primaryKey: true
    // },
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
  eventInfo.associate = function(models) {
    eventInfo.hasMany(models.vendorInfos, {
      onDelete: "cascade"
    });
  };
  return eventInfo;
};
