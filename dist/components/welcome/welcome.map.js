{"version":3,"sources":["webpack:///webpack/bootstrap 3dbdf5d2c70774bdc2ac?f71b**************","webpack:///./src-built-in/components/welcome/welcome.js"],"names":["window","launchTutorial","fin","desktop","System","openUrlWithBrowser","err","quitFinsemble","FSBL","shutdownApplication","addEventListener","init"],"mappings":";AAAA;AACA;;AAEA;AACA;;AAEA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;;AAEA;AACA;;AAEA;AACA;;AAEA;AACA;AACA;;;AAGA;AACA;;AAEA;AACA;;AAEA;AACA,mDAA2C,cAAc;;AAEzD;AACA;AACA;AACA;AACA;AACA;AACA;AACA,aAAK;AACL;AACA;;AAEA;AACA;AACA;AACA,mCAA2B,0BAA0B,EAAE;AACvD,yCAAiC,eAAe;AAChD;AACA;AACA;;AAEA;AACA,8DAAsD,+DAA+D;;AAErH;AACA;;AAEA;AACA;;;;;;;;AChEAA,OAAOC,cAAP,GAAwB,SAASA,cAAT,GAA0B;AACjDC,KAAIC,OAAJ,CAAYC,MAAZ,CAAmBC,kBAAnB,CAAsC,gEAAtC,EAAwG,YAAY;AACnH;AACA,EAFD,EAEG,UAAUC,GAAV,EAAe;AACjB;AACA,EAJD;AAKA,CAND;;AAQAN,OAAOO,aAAP,GAAuB,SAASA,aAAT,GAAyB;AAC/C;AACAC,MAAKC,mBAAL;AACA,CAHD;;AAKA,IAAIT,OAAOQ,IAAP,IAAeA,KAAKE,gBAAxB,EAA0C;AACzCF,MAAKE,gBAAL,CAAsB,SAAtB,EAAiCC,IAAjC;AACA,CAFD,MAEO;AACNX,QAAOU,gBAAP,CAAwB,WAAxB,EAAqCC,IAArC;AACA;;AAED,SAASA,IAAT,GAAgB,CAEf,C","file":"components/welcome/welcome.js","sourcesContent":[" \t// The module cache\n \tvar installedModules = {};\n\n \t// The require function\n \tfunction __webpack_require__(moduleId) {\n\n \t\t// Check if module is in cache\n \t\tif(installedModules[moduleId]) {\n \t\t\treturn installedModules[moduleId].exports;\n \t\t}\n \t\t// Create a new module (and put it into the cache)\n \t\tvar module = installedModules[moduleId] = {\n \t\t\ti: moduleId,\n \t\t\tl: false,\n \t\t\texports: {}\n \t\t};\n\n \t\t// Execute the module function\n \t\tmodules[moduleId].call(module.exports, module, module.exports, __webpack_require__);\n\n \t\t// Flag the module as loaded\n \t\tmodule.l = true;\n\n \t\t// Return the exports of the module\n \t\treturn module.exports;\n \t}\n\n\n \t// expose the modules object (__webpack_modules__)\n \t__webpack_require__.m = modules;\n\n \t// expose the module cache\n \t__webpack_require__.c = installedModules;\n\n \t// identity function for calling harmony imports with the correct context\n \t__webpack_require__.i = function(value) { return value; };\n\n \t// define getter function for harmony exports\n \t__webpack_require__.d = function(exports, name, getter) {\n \t\tif(!__webpack_require__.o(exports, name)) {\n \t\t\tObject.defineProperty(exports, name, {\n \t\t\t\tconfigurable: false,\n \t\t\t\tenumerable: true,\n \t\t\t\tget: getter\n \t\t\t});\n \t\t}\n \t};\n\n \t// getDefaultExport function for compatibility with non-harmony modules\n \t__webpack_require__.n = function(module) {\n \t\tvar getter = module && module.__esModule ?\n \t\t\tfunction getDefault() { return module['default']; } :\n \t\t\tfunction getModuleExports() { return module; };\n \t\t__webpack_require__.d(getter, 'a', getter);\n \t\treturn getter;\n \t};\n\n \t// Object.prototype.hasOwnProperty.call\n \t__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };\n\n \t// __webpack_public_path__\n \t__webpack_require__.p = \"\";\n\n \t// Load entry module and return exports\n \treturn __webpack_require__(__webpack_require__.s = 173);\n\n\n\n// WEBPACK FOOTER //\n// webpack/bootstrap 3dbdf5d2c70774bdc2ac","window.launchTutorial = function launchTutorial() {\r\n\tfin.desktop.System.openUrlWithBrowser(\"https://www.chartiq.com/tutorials/?slug=finsemble-seed-project\", function () {\r\n\t\t//console.log(\"successfully launched docs\");\r\n\t}, function (err) {\r\n\t\t//console.log(\"failed to launch docs\");\r\n\t});\r\n}\r\n\r\nwindow.quitFinsemble = function quitFinsemble() {\r\n\t//console.log(\"Quit button successfully triggered\");\r\n\tFSBL.shutdownApplication();\r\n}\r\n\r\nif (window.FSBL && FSBL.addEventListener) {\r\n\tFSBL.addEventListener('onReady', init);\r\n} else {\r\n\twindow.addEventListener('FSBLReady', init);\r\n}\r\n\r\nfunction init() {\r\n\r\n}\r\n\n\n\n// WEBPACK FOOTER //\n// ./src-built-in/components/welcome/welcome.js"],"sourceRoot":""}