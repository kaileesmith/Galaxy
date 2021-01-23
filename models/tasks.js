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
		housemember: {
			type: DataTypes.STRING,
			allowNull: true,
			len: [1],
		},
	}); 

	Task.associate = function (models) {
		Task.belongsTo(models.User, {
			foreignKey: {
				allowNull: false,
			},
		});
		
	};
	return Task;
};
