// Requiring our models and passport as we've configured it
const db = require("../models");
const passport = require("../config/passport");

module.exports = function (app) {
	// Using the passport.authenticate middleware with our local strategy.
	// If the user has valid login credentials, send them to the members page.
	// Otherwise the user will be sent an error
	app.post("/api/login", passport.authenticate("local"), function (req, res) {
		res.json(req.user);
	});

	// Route for signing up a user. The user's password is automatically hashed and stored securely
	app.post("/api/signup", function (req, res) {
		db.User.create({
			email: req.body.email,
			password: req.body.password,
			houseName: req.body.houseName,
		})
			.then(function () {
				res.redirect(307, "/api/login");
			})
			.catch(function (err) {
				res.status(401).json(err);
			});
	});

	// Route for logging user out
	app.get("/logout", function (req, res) {
		req.logout();
		res.redirect("/");
	});

	// Route for getting some data about our user to be used client side
	app.get("/api/user_data", function (req, res) {
		if (!req.user) {
			// The user is not logged in, send back an empty object
			res.json({});
		} else {
			// Otherwise send back the user's email and id
			// Sending back a password, even a hashed password, isn't a good idea
			res.json({
				email: req.user.email,
				id: req.user.id,
			});
		}
	});

	// Route to get all users for house hold
	app.get("api/housemember", (req, res) => {
		db.HouseMember.findAll({}).then((dbHouseMember) => res.json(dbHouseMember));
	});

	// Route to create Housememeber
	app.post("api/housememeber", (req, res) => {
		db.HouseMember.create({
			name: req.body.name,
		}).then((dbHouseMember) => res.json(dbHouseMember));
	});

	// Route to delete a housememeber
	app.delete("api/housemember/:id", (req, res) => {
		db.HouseMember.destroy({
			where: {
				id: req.params.id,
			},
		}).then(() => res.send("user has been deleted!"));
	});

	// Route to create a Task
	app.post("api/task", (req, res) => {
		db.Task.create({
			title: req.body.title,
			description: req.body.description,
			monday: false,
			tuesday: false,
			wednesday: false,
			thursday: false,
			friday: false,
			saturday: false,
			sunday: false,
		}).then((dbTask) => res.json(dbTask));
	});

	// Route to delete a Task
	app.delete("api/task/:id", (req, res) => {
		db.Task.destroy({
			where: {
				id: req.params.id,
			},
		}).then(() => res.send("task has been deleted!"));
	});

	// Route to update a Task
	app.patch("api/task", (req, res) => {
		db.Task.update(
			{
				title: req.body.title,
				description: req.body.description,
			},
			{
				where: { id: req.body.id },
			}
		).then(() => res.send("updated!"));
	});
};
