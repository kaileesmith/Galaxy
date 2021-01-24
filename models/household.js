module.exports = (sequelize, DataTypes) => {
	const HouseMember = sequelize.define(
		"HouseMember",
		{
			name: {
				type: DataTypes.STRING,
				allowNull: false,
			},
		},
		{
			timestamps: false,
		}
	);
	HouseMember.associate = (models) => {
		HouseMember.belongsTo(models.User);
	};
	return HouseMember;
};
