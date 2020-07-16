/**
 * DEPENDENCIES
 * Series of npm packages that we will use to give our server useful functionality
 * npm packages using (express,express-session,password)
 */
var express = require("express");
var session = require("express-session");
// Requiring passport as we've configured it
var passport = require("./config/passport");

/**
 * Setting an initial port and requiring models for syncing
 */
var PORT = process.env.PORT || 8080;
var db = require("./models");

/**
 * EXPRESS CONFIGURATION
 * This sets up the basic properties for our express server
 * Creating express app and configuring middleware needed for authentication
 */

// Tells node that we are creating an "express" server
var app = express();
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));
// We need to use sessions to keep track of our user's login status
app.use(
	session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);
// Sets passport initialization middleware
app.use(passport.initialize());
// Persistent login session
app.use(passport.session());

/**
 * ROUTES
 * Import routes and give the server access to them
 * These routes give our server a "map" of how to respond when users visit or request data from various URLs
 */
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

/**
 * LISTENER
 * The below code effectively "starts" our server
 * Syncing our database and logging a message to the user upon success
 */
db.sequelize.sync().then(function () {
	app.listen(PORT, function () {
		console.log(
			"==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
			PORT,
			PORT
		);
	});
});
