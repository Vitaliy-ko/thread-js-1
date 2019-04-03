module.exports = (orm, DataTypes) => {
    const User = orm.define('User', {
        email: {
            allowNull: false,
            type: DataTypes.STRING
        },
        username: {
            allowNull: false,
            type: DataTypes.STRING
        },
        password: {
            allowNull: false,
            type: DataTypes.STRING
        },
        isActive: {
            allowNull: false,
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE
    }, {});

    User.associate = function (models) {
        // associations can be defined here
    };

    return User;
};
