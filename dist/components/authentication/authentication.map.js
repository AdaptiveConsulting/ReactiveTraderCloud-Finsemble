{"version":3,"sources":["webpack:///webpack/bootstrap 47f09971bf29a7aea05b?5de5******************","webpack:///./src-built-in/components/authentication/authentication.js"],"names":["inLogin","FSBL","Clients","RouterClient","onReady","checkAuthorizationStatus","$","click","e","text","actionLink","html","document","body","addEventListener","handleKeydown","code","shiftKey","processAuthInput","quit","System","Window","getCurrent","show","username","getElementById","value","password","data","hide","publishCredentials","user","AuthenticationClient","publishAuthorization","shutdownApplication","prop","updateConfig","config","cb","configSet","components","menuItems","defaultWorkspace","workspaces","ConfigClient","processAndSet","newConfig","overwrite","replace","err","getConfig","fetch","method","credentials","catch","reason","console","warn","then","res","json","displayErrorMessage","fin","desktop","ERROR_MESSAGE","INPUTS","INPUT_ERROR_CLASS","addClass","on","removeClass"],"mappings":"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","file":"components/authentication/authentication.js","sourcesContent":[" \t// The module cache\n \tvar installedModules = {};\n\n \t// The require function\n \tfunction __webpack_require__(moduleId) {\n\n \t\t// Check if module is in cache\n \t\tif(installedModules[moduleId]) {\n \t\t\treturn installedModules[moduleId].exports;\n \t\t}\n \t\t// Create a new module (and put it into the cache)\n \t\tvar module = installedModules[moduleId] = {\n \t\t\ti: moduleId,\n \t\t\tl: false,\n \t\t\texports: {}\n \t\t};\n\n \t\t// Execute the module function\n \t\tmodules[moduleId].call(module.exports, module, module.exports, __webpack_require__);\n\n \t\t// Flag the module as loaded\n \t\tmodule.l = true;\n\n \t\t// Return the exports of the module\n \t\treturn module.exports;\n \t}\n\n\n \t// expose the modules object (__webpack_modules__)\n \t__webpack_require__.m = modules;\n\n \t// expose the module cache\n \t__webpack_require__.c = installedModules;\n\n \t// identity function for calling harmony imports with the correct context\n \t__webpack_require__.i = function(value) { return value; };\n\n \t// define getter function for harmony exports\n \t__webpack_require__.d = function(exports, name, getter) {\n \t\tif(!__webpack_require__.o(exports, name)) {\n \t\t\tObject.defineProperty(exports, name, {\n \t\t\t\tconfigurable: false,\n \t\t\t\tenumerable: true,\n \t\t\t\tget: getter\n \t\t\t});\n \t\t}\n \t};\n\n \t// getDefaultExport function for compatibility with non-harmony modules\n \t__webpack_require__.n = function(module) {\n \t\tvar getter = module && module.__esModule ?\n \t\t\tfunction getDefault() { return module['default']; } :\n \t\t\tfunction getModuleExports() { return module; };\n \t\t__webpack_require__.d(getter, 'a', getter);\n \t\treturn getter;\n \t};\n\n \t// Object.prototype.hasOwnProperty.call\n \t__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };\n\n \t// __webpack_public_path__\n \t__webpack_require__.p = \"\";\n\n \t// Load entry module and return exports\n \treturn __webpack_require__(__webpack_require__.s = 153);\n\n\n\n// WEBPACK FOOTER //\n// webpack/bootstrap 47f09971bf29a7aea05b","var inLogin = true;\r\n/************************************************\r\n * \t\t\tSAMPLE AUTHENTICATION\r\n ************************************************/\r\n//On ready, check to see if the user has a valid session\r\nFSBL.Clients.RouterClient.onReady(() => {\r\n    checkAuthorizationStatus();\r\n});\r\n\r\n$('#authAction').click(function (e) {\r\n    var text = inLogin ? \"Sign Up\" : \"Login\"\r\n    var actionLink = inLogin ? \"Login\" : \"Sign Up\";\r\n    inLogin = !inLogin;\r\n    $('#submitButton').html(text);\r\n    $('#authAction').html(actionLink);\r\n});\r\n\r\ndocument.body.addEventListener('keydown', handleKeydown);\r\n\r\n//Submits credentials on enter, closes on quit.\r\nfunction handleKeydown(e) {\r\n    if (e.code === 'Enter' && e.shiftKey === false) {\r\n        processAuthInput();\r\n    }\r\n\r\n    if (e.code === 'Escape') {\r\n        quit();\r\n    }\r\n}\r\n\r\n//Here, you may want to hit a server and request the user's session information. If the session is valid, log them in automatically. This sample code assumes that they are not logged in and just shows the authentication page.\r\nfunction checkAuthorizationStatus() {\r\n    FSBL.System.Window.getCurrent().show();\r\n    //setTimeout(processAuthInput, 0);\r\n}\r\n\r\n//Dummy function that just dumbly accepts whatever is in the form.\r\nfunction processAuthInput() {\r\n    var username = document.getElementById(\"username\").value;\r\n    var password = document.getElementById(\"password\").value;\r\n    // real authentication might use BasicAuth, Digest Auth, or pass off to authentication server which redirects back when authenticated\r\n    // below is a dummy example that just accepts credentials from the form and publishes them out.\r\n    var data = { username: username, password: password }\r\n    FSBL.System.Window.getCurrent().hide();\r\n\r\n    //FSBL.Clients.WindowClient.finsembleWindow.hide();\r\n    //In the real world, you'd get this from a server. Send joe's credentials to a server, and get back entitlements/basic config. For this example, we just accept the credentials.\r\n    publishCredentials(data)\r\n}\r\n\r\n//Pass credentials to the application.\r\nfunction publishCredentials(user) {\r\n    FSBL.Clients.AuthenticationClient.publishAuthorization(user.username, user);\r\n}\r\n\r\n//CLose app when the X is clicked.\r\nfunction quit() {\r\n    FSBL.shutdownApplication();\r\n}\r\n\r\n// Add events to HTML elements\r\n$(\"#submitButton\").click(processAuthInput);\r\n$(\"#FSBL-close\").click(quit);\r\n\r\n// For this example, the password doesn't do anything, so we are disabling it and setting a tooltip to let the user\r\n// know they don't need to enter a password. This should be removed in a production implementation.\r\n$(\"#password\")\r\n    .prop(\"disabled\", true)\r\n    .prop(\"placeholder\", \"Demo needs no password\");\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n/************************************************\r\n * \t\t\t\tUNUSED EXAMPLE CODE\r\n ************************************************/\r\n\r\n//Add the config to the config service. Our sample has nothing, b\r\nfunction updateConfig(config, cb) {\r\n    var configSet = {}\r\n    if (config.components) configSet[\"components\"] = config.components;\r\n    if (config.menuItems) configSet[\"menus\"] = config.menuItems;\r\n    if (config.defaultWorkspace) configSet[\"workspaces\"] = config.defaultWorkspace.workspaces;\r\n\r\n    //if (config.overrides) configSet[\"cssOverridePath\"] = config.overrides;\r\n    FSBL.Clients.ConfigClient.processAndSet(\r\n        {\r\n            newConfig: configSet,\r\n            overwrite: true,\r\n            replace: true\r\n        },\r\n        function (err, config) {\r\n            return cb(err)\r\n        })\r\n}\r\n\r\n//Get a config for the user\r\nfunction getConfig(cb) {\r\n    fetch(\"/user/config\", {\r\n        method: \"GET\",\r\n        credentials: 'include'\r\n    })\r\n        .catch((reason) => {\r\n            console.warn(\"Fail Auth Get\", reason);\r\n        })\r\n        .then((res) => {\r\n            return res.json();\r\n        }).then(data => {\r\n            if (data) {\r\n                updateConfig(data, cb);\r\n            }\r\n        });\r\n}\r\n\r\n\r\nfunction displayErrorMessage() {\r\n    fin.desktop.Window.getCurrent().show();\r\n    var ERROR_MESSAGE = $('.fsbl-input-error-message');\r\n    var INPUTS = $('.fsbl-auth-input');\r\n    const INPUT_ERROR_CLASS = 'fsbl-input-error';\r\n\r\n    INPUTS.addClass(INPUT_ERROR_CLASS);\r\n\r\n    ERROR_MESSAGE.show();\r\n\r\n    INPUTS.on('keydown', function () {\r\n        INPUTS.removeClass(INPUT_ERROR_CLASS)\r\n        ERROR_MESSAGE.hide();\r\n    });\r\n}\n\n\n// WEBPACK FOOTER //\n// ./src-built-in/components/authentication/authentication.js"],"sourceRoot":""}