module.exports = (sequelize, DataTypes) => {
    const Household = sequelize.define('Household', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [2, 50],
            },
        },
    });
    Household.associate = function (models) {
        models.Household.belongsTo(models.User, {
            foreignKey: {
            allowNull: false
            }
        })
    }
    return Household;
    };