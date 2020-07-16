/**
 * This strict context prevents certain actions from being taken and throws more exceptions.
 * The statement “use strict” instructs the browser to use the Strict mode.
 * Which is a reduced and safer feature set of JavaScript.
 */
"use strict";

/**
 * DEPENDENCIES
 * Series of npm packages that we will use to give our index.js functionality
 */

// fs File Sytem
var fs = require("fs");
// Path
var path = require("path");
// Sequelize
var Sequelize = require("sequelize");

var basename = path.basename(module.filename);
var env = process.env.NODE_ENV || "development";
var config = require(__dirname + "/../config/config.json")[env];
var db = {};

if (config.use_env_variable) {
	var sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
	var sequelize = new Sequelize(
		config.database,
		config.username,
		config.password,
		config
	);
}

fs.readdirSync(__dirname)
	.filter(function (file) {
		return (
			file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
		);
	})
	.forEach(function (file) {
		var model = sequelize["import"](path.join(__dirname, file));
		db[model.name] = model;
	});

Object.keys(db).forEach(function (modelName) {
	if (db[modelName].associate) {
		db[modelName].associate(db);
	}
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
