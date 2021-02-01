module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/api/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/database/connection.ts":
/*!************************************!*\
  !*** ./src/database/connection.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\n\n__webpack_require__(/*! dotenv */ \"dotenv\").config();\n\nlet mongoConnection = 0;\n\nfunction connectToMongo() {\n  if (mongoConnection > 0) return;\n  mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connect(process.env.DATABASE_URL, {\n    useFindAndModify: true,\n    useUnifiedTopology: true,\n    useNewUrlParser: true\n  });\n  const db = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connection;\n  mongoConnection = db.readyState;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (connectToMongo);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZGF0YWJhc2UvY29ubmVjdGlvbi50cz9lZjYwIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJjb25maWciLCJtb25nb0Nvbm5lY3Rpb24iLCJjb25uZWN0VG9Nb25nbyIsIm1vbmdvb3NlIiwiY29ubmVjdCIsInByb2Nlc3MiLCJlbnYiLCJEQVRBQkFTRV9VUkwiLCJ1c2VGaW5kQW5kTW9kaWZ5IiwidXNlVW5pZmllZFRvcG9sb2d5IiwidXNlTmV3VXJsUGFyc2VyIiwiZGIiLCJjb25uZWN0aW9uIiwicmVhZHlTdGF0ZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQ0FBLG1CQUFPLENBQUMsc0JBQUQsQ0FBUCxDQUFrQkMsTUFBbEI7O0FBRUEsSUFBSUMsZUFBZSxHQUFHLENBQXRCOztBQUVBLFNBQVNDLGNBQVQsR0FBMEI7QUFFdEIsTUFBSUQsZUFBZSxHQUFHLENBQXRCLEVBQXlCO0FBRXpCRSxpREFBUSxDQUFDQyxPQUFULENBQWlCQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsWUFBN0IsRUFBMkM7QUFDdkNDLG9CQUFnQixFQUFFLElBRHFCO0FBRXZDQyxzQkFBa0IsRUFBRSxJQUZtQjtBQUd2Q0MsbUJBQWUsRUFBRTtBQUhzQixHQUEzQztBQU1BLFFBQU1DLEVBQUUsR0FBR1IsK0NBQVEsQ0FBQ1MsVUFBcEI7QUFDQVgsaUJBQWUsR0FBR1UsRUFBRSxDQUFDRSxVQUFyQjtBQUVIOztBQUVjWCw2RUFBZiIsImZpbGUiOiIuL3NyYy9kYXRhYmFzZS9jb25uZWN0aW9uLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcbnJlcXVpcmUoJ2RvdGVudicpLmNvbmZpZygpXG5cbmxldCBtb25nb0Nvbm5lY3Rpb24gPSAwO1xuXG5mdW5jdGlvbiBjb25uZWN0VG9Nb25nbygpIHtcblxuICAgIGlmIChtb25nb0Nvbm5lY3Rpb24gPiAwKSByZXR1cm47XG5cbiAgICBtb25nb29zZS5jb25uZWN0KHByb2Nlc3MuZW52LkRBVEFCQVNFX1VSTCwge1xuICAgICAgICB1c2VGaW5kQW5kTW9kaWZ5OiB0cnVlLFxuICAgICAgICB1c2VVbmlmaWVkVG9wb2xvZ3k6IHRydWUsXG4gICAgICAgIHVzZU5ld1VybFBhcnNlcjogdHJ1ZVxuICAgIH0pXG5cbiAgICBjb25zdCBkYiA9IG1vbmdvb3NlLmNvbm5lY3Rpb247XG4gICAgbW9uZ29Db25uZWN0aW9uID0gZGIucmVhZHlTdGF0ZTtcbiAgICBcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdFRvTW9uZ287Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/database/connection.ts\n");

/***/ }),

/***/ "./src/database/models/UserModel.ts":
/*!******************************************!*\
  !*** ./src/database/models/UserModel.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst User = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({\n  name: {\n    type: String,\n    required: true\n  },\n  data: {\n    status: String,\n    country: String,\n    regionName: String,\n    city: String,\n    zip: String,\n    lat: String,\n    lon: String,\n    isp: String,\n    proxy: Boolean,\n    query: String\n  },\n  date: {\n    type: Date,\n    default: Date.now\n  }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (User);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZGF0YWJhc2UvbW9kZWxzL1VzZXJNb2RlbC50cz8yNDMwIl0sIm5hbWVzIjpbIlVzZXIiLCJtb25nb29zZSIsIlNjaGVtYSIsIm5hbWUiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJkYXRhIiwic3RhdHVzIiwiY291bnRyeSIsInJlZ2lvbk5hbWUiLCJjaXR5IiwiemlwIiwibGF0IiwibG9uIiwiaXNwIiwicHJveHkiLCJCb29sZWFuIiwicXVlcnkiLCJkYXRlIiwiRGF0ZSIsImRlZmF1bHQiLCJub3ciXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUEsTUFBTUEsSUFBWSxHQUFHLElBQUlDLCtDQUFRLENBQUNDLE1BQWIsQ0FBb0I7QUFDckNDLE1BQUksRUFBRTtBQUNGQyxRQUFJLEVBQUVDLE1BREo7QUFFRkMsWUFBUSxFQUFFO0FBRlIsR0FEK0I7QUFLckNDLE1BQUksRUFBRTtBQUNGQyxVQUFNLEVBQUVILE1BRE47QUFFRkksV0FBTyxFQUFFSixNQUZQO0FBR0ZLLGNBQVUsRUFBRUwsTUFIVjtBQUlGTSxRQUFJLEVBQUVOLE1BSko7QUFLRk8sT0FBRyxFQUFFUCxNQUxIO0FBTUZRLE9BQUcsRUFBRVIsTUFOSDtBQU9GUyxPQUFHLEVBQUVULE1BUEg7QUFRRlUsT0FBRyxFQUFFVixNQVJIO0FBU0ZXLFNBQUssRUFBRUMsT0FUTDtBQVVGQyxTQUFLLEVBQUViO0FBVkwsR0FMK0I7QUFpQnJDYyxNQUFJLEVBQUU7QUFDRmYsUUFBSSxFQUFFZ0IsSUFESjtBQUVGQyxXQUFPLEVBQUVELElBQUksQ0FBQ0U7QUFGWjtBQWpCK0IsQ0FBcEIsQ0FBckI7QUF1QmV0QixtRUFBZiIsImZpbGUiOiIuL3NyYy9kYXRhYmFzZS9tb2RlbHMvVXNlck1vZGVsLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlLCB7IFNjaGVtYSB9IGZyb20gJ21vbmdvb3NlJztcblxuY29uc3QgVXNlcjogU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XG4gICAgbmFtZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICBkYXRhOiB7XG4gICAgICAgIHN0YXR1czogU3RyaW5nLFxuICAgICAgICBjb3VudHJ5OiBTdHJpbmcsXG4gICAgICAgIHJlZ2lvbk5hbWU6IFN0cmluZyxcbiAgICAgICAgY2l0eTogU3RyaW5nLFxuICAgICAgICB6aXA6IFN0cmluZyxcbiAgICAgICAgbGF0OiBTdHJpbmcsXG4gICAgICAgIGxvbjogU3RyaW5nLFxuICAgICAgICBpc3A6IFN0cmluZyxcbiAgICAgICAgcHJveHk6IEJvb2xlYW4sXG4gICAgICAgIHF1ZXJ5OiBTdHJpbmdcbiAgICB9LFxuICAgIGRhdGU6IHtcbiAgICAgICAgdHlwZTogRGF0ZSxcbiAgICAgICAgZGVmYXVsdDogRGF0ZS5ub3dcbiAgICB9XG59KVxuXG5leHBvcnQgZGVmYXVsdCBVc2VyOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/database/models/UserModel.ts\n");

/***/ }),

/***/ "./src/pages/api/index.tsx":
/*!*********************************!*\
  !*** ./src/pages/api/index.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _database_connection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../database/connection */ \"./src/database/connection.ts\");\n/* harmony import */ var _database_models_UserModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../database/models/UserModel */ \"./src/database/models/UserModel.ts\");\n\n\n\nObject(_database_connection__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (req, res) => {\n  const {\n    method,\n    body\n  } = req;\n  let User;\n\n  try {\n    User = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('User');\n  } catch {\n    User = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('User', _database_models_UserModel__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n  }\n\n  switch (method) {\n    case 'GET':\n      try {\n        const users = await User.find();\n        res.status(201).json({\n          success: true,\n          data: users\n        });\n      } catch (err) {\n        res.status(500).json({\n          success: false\n        });\n      }\n\n      break;\n\n    case 'POST':\n      try {\n        const newUser = await new User(body);\n        newUser.save();\n        res.status(201).json({\n          success: true,\n          data: newUser\n        });\n      } catch (err) {\n        res.status(500).json({\n          success: false\n        });\n      }\n\n      break;\n\n    case 'DELETE':\n      try {\n        await User.deleteMany();\n        res.status(201).json({\n          success: true,\n          data: {}\n        });\n      } catch (err) {\n        res.status(500).json({\n          success: false\n        });\n      }\n\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvYXBpL2luZGV4LnRzeD9mNjQ1Il0sIm5hbWVzIjpbImNvbm5lY3RUb01vbmdvIiwicmVxIiwicmVzIiwibWV0aG9kIiwiYm9keSIsIlVzZXIiLCJtb25nb29zZSIsIm1vZGVsIiwiVXNlclNjaGVtYSIsInVzZXJzIiwiZmluZCIsInN0YXR1cyIsImpzb24iLCJzdWNjZXNzIiwiZGF0YSIsImVyciIsIm5ld1VzZXIiLCJzYXZlIiwiZGVsZXRlTWFueSJdLCJtYXBwaW5ncyI6IkFBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUVBQSxvRUFBYztBQUVDLHNFQUFPQyxHQUFQLEVBQTRCQyxHQUE1QixLQUFxRDtBQUNoRSxRQUFNO0FBQUVDLFVBQUY7QUFBVUM7QUFBVixNQUFtQkgsR0FBekI7QUFFQSxNQUFJSSxJQUFKOztBQUVBLE1BQUk7QUFDQUEsUUFBSSxHQUFHQywrQ0FBUSxDQUFDQyxLQUFULENBQWUsTUFBZixDQUFQO0FBQ0gsR0FGRCxDQUVFLE1BQU07QUFDSkYsUUFBSSxHQUFHQywrQ0FBUSxDQUFDQyxLQUFULENBQWUsTUFBZixFQUF1QkMsa0VBQXZCLENBQVA7QUFDSDs7QUFFRCxVQUFRTCxNQUFSO0FBQ0ksU0FBSyxLQUFMO0FBQ0ksVUFBSTtBQUNBLGNBQU1NLEtBQUssR0FBRyxNQUFNSixJQUFJLENBQUNLLElBQUwsRUFBcEI7QUFDQVIsV0FBRyxDQUFDUyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUMsaUJBQU8sRUFBRSxJQUFYO0FBQWlCQyxjQUFJLEVBQUVMO0FBQXZCLFNBQXJCO0FBQ0gsT0FIRCxDQUdFLE9BQU9NLEdBQVAsRUFBWTtBQUNWYixXQUFHLENBQUNTLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyxpQkFBTyxFQUFFO0FBQVgsU0FBckI7QUFDSDs7QUFDRDs7QUFFSixTQUFLLE1BQUw7QUFDSSxVQUFJO0FBQ0EsY0FBTUcsT0FBTyxHQUFHLE1BQU0sSUFBSVgsSUFBSixDQUFTRCxJQUFULENBQXRCO0FBRUFZLGVBQU8sQ0FBQ0MsSUFBUjtBQUVBZixXQUFHLENBQUNTLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyxpQkFBTyxFQUFFLElBQVg7QUFBaUJDLGNBQUksRUFBRUU7QUFBdkIsU0FBckI7QUFDSCxPQU5ELENBTUUsT0FBT0QsR0FBUCxFQUFZO0FBQ1ZiLFdBQUcsQ0FBQ1MsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLGlCQUFPLEVBQUU7QUFBWCxTQUFyQjtBQUNIOztBQUNEOztBQUVKLFNBQUssUUFBTDtBQUNJLFVBQUk7QUFDQSxjQUFNUixJQUFJLENBQUNhLFVBQUwsRUFBTjtBQUVBaEIsV0FBRyxDQUFDUyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUMsaUJBQU8sRUFBRSxJQUFYO0FBQWlCQyxjQUFJLEVBQUU7QUFBdkIsU0FBckI7QUFDSCxPQUpELENBSUUsT0FBT0MsR0FBUCxFQUFZO0FBQ1ZiLFdBQUcsQ0FBQ1MsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLGlCQUFPLEVBQUU7QUFBWCxTQUFyQjtBQUNIOztBQTdCVDtBQStCSCxDQTFDRCIsImZpbGUiOiIuL3NyYy9wYWdlcy9hcGkvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnXG5pbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xuXG5pbXBvcnQgY29ubmVjdFRvTW9uZ28gZnJvbSAnLi4vLi4vZGF0YWJhc2UvY29ubmVjdGlvbic7XG5pbXBvcnQgVXNlclNjaGVtYSBmcm9tICcuLi8uLi9kYXRhYmFzZS9tb2RlbHMvVXNlck1vZGVsJztcblxuY29ubmVjdFRvTW9uZ28oKTtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSA9PiB7XG4gICAgY29uc3QgeyBtZXRob2QsIGJvZHkgfSA9IHJlcTtcblxuICAgIGxldCBVc2VyO1xuXG4gICAgdHJ5IHtcbiAgICAgICAgVXNlciA9IG1vbmdvb3NlLm1vZGVsKCdVc2VyJyk7XG4gICAgfSBjYXRjaCB7XG4gICAgICAgIFVzZXIgPSBtb25nb29zZS5tb2RlbCgnVXNlcicsIFVzZXJTY2hlbWEpO1xuICAgIH1cblxuICAgIHN3aXRjaCAobWV0aG9kKSB7XG4gICAgICAgIGNhc2UgJ0dFVCc6XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHVzZXJzID0gYXdhaXQgVXNlci5maW5kKCk7XG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cygyMDEpLmpzb24oeyBzdWNjZXNzOiB0cnVlLCBkYXRhOiB1c2VycyB9KVxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBzdWNjZXNzOiBmYWxzZSB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIFxuICAgICAgICBjYXNlICdQT1NUJzpcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3VXNlciA9IGF3YWl0IG5ldyBVc2VyKGJvZHkpO1xuXG4gICAgICAgICAgICAgICAgbmV3VXNlci5zYXZlKCk7XG5cbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMSkuanNvbih7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IG5ld1VzZXIgfSlcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgc3VjY2VzczogZmFsc2UgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ0RFTEVURSc6XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGF3YWl0IFVzZXIuZGVsZXRlTWFueSgpO1xuXG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cygyMDEpLmpzb24oeyBzdWNjZXNzOiB0cnVlLCBkYXRhOiB7fSB9KVxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBzdWNjZXNzOiBmYWxzZSB9KVxuICAgICAgICAgICAgfVxuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/api/index.tsx\n");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"dotenv\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJkb3RlbnZcIj9lNzBmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImRvdGVudi5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImRvdGVudlwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///dotenv\n");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb29zZVwiP2ZmZDciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibW9uZ29vc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb25nb29zZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///mongoose\n");

/***/ })

/******/ });