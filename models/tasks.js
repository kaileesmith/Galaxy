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
		monday: {
			type: DataTypes.BOOLEAN,
			defaultValue: false,
		},
		tuesday: {
			type: DataTypes.BOOLEAN,
			defaultValue: false,
		},
		wednesday: {
			type: DataTypes.BOOLEAN,
			defaultValue: false,
		},
		thursday: {
			type: DataTypes.BOOLEAN,
			defaultValue: false,
		},
		friday: {
			type: DataTypes.BOOLEAN,
			defaultValue: false,
		},
		saturday: {
			type: DataTypes.BOOLEAN,
			defaultValue: false,
		},
		sunday: {
			type: DataTypes.BOOLEAN,
			defaultValue: false,
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
