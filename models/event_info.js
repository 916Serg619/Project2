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
    }
  });
  eventInfo.associate = function(models) {
    eventInfo.hasMany(models.vendorInfos, {
      onDelete: "cascade"
    });
    eventInfo.hasMany(models.Guest, {
      onDelete: "cascade"
    });
  };
  return eventInfo;
};
