module.exports = function(sequelize, DataTypes) {
  const Guest = sequelize.define("Guest", {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
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
    // phone: {
    //     type: Sequelize.ARRAY(Sequelize.STRING),
    //     allowNull: true,
    //     unique: true,
    //     validate: {
    //         isValidPhoneNo: function(value) {
    //             if (!value) return value;

    //             var regexp = /^[0-9]+$/;
    //             var values = (Array.isArray(value)) ? value : [value];

    //             values.forEach(function(val) {
    //                 if (!regexp.test(val)) {
    //                     throw new Error("Number only is allowed.");
    //                 }
    //             });
    //             return value;
    //         }
    //     }
    // },
    phone: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [7 - 10]
      }
    },
    addressStreet: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    addressCity: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    addressZip: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [9]
      }
    },
    foodChoice: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [9]
      }
    }
  });
  return Guest;
};
