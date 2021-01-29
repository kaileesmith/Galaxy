module.exports = (sequelize, DataTypes) => {
	const Task = sequelize.define(
		"Task",
		{
			title: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					len: [1],
				},
			},
			description: {
				type: DataTypes.TEXT,
				allowNull: true,
			},
			housemember: {
				type: DataTypes.STRING,
				allowNull: true,
			},
		},
		{
			timestamps: false,
		}
	);

	Task.associate = (models) => {
		Task.belongsTo(models.User, {
			foreignKey: {
				allowNull: false,
			},
		});
	};
	return Task;
};
