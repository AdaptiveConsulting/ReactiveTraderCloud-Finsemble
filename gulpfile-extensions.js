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

	const origBuildWebpack = taskMethods.buildWebpack;
	taskMethods.buildWebpack = (done) => {
		origBuildWebpack(() => {
			// Mangle FSBL
			const fs = require("fs");
			const path = require("path");
			const fsblJS = path.join(__dirname, "finsemble", "FSBL.js");
			fs.readFile(fsblJS, "utf8", (err, data) => {
				if (err) {
					return console.log(err);
				}
				const result = data.replace(/window.localStorage/g, "true");

				fs.writeFile(fsblJS, result, "utf8", (err) => {
					if (err) return console.log(err);
				});
			});
			done();
		})
	}

	taskMethods.post = (done) => {

		// Example, add a new gulp task that first calls the built in "build" task and then does something of your choosing
		/*
		gulp.task("myTask", gulp.series("build"), function (done) {
			// do something
			done();
		});
		*/

		// Example of how to redefine the built in build task. Note that all of the built in npm run commands use "build"
		/*
		 gulp.task("build", gulp.series(
				"clean",
				taskMethods.copyStaticFiles,
				taskMethods.buildWebpack,
				taskMethods.buildSass
			)
		);
		*/

		gulp.task("deploy", function() {
			return gulp.src("./dist/**/*").pipe(deploy())
		})

		done();
	}
};