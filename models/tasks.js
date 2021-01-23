module.exports = (sequelize, DataTypes) => {
	const Task = sequelize.define("Task", {
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
			defaultValue: false,
		},
	});
	Task.associate = function (models) {
		Task.belongsTo(models.HouseMember, {
			foreignKey: {
				allowNull: false,
			},
		});
	};
	return Task;
};
