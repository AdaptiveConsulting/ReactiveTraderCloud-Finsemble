/**
 * This file allows you to customize the Finsemble build behavior which runs through gulpfile.js.
 * You can do three things:
 * 1) Run code before a normal gulp task (PRE)
 * 2) Modify or add code that is called within a gulp task (CODE)
 * 3) Override or add new gulp tasks (TASKS)
 */
module.exports = taskMethods => {
	"use strict";

	const gulp = require("gulp");
	const chalk = require("chalk");
	const fs = require("fs");
	const path = require("path");
	const del = require("del");
	// const shell = require("shelljs");

	const DOCS_OUTPUT = "./docs";
	const DOCS_SRC = ["./dist/**", "./finsemble", "./public/**"];

	const origBuildWebpack = taskMethods.buildWebpack;
	taskMethods.buildWebpack = done => {
		origBuildWebpack(() => {
			// Mangle FSBL
			const fsblJS = path.join(__dirname, "finsemble", "FSBL.js");
			fs.readFile(fsblJS, "utf8", (err, data) => {
				if (err) {
					return console.log(err);
				}
				const result = data.replace(/window.localStorage/g, "true");

				fs.writeFile(fsblJS, result, "utf8", err => {
					if (err) return console.log(err);
				});
			});
			done();
		});
	};


	// // Use this to run custom code after every build process
	// const buildOriginal = taskMethods.build;
	// taskMethods.build = done => {
	// 	buildOriginal(() => {
	//		// Custom stuff here
	// 		done();
	// 	});
	// };

	function deployToDocs() {
		logToTerminal(`Generating Github Pages output in ${DOCS_OUTPUT}`, "cyan");
		logToTerminal(`Deleting current ${DOCS_OUTPUT}`);
		del.sync([`${DOCS_OUTPUT}/**`, `!${DOCS_OUTPUT}`], { force: true });
		logToTerminal(`Copying ${DOCS_SRC.join(", ")} -> ${DOCS_OUTPUT}`);
		return gulp.src(DOCS_SRC).pipe(gulp.dest(DOCS_OUTPUT));
	}


	taskMethods.post = done => {
		gulp.task("deploy", deployToDocs);

		done();
	};

	// Utilities
	const logToTerminal = (msg, color = "white", bgcolor = "bgBlack") => {
		if (!chalk[color]) color = "white";
		if (!chalk[color][bgcolor]) bgcolor = "bgBlack";
		console.log(
			`[${new Date().toLocaleTimeString()}] ${chalk[color][bgcolor](msg)}.`
		);
	};
};
