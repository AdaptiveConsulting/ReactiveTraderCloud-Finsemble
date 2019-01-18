{"version":3,"sources":["webpack:///webpack/bootstrap bb9c6d50c8a0bc4da3c8?ba14*******************","webpack:///./src-built-in/components/nonConfiguredComponent/nonConfiguredComponent.js"],"names":["window","FSBL","addEventListener","init","contentElement","document","getElementById","previousURL","spData","Clients","WindowClient","options","customData","innerText"],"mappings":";AAAA;AACA;;AAEA;AACA;;AAEA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;;AAEA;AACA;;AAEA;AACA;;AAEA;AACA;AACA;;;AAGA;AACA;;AAEA;AACA;;AAEA;AACA,mDAA2C,cAAc;;AAEzD;AACA;AACA;AACA;AACA;AACA;AACA;AACA,aAAK;AACL;AACA;;AAEA;AACA;AACA;AACA,mCAA2B,0BAA0B,EAAE;AACvD,yCAAiC,eAAe;AAChD;AACA;AACA;;AAEA;AACA,8DAAsD,+DAA+D;;AAErH;AACA;;AAEA;AACA;;;;;;;;;;AC7DA,IAAIA,OAAOC,IAAP,IAAeA,KAAKC,gBAAxB,EAA0C;AACzCD,MAAKC,gBAAL,CAAsB,SAAtB,EAAiCC,IAAjC;AACA,CAFD,MAEO;AACNH,QAAOE,gBAAP,CAAwB,WAAxB,EAAqCC,IAArC;AACA;;AAED,SAASA,IAAT,GAAgB;AACf,KAAIC,iBAAiBC,SAASC,cAAT,CAAwB,YAAxB,CAArB;AACA,KAAIC,cAAa,kBAAjB;AACA,KAAIC,SAASP,KAAKQ,OAAL,CAAaC,YAAb,CAA0BC,OAA1B,CAAkCC,UAA/C;AACA,KAAGJ,UAAUA,OAAOD,WAApB,EAAiCA,cAAYC,OAAOD,WAAnB;AACjCH,gBAAeS,SAAf,GAA6B,QAAON,WAAY,GAAhD;AACA,C","file":"components/nonConfiguredComponent/nonConfiguredComponent.js","sourcesContent":[" \t// The module cache\n \tvar installedModules = {};\n\n \t// The require function\n \tfunction __webpack_require__(moduleId) {\n\n \t\t// Check if module is in cache\n \t\tif(installedModules[moduleId]) {\n \t\t\treturn installedModules[moduleId].exports;\n \t\t}\n \t\t// Create a new module (and put it into the cache)\n \t\tvar module = installedModules[moduleId] = {\n \t\t\ti: moduleId,\n \t\t\tl: false,\n \t\t\texports: {}\n \t\t};\n\n \t\t// Execute the module function\n \t\tmodules[moduleId].call(module.exports, module, module.exports, __webpack_require__);\n\n \t\t// Flag the module as loaded\n \t\tmodule.l = true;\n\n \t\t// Return the exports of the module\n \t\treturn module.exports;\n \t}\n\n\n \t// expose the modules object (__webpack_modules__)\n \t__webpack_require__.m = modules;\n\n \t// expose the module cache\n \t__webpack_require__.c = installedModules;\n\n \t// identity function for calling harmony imports with the correct context\n \t__webpack_require__.i = function(value) { return value; };\n\n \t// define getter function for harmony exports\n \t__webpack_require__.d = function(exports, name, getter) {\n \t\tif(!__webpack_require__.o(exports, name)) {\n \t\t\tObject.defineProperty(exports, name, {\n \t\t\t\tconfigurable: false,\n \t\t\t\tenumerable: true,\n \t\t\t\tget: getter\n \t\t\t});\n \t\t}\n \t};\n\n \t// getDefaultExport function for compatibility with non-harmony modules\n \t__webpack_require__.n = function(module) {\n \t\tvar getter = module && module.__esModule ?\n \t\t\tfunction getDefault() { return module['default']; } :\n \t\t\tfunction getModuleExports() { return module; };\n \t\t__webpack_require__.d(getter, 'a', getter);\n \t\treturn getter;\n \t};\n\n \t// Object.prototype.hasOwnProperty.call\n \t__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };\n\n \t// __webpack_public_path__\n \t__webpack_require__.p = \"\";\n\n \t// Load entry module and return exports\n \treturn __webpack_require__(__webpack_require__.s = 160);\n\n\n\n// WEBPACK FOOTER //\n// webpack/bootstrap bb9c6d50c8a0bc4da3c8","\r\n\r\n\r\nif (window.FSBL && FSBL.addEventListener) {\r\n\tFSBL.addEventListener('onReady', init);\r\n} else {\r\n\twindow.addEventListener('FSBLReady', init);\r\n}\r\n\r\nfunction init() {\r\n\tlet contentElement = document.getElementById(\"contentURL\");\r\n\tlet previousURL =\"Missing previous\";\r\n\tlet spData = FSBL.Clients.WindowClient.options.customData\r\n\tif(spData && spData.previousURL) previousURL=spData.previousURL\r\n\tcontentElement.innerText =  `URL: ${previousURL}.`\r\n}\r\n\n\n\n// WEBPACK FOOTER //\n// ./src-built-in/components/nonConfiguredComponent/nonConfiguredComponent.js"],"sourceRoot":""}