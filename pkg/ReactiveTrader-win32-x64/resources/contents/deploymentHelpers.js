const installer = require('./installer');
const fs = require('fs');
const path = require('path');
const logger = require('../src/logger/')();

let FEA_PATH = __dirname;

/**
 * Save the URL of the application so that the deployed electron application will know where to point to.
 * @param {*} manifestUrl
 */
async function setChromiumFlags(chromiumFlags) {
	logger.log("SETTING CHROMIUM FLAGS");
	fs.writeFileSync(path.join(FEA_PATH, './configs/chromiumFlags.json'), JSON.stringify(chromiumFlags), 'utf-8');
}

/**
 * Save the URL of the application so that the deployed electron application will know where to point to.
 * @param {*} manifestUrl
 */
async function setManifestURL(manifestUrl) {
	logger.log("SETTING MANIFEST URL");
	fs.writeFileSync(path.join(FEA_PATH, './configs/manifestLocation.json'), JSON.stringify({
		manifestUrl
	}), 'utf-8');
}

/**
 * Save the update URL of the application so that the deployed electron application will know where to look for updates.
 * @param {string} updateUrl url where the update feed lives.
 */
async function setUpdateURL(updateFeedUrl) {
	logger.log("SETTING UPDATE URL");
	fs.writeFileSync(path.join(FEA_PATH, './configs/updateLocation.json'), JSON.stringify({
		updateFeedUrl
	}), 'utf-8');
}

/**
 * Takes a single config from the finsemble-seed and returns an object with both a packager config and an installer config.
 * @param {*} config
 */
function deriveConfigs(config) {
	const {
		name,
		certificateFile,
		certificatePassword,
		icon,
		outputDirectory,
		signWithParams,
		version
	} = config;

	return {
		packageConfig: {
			icon,
			dir: FEA_PATH,
			derefSymlinks: true,
			appVersion: config.version,
			out: config.outputDirectory,
			name: config.name || 'ElectronAdapter'
		},
		installerConfig: {
			name,
			certificateFile,
			certificatePassword,
			outputDirectory,
			signWithParams,
			version,
			title: config.name,
			iconUrl: config.icon,
			setupIcon: config.icon,
			exe: `${config.name}.exe`,
			setupExe: `${config.name}Setup.exe`,
			authors: config.authors || 'ChartIQ',
			noMsi: true,
			appDirectory: null,
			skipUpdateIcon: true
		}
	};
}

/**
 * Set the FEA's directory path
 * @param {*} path
 */
function setFeaPath(feaPath) {
	if (feaPath) {
		logger.log(`SETTING FEA PATH: ${feaPath}`);
		FEA_PATH = feaPath;
	}
}

/**
 * Creates a package and then an installer off of that package
 * @param {*} config - a single config file found in the finsemble seed. It will be parsed and turned into a config for electron-packager and electron-installer.
 */
async function createFullInstaller(config) {
	logger.log("CREATING FULL INSTRALLER");
	if (!manifestExists()) return;
	const { packageConfig, installerConfig } = deriveConfigs(config);
	const paths = await createPackage(packageConfig);
	installerConfig.appDirectory = paths[0];
	return createInstaller(installerConfig);
}

/**
 * Creates a package for an electron application
 * @param {*} packageConfig - electron-packager config
 */
async function createPackage(packageConfig = {}) {
	if (!manifestExists()) return;
	const packager = require('./packageCreator');
	return packager.package(packageConfig).catch((err) => {
		logger.error('Error creating Package', err.message || err);
	});
}

/**
 * Creates an installer from an electron package
 * @param {*} installerConfig  - electron-wininstaller config
 */
async function createInstaller(installerConfig) {
	if (!manifestExists()) return;
	return installer.createInstaller(installerConfig);
}

/**
 * Little helper that checks to see if the manifestLocation exists.
 * The deployed application will look here to figure out where it should retrieve finsemble from.
 */
function manifestExists() {
	try {
		fs.readFileSync(path.join(FEA_PATH, './configs/manifestLocation.json'));
		return true;
	} catch (e) {
		logger.error('Unable to find manifestLocation.json in deployed e2o. Ensure that e2o.packager was invoked prior to creating your package or installer.');
		return false;
	}
}
module.exports = {
	createInstaller,
	createPackage,
	createFullInstaller,
	setManifestURL,
	setChromiumFlags,
	setUpdateURL,
	setFeaPath,
};
