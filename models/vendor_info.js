module.exports = function(sequelize, DataTypes) {
  const vendorInfo = sequelize.define("vendorInfos", {
    vendorName: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1]
      }
    },
    service: {
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
        // isEmail: true
        len: [1]
      }
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        // isEmail: true
        len: [1]
      }
    }
  });
  vendorInfo.associate = function(models) {
    vendorInfo.belongsTo(models.eventInfos, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return vendorInfo;
};
