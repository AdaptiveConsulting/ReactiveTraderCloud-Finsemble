/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ (function(module, exports) {


// This global will contain our current zoom level
window.fsblZoomLevel = 1;

// Sets the zoom by setting the CSS "zoom" value on the body
// It sets an opposing zoom on the Finsemble header in order that it maintains its size
function setZoom(pct) {
	document.querySelectorAll("body > *").forEach(function (el) {
		el.style.zoom = pct;
	});
	//document.body.style.zoom = pct;
	let FSBLHeader = document.querySelector("#FSBLHeader");
	if (FSBLHeader) {
		FSBLHeader.style.zoom = 1;
		//document.body.style.zoom = 1/pct;
	}
}

// Zoom in. Zoom levels are saved as component state "fsbl-zoom"
function zoomIn() {
	window.fsblZoomLevel += 0.1;
	setZoom(window.fsblZoomLevel);
	FSBL.Clients.WindowClient.setComponentState({ field: "fsbl-zoom", value: window.fsblZoomLevel });
}

function zoomOut() {
	window.fsblZoomLevel -= 0.1;
	setZoom(window.fsblZoomLevel);
	FSBL.Clients.WindowClient.setComponentState({ field: "fsbl-zoom", value: window.fsblZoomLevel });
}

// Startup, attaches ctrl+ and ctrl- as hot keys
// Checks for an existing zoom state and initializes the screen to that zoom level if set
function runZoomHandler() {
	FSBL.Clients.HotkeyClient.addBrowserHotkey(["ctrl", "="], zoomIn);
	FSBL.Clients.HotkeyClient.addBrowserHotkey(["ctrl", "-"], zoomOut);
	FSBL.Clients.WindowClient.getComponentState({ field: "fsbl-zoom" }, function (err, state) {
		if (state != null) {
			window.fsblZoomLevel = state;
			setZoom(window.fsblZoomLevel);
		}
	});
};

// TODO, catch and recall scroll position

// Startup pattern for preload. Preloads can come in any order, so we need to wait on either the window event or the FSBL event
if (window.FSBL && FSBL.addEventListener) {
	FSBL.addEventListener("onReady", runZoomHandler);
} else {
	window.addEventListener("FSBLReady", runZoomHandler);
}

/***/ })
/******/ ]);
//# sourceMappingURL=zoom.map.js