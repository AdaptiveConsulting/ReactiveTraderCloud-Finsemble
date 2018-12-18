{"version":3,"sources":["webpack:///webpack/bootstrap 374b7ebc7f5cf955d15f?df02","webpack:///./src-built-in/preloads/nativeOverrides.js"],"names":["originalWindowOpen","window","open","URL","name","specs","replace","includes","call","params","paramList","split","i","length","param","location","href","top","parent","url","w","FSBL","Clients","LauncherClient","spawn","err","response","console","error","finWindow","alert","message","UserNotification"],"mappings":";AAAA;AACA;;AAEA;AACA;;AAEA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;;AAEA;AACA;;AAEA;AACA;;AAEA;AACA;AACA;;;AAGA;AACA;;AAEA;AACA;;AAEA;AACA,mDAA2C,cAAc;;AAEzD;AACA;AACA;AACA;AACA;AACA;AACA;AACA,aAAK;AACL;AACA;;AAEA;AACA;AACA;AACA,mCAA2B,0BAA0B,EAAE;AACvD,yCAAiC,eAAe;AAChD;AACA;AACA;;AAEA;AACA,8DAAsD,+DAA+D;;AAErH;AACA;;AAEA;AACA;;;;;;;AChEA;;;;;;;;;;;;;;;;;;;;AAoBA;;;;;;AAMA,IAAIA,qBAAqBC,OAAOC,IAAhC;AACAD,OAAOC,IAAP,GAAc,UAAUC,GAAV,EAAeC,IAAf,EAAqBC,KAArB,EAA4BC,OAA5B,EAAqC;AAClD;AACA,KAAIF,QAAQA,KAAKG,QAAL,CAAc,sBAAd,CAAZ,EAAmD;AAClDP,qBAAmBQ,IAAnB,CAAwBP,MAAxB,EAAgCE,GAAhC,EAAqCC,IAArC,EAA2CC,KAA3C,EAAkDC,OAAlD;AACA;AACA;AACD,KAAIG,SAAS,EAAb;AACA,KAAIJ,KAAJ,EAAW;AACV,MAAIK,YAAYL,MAAMM,KAAN,CAAY,GAAZ,CAAhB;AACA,OAAK,IAAIC,IAAI,CAAb,EAAgBA,IAAIF,UAAUG,MAA9B,EAAsCD,GAAtC,EAA2C;AAC1C,OAAIE,QAAQJ,UAAUE,CAAV,EAAaD,KAAb,CAAmB,GAAnB,CAAZ;AACAF,UAAOK,MAAM,CAAN,CAAP,IAAmBA,MAAM,CAAN,CAAnB;AACA;AACD;AACD,KAAIV,IAAJ,EAAU;AACT,UAAQA,IAAR;AACC,QAAK,OAAL;AACCW,aAASC,IAAT,GAAgBb,GAAhB;AACA;AACD,QAAK,MAAL;AACCF,WAAOgB,GAAP,CAAWD,IAAX,GAAkBb,GAAlB;AACA;AACD,QAAK,SAAL;AACCF,WAAOiB,MAAP,CAAcF,IAAd,GAAqBb,GAArB;AACA;AACD,QAAK,QAAL;AACC;AACD;AACCM,WAAOL,IAAP,GAAcA,IAAd;AAbF;AAeA;AACDK,QAAOU,GAAP,GAAahB,GAAb;;AAEA,KAAIiB,CAAJ;AACAC,MAAKC,OAAL,CAAaC,cAAb,CAA4BC,KAA5B,CAAkC,IAAlC,EAAwCf,MAAxC,EAAgD,UAAUgB,GAAV,EAAeC,QAAf,EAAyB;AACxE,MAAID,GAAJ,EAAS;AACRE,WAAQC,KAAR,CAAc,iDAAiDH,GAA/D;AACA,GAFD,MAEO;AACNL,OAAIM,SAASG,SAAb;AACA;AACD,EAND;AAOA,QAAOT,CAAP;AACA,CA1CD;;AA4CA;;;;AAIAnB,OAAO6B,KAAP,GAAe,UAAUC,OAAV,EAAmB;AACjCV,MAAKW,gBAAL,CAAsBF,KAAtB,CACC,OADD,EAEC,EAFD,EAGC,QAHD,EAICC,OAJD,EAKC,EALD;AAOA,CARD,C","file":"preloads/nativeOverrides.js","sourcesContent":[" \t// The module cache\n \tvar installedModules = {};\n\n \t// The require function\n \tfunction __webpack_require__(moduleId) {\n\n \t\t// Check if module is in cache\n \t\tif(installedModules[moduleId]) {\n \t\t\treturn installedModules[moduleId].exports;\n \t\t}\n \t\t// Create a new module (and put it into the cache)\n \t\tvar module = installedModules[moduleId] = {\n \t\t\ti: moduleId,\n \t\t\tl: false,\n \t\t\texports: {}\n \t\t};\n\n \t\t// Execute the module function\n \t\tmodules[moduleId].call(module.exports, module, module.exports, __webpack_require__);\n\n \t\t// Flag the module as loaded\n \t\tmodule.l = true;\n\n \t\t// Return the exports of the module\n \t\treturn module.exports;\n \t}\n\n\n \t// expose the modules object (__webpack_modules__)\n \t__webpack_require__.m = modules;\n\n \t// expose the module cache\n \t__webpack_require__.c = installedModules;\n\n \t// identity function for calling harmony imports with the correct context\n \t__webpack_require__.i = function(value) { return value; };\n\n \t// define getter function for harmony exports\n \t__webpack_require__.d = function(exports, name, getter) {\n \t\tif(!__webpack_require__.o(exports, name)) {\n \t\t\tObject.defineProperty(exports, name, {\n \t\t\t\tconfigurable: false,\n \t\t\t\tenumerable: true,\n \t\t\t\tget: getter\n \t\t\t});\n \t\t}\n \t};\n\n \t// getDefaultExport function for compatibility with non-harmony modules\n \t__webpack_require__.n = function(module) {\n \t\tvar getter = module && module.__esModule ?\n \t\t\tfunction getDefault() { return module['default']; } :\n \t\t\tfunction getModuleExports() { return module; };\n \t\t__webpack_require__.d(getter, 'a', getter);\n \t\treturn getter;\n \t};\n\n \t// Object.prototype.hasOwnProperty.call\n \t__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };\n\n \t// __webpack_public_path__\n \t__webpack_require__.p = \"\";\n\n \t// Load entry module and return exports\n \treturn __webpack_require__(__webpack_require__.s = 0);\n\n\n\n// WEBPACK FOOTER //\n// webpack/bootstrap 374b7ebc7f5cf955d15f","/**\n * This file contains a set of overrides that will convert HTML5 window actions to corresponding Finsemble actions.\n * Overrides must be specified for each component via a \"preload\" script. You do this by adding the preload to the\n * component config like so:\n * \n * \t\"Your Component\": {\n  \t\t\t...\n\t\t\t\"component\": {\n\t\t\t\t...\n\t\t\t\t\"inject\": false,\n\t\t\t\t\"preload\": \"$applicationRoot/preloads/nativeOverrides.js\"\n\t\t\t\t...\n\t\t\t}\n\t\t\t...\n\t\t}\n\n\tIMPORTANT NOTE: If you set that path incorrectly it will cause Finsemble to stop working in that component.\n\tCheck your component's chrome console for the existence of FSBL. If it doesn't exist then check your path.\n */\n\n/**\n * This overrides the browser's built in window.open function by instead creating windows using LauncherClient.spawn.\n * This ensures that the Finsemble workspace manager is aware of newly opened windows, that they can participate in\n * the on screen workspace management, and that they can be restored with workspaces.\n */\n\nvar originalWindowOpen = window.open;\nwindow.open = function (URL, name, specs, replace) {\n\t// For some strange reason, openfin notifications use window.open. So we make an exception for that one case.\n\tif (name && name.includes(\"openfin-child-window\")) {\n\t\toriginalWindowOpen.call(window, URL, name, specs, replace);\n\t\treturn;\n\t}\n\tvar params = {};\n\tif (specs) {\n\t\tlet paramList = specs.split(\",\");\n\t\tfor (let i = 0; i < paramList.length; i++) {\n\t\t\tlet param = paramList[i].split(\"=\");\n\t\t\tparams[param[0]] = param[1];\n\t\t}\n\t}\n\tif (name) {\n\t\tswitch (name) {\n\t\t\tcase \"_self\":\n\t\t\t\tlocation.href = URL;\n\t\t\t\treturn;\n\t\t\tcase \"_top\":\n\t\t\t\twindow.top.href = URL;\n\t\t\t\treturn;\n\t\t\tcase \"_parent\":\n\t\t\t\twindow.parent.href = URL;\n\t\t\t\treturn;\n\t\t\tcase \"_blank\":\n\t\t\t\tbreak;\n\t\t\tdefault:\n\t\t\t\tparams.name = name;\n\t\t}\n\t}\n\tparams.url = URL;\n\n\tvar w;\n\tFSBL.Clients.LauncherClient.spawn(null, params, function (err, response) {\n\t\tif (err) {\n\t\t\tconsole.error(\"nativeOverrides.js window.open patch error: \" + err);\n\t\t} else {\n\t\t\tw = response.finWindow;\n\t\t}\n\t});\n\treturn w;\n}\n\n/**\n * Overrides the browser's built in alerting. Native alerts are synchronous. They cause the application to cease functioning\n * and they create an ugly pop up window. Instead, we funnel these alerts through notifications.\n */\nwindow.alert = function (message) {\n\tFSBL.UserNotification.alert(\n\t\t\"alert\",\n\t\t\"\",\n\t\t\"ALWAYS\",\n\t\tmessage,\n\t\t{}\n\t);\n}\n\n\n// WEBPACK FOOTER //\n// ./src-built-in/preloads/nativeOverrides.js"],"sourceRoot":""}