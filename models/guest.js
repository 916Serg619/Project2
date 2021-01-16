module.exports = function(sequelize, DataTypes) {
    var Guest = sequelize.define("Guest", {
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        last_name: {
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
                len: [7-10]
            }
        },
        address_street: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        address_city: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        address_zip: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [9]
            }
        },
        food_choice: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [9]
            }
        }
    })
    return Guest;
}