module.exports = function(sequelize, DataTypes) {
<<<<<<< HEAD
        const vendorInfo = sequelize.define("vendorInfo", {
                    vendorName: {
                        type: DataTypes.STRING,
                        allowNull: false,
                        validate: {
                            len: [1]
                        }
                    },
                    service: {
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
                    phoneNumber: {
                        type: DataTypes.STRING,
                        allowNull: true,
                        validate: {
                            isEmail: true
                        }
                    },
=======
    const vendorInfo = sequelize.define("vendorInfo", {
                vendorName: {
                    type: DataTypes.STRING,
                    allowNull: false,
                    validate: {
                        len: [1]
                    }
                },
                service: {
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
                phoneNumber: {
                    type: DataTypes.STRING,
                    allowNull: true,
                    validate: {
                        isEmail: true
                    }
                },
            })
        };
>>>>>>> 874437fb2c15e945e922b995234851d00137ea1e
