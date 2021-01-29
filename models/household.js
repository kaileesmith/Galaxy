module.exports = (sequelize, DataTypes) => {
	const HouseMember = sequelize.define(
		"HouseMember",
		{
			name: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					len: [1],
				},
			},
		},
		{
			timestamps: false,
		}
	);
	HouseMember.associate = (models) => {
		HouseMember.belongsTo(models.User, {
			foreignKey: {
				allowNull: false,
			},
		});
	};
	return HouseMember;
};
