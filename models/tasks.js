module.exports = (sequelize, DataTypes) => {
    const Task = sequelize.define('Task', {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1],
        },
        },
        body: {
            type: DataTypes.TEXT,
            allowNull: true,
                len: [1],
        },
        complete: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
    });
    Task.associate = function (models) {
        models.Task.belongsTo(models.Household, {
            foreignKey: {
            allowNull: false
            }
        })
    }
    return Task;
    };