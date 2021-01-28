// Requiring path to so we can use relative routes to our HTML files
const path = require("path");
const db = require("../models");

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {
	app.get("/", function (req, res) {
		// If the user already has an account send them to the members page
		if (req.user) {
			res.redirect("/members");
		}
		res.render("login");
	});

	app.get("/signup", function (req, res) {
		// If the user already has an account send them to the members page
		if (req.user) {
			res.redirect("/members");
		}
		res.render("signup");
	});

	// Here we've add our isAuthenticated middleware to this route.
	// If a user who is not logged in tries to access this route they will be redirected to the signup page
	app.get("/members", isAuthenticated, function (req, res) {
		let HouseMember;
		let Task;
		let allData = {};
		db.HouseMember.findAll({ raw: true }).then((dbHouseMembers) => {
			HouseMember = dbHouseMembers;
			allData.data1 = HouseMember;

			// return HouseMember;
			db.Task.findAll({ raw: true }).then((dbTask) => {
				Task = dbTask;
				allData.data2 = Task;

				res.render("members", allData);
			});
		});
	});
};
