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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/components/Index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/components/Index.js":
/*!*********************************!*\
  !*** ./lib/components/Index.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: C:\\\\Users\\\\DELL\\\\Desktop\\\\memory\\\\lib\\\\components\\\\Index.js: Unexpected token (17:3)\\n\\n\\u001b[0m \\u001b[90m 15 | \\u001b[39m  constructor(){\\u001b[0m\\n\\u001b[0m \\u001b[90m 16 | \\u001b[39m    \\u001b[36msuper\\u001b[39m()\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 17 | \\u001b[39m\\u001b[33m<<\\u001b[39m\\u001b[33m<<\\u001b[39m\\u001b[33m<<\\u001b[39m\\u001b[33m<\\u001b[39m \\u001b[33mHEAD\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m    | \\u001b[39m   \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 18 | \\u001b[39m    \\u001b[0m\\n\\u001b[0m \\u001b[90m 19 | \\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 20 | \\u001b[39m  }\\u001b[0m\\n    at Object._raise (C:\\\\Users\\\\DELL\\\\Desktop\\\\memory\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:757:17)\\n    at Object.raiseWithData (C:\\\\Users\\\\DELL\\\\Desktop\\\\memory\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:750:17)\\n    at Object.raise (C:\\\\Users\\\\DELL\\\\Desktop\\\\memory\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:744:17)\\n    at Object.unexpected (C:\\\\Users\\\\DELL\\\\Desktop\\\\memory\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8834:16)\\n    at Object.jsxParseIdentifier (C:\\\\Users\\\\DELL\\\\Desktop\\\\memory\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:4422:12)\\n    at Object.jsxParseNamespacedName (C:\\\\Users\\\\DELL\\\\Desktop\\\\memory\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:4432:23)\\n    at Object.jsxParseElementName (C:\\\\Users\\\\DELL\\\\Desktop\\\\memory\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:4443:21)\\n    at Object.jsxParseOpeningElementAt (C:\\\\Users\\\\DELL\\\\Desktop\\\\memory\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:4529:22)\\n    at Object.jsxParseElementAt (C:\\\\Users\\\\DELL\\\\Desktop\\\\memory\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:4562:33)\\n    at Object.jsxParseElement (C:\\\\Users\\\\DELL\\\\Desktop\\\\memory\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:4636:17)\\n    at Object.parseExprAtom (C:\\\\Users\\\\DELL\\\\Desktop\\\\memory\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:4643:19)\\n    at Object.parseExprSubscripts (C:\\\\Users\\\\DELL\\\\Desktop\\\\memory\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9688:23)\\n    at Object.parseMaybeUnary (C:\\\\Users\\\\DELL\\\\Desktop\\\\memory\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9668:21)\\n    at Object.parseExprOpBaseRightExpr (C:\\\\Users\\\\DELL\\\\Desktop\\\\memory\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9631:34)\\n    at Object.parseExprOpRightExpr (C:\\\\Users\\\\DELL\\\\Desktop\\\\memory\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9624:21)\\n    at Object.parseExprOp (C:\\\\Users\\\\DELL\\\\Desktop\\\\memory\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9590:27)\\n    at Object.parseExprOps (C:\\\\Users\\\\DELL\\\\Desktop\\\\memory\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9548:17)\\n    at Object.parseMaybeConditional (C:\\\\Users\\\\DELL\\\\Desktop\\\\memory\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9511:23)\\n    at Object.parseMaybeAssign (C:\\\\Users\\\\DELL\\\\Desktop\\\\memory\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9466:21)\\n    at Object.parseExpression (C:\\\\Users\\\\DELL\\\\Desktop\\\\memory\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9418:23)\\n    at Object.parseStatementContent (C:\\\\Users\\\\DELL\\\\Desktop\\\\memory\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11339:23)\\n    at Object.parseStatement (C:\\\\Users\\\\DELL\\\\Desktop\\\\memory\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11210:17)\\n    at Object.parseBlockOrModuleBlockBody (C:\\\\Users\\\\DELL\\\\Desktop\\\\memory\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11785:25)\\n    at Object.parseBlockBody (C:\\\\Users\\\\DELL\\\\Desktop\\\\memory\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11771:10)\\n    at Object.parseBlock (C:\\\\Users\\\\DELL\\\\Desktop\\\\memory\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11755:10)\\n    at Object.parseFunctionBody (C:\\\\Users\\\\DELL\\\\Desktop\\\\memory\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10758:24)\\n    at Object.parseFunctionBodyAndFinish (C:\\\\Users\\\\DELL\\\\Desktop\\\\memory\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10741:10)\\n    at Object.parseMethod (C:\\\\Users\\\\DELL\\\\Desktop\\\\memory\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10703:10)\\n    at Object.pushClassMethod (C:\\\\Users\\\\DELL\\\\Desktop\\\\memory\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12210:30)\\n    at Object.parseClassMemberWithIsStatic (C:\\\\Users\\\\DELL\\\\Desktop\\\\memory\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12127:12)\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvY29tcG9uZW50cy9JbmRleC5qcy5qcyIsInNvdXJjZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/components/Index.js\n");

/***/ })

/******/ });