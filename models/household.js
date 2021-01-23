module.exports = (sequelize, DataTypes) => {
	const HouseMember = sequelize.define("HouseMember", {
		name: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [2, 50],
			},
		},
	});
	HouseMember.associate = (models) => {
		// has many rather than belongsto?
		HouseMember.belongsTo(models.User, {
			foreignKey: {
				allowNull: false,
			},
		});
	};
	return HouseMember;
};
