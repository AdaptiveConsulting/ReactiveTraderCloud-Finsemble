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

	const _createInstallers = require("./lib/createInstallers");

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

	const DOCS_OUTPUT = "./docs";

	function deploy_cleanDocsFolder() {
		return del([`${DOCS_OUTPUT}/**`, `!${DOCS_OUTPUT}`], {
			force: true
		});
	}
	deploy_cleanDocsFolder.displayName = `Delete current ${DOCS_OUTPUT}`;

	function deploy_dist() {
		return gulp.src(`./dist/**`).pipe(gulp.dest(DOCS_OUTPUT));
	}
	deploy_dist.displayName = `Copy dist/** -> ${DOCS_OUTPUT}`;

	function deploy_finsemble() {
		return gulp
			.src(`./finsemble/**`, { base: "." })
			.pipe(gulp.dest(DOCS_OUTPUT));
	}
	deploy_finsemble.displayName = `Copy ./finsemble -> ${DOCS_OUTPUT}`;

	function deploy_public() {
		return gulp.src(`./public/**`).pipe(gulp.dest(DOCS_OUTPUT));
	}
	deploy_public.displayName = `Copy public/** -> ${DOCS_OUTPUT}`;

	function deployToDocs(deployDone) {
		return gulp.series(
			deploy_cleanDocsFolder,
			deploy_dist,
			deploy_finsemble,
			deploy_public
		);
	}

	function createInstallers() {
		const INSTALLERS_TO_CREATE = [
			{ manifestName: "manifest-dev", exeName: "dev" },
			{ manifestName: "manifest-prod", exeName: "demo" }
		];
		return _createInstallers(INSTALLERS_TO_CREATE);
	}

	taskMethods.post = done => {
		gulp.task("deploy", deployToDocs());
		done();
	};

	// Utilities
	const logToTerminal = (msg, color = "white", bgcolor = "bgBlack") => {
		if (!chalk[color]) color = "white";
		if (!chalk[color][bgcolor]) bgcolor = "bgBlack";
		console.log(
			`[${new Date().toLocaleTimeString()}] ${chalk[color][bgcolor](msg)}.`
		);
		return Promise.resolve();
	};
};
