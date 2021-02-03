module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/api/[id].tsx");
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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\n\n__webpack_require__(/*! dotenv */ \"dotenv\").config();\n\nlet cachedDb = null;\n\nfunction connectToMongo(uri) {\n  if (cachedDb) {\n    return cachedDb;\n  }\n\n  ;\n  mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connect(uri, {\n    useFindAndModify: true,\n    useUnifiedTopology: true,\n    useNewUrlParser: true\n  });\n  const db = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connection;\n  cachedDb = db;\n  return db;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (connectToMongo);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZGF0YWJhc2UvY29ubmVjdGlvbi50cz9lZjYwIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJjb25maWciLCJjYWNoZWREYiIsImNvbm5lY3RUb01vbmdvIiwidXJpIiwibW9uZ29vc2UiLCJjb25uZWN0IiwidXNlRmluZEFuZE1vZGlmeSIsInVzZVVuaWZpZWRUb3BvbG9neSIsInVzZU5ld1VybFBhcnNlciIsImRiIiwiY29ubmVjdGlvbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQ0FBLG1CQUFPLENBQUMsc0JBQUQsQ0FBUCxDQUFrQkMsTUFBbEI7O0FBRUEsSUFBSUMsUUFBUSxHQUFHLElBQWY7O0FBRUEsU0FBU0MsY0FBVCxDQUF3QkMsR0FBeEIsRUFBcUM7QUFDakMsTUFBSUYsUUFBSixFQUFjO0FBQ1YsV0FBT0EsUUFBUDtBQUNIOztBQUFBO0FBRURHLGlEQUFRLENBQUNDLE9BQVQsQ0FBaUJGLEdBQWpCLEVBQXNCO0FBQ2xCRyxvQkFBZ0IsRUFBRSxJQURBO0FBRWxCQyxzQkFBa0IsRUFBRSxJQUZGO0FBR2xCQyxtQkFBZSxFQUFFO0FBSEMsR0FBdEI7QUFNQSxRQUFNQyxFQUFFLEdBQUdMLCtDQUFRLENBQUNNLFVBQXBCO0FBQ0FULFVBQVEsR0FBR1EsRUFBWDtBQUVBLFNBQU9BLEVBQVA7QUFDSDs7QUFFY1AsNkVBQWYiLCJmaWxlIjoiLi9zcmMvZGF0YWJhc2UvY29ubmVjdGlvbi50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XG5yZXF1aXJlKCdkb3RlbnYnKS5jb25maWcoKVxuXG5sZXQgY2FjaGVkRGIgPSBudWxsO1xuXG5mdW5jdGlvbiBjb25uZWN0VG9Nb25nbyh1cmk6IHN0cmluZykge1xuICAgIGlmIChjYWNoZWREYikge1xuICAgICAgICByZXR1cm4gY2FjaGVkRGI7XG4gICAgfTtcblxuICAgIG1vbmdvb3NlLmNvbm5lY3QodXJpLCB7XG4gICAgICAgIHVzZUZpbmRBbmRNb2RpZnk6IHRydWUsXG4gICAgICAgIHVzZVVuaWZpZWRUb3BvbG9neTogdHJ1ZSxcbiAgICAgICAgdXNlTmV3VXJsUGFyc2VyOiB0cnVlXG4gICAgfSlcblxuICAgIGNvbnN0IGRiID0gbW9uZ29vc2UuY29ubmVjdGlvbjtcbiAgICBjYWNoZWREYiA9IGRiO1xuICAgIFxuICAgIHJldHVybiBkYjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdFRvTW9uZ287Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/database/connection.ts\n");

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

/***/ "./src/pages/api/[id].tsx":
/*!********************************!*\
  !*** ./src/pages/api/[id].tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _database_connection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../database/connection */ \"./src/database/connection.ts\");\n/* harmony import */ var _database_models_UserModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../database/models/UserModel */ \"./src/database/models/UserModel.ts\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (req, res) => {\n  Object(_database_connection__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(process.env.DATABASE_URL);\n  const {\n    query: {\n      id\n    },\n    method\n  } = req;\n  let User;\n\n  try {\n    User = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('User');\n  } catch (err) {\n    User = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('User', _database_models_UserModel__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n  }\n\n  switch (method) {\n    case 'GET':\n      try {\n        const user = await User.findById(id);\n        res.status(201).json({\n          success: true,\n          data: user\n        });\n      } catch (err) {\n        res.status(400).json({\n          success: false\n        });\n      }\n\n      break;\n\n    case 'DELETE':\n      try {\n        const deletedUser = await User.findByIdAndDelete(id);\n        res.status(201).json({\n          success: true,\n          data: deletedUser\n        });\n      } catch (err) {\n        res.status(400).json({\n          success: false\n        });\n      }\n\n      break;\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvYXBpLy50c3g/OTNiNyJdLCJuYW1lcyI6WyJyZXEiLCJyZXMiLCJjb25uZWN0VG9Nb25nbyIsInByb2Nlc3MiLCJlbnYiLCJEQVRBQkFTRV9VUkwiLCJxdWVyeSIsImlkIiwibWV0aG9kIiwiVXNlciIsIm1vbmdvb3NlIiwibW9kZWwiLCJlcnIiLCJVc2VyU2NoZW1hIiwidXNlciIsImZpbmRCeUlkIiwic3RhdHVzIiwianNvbiIsInN1Y2Nlc3MiLCJkYXRhIiwiZGVsZXRlZFVzZXIiLCJmaW5kQnlJZEFuZERlbGV0ZSJdLCJtYXBwaW5ncyI6IkFBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUVlLHNFQUFPQSxHQUFQLEVBQTRCQyxHQUE1QixLQUFxRDtBQUVoRUMsc0VBQWMsQ0FBQ0MsT0FBTyxDQUFDQyxHQUFSLENBQVlDLFlBQWIsQ0FBZDtBQUVBLFFBQU07QUFDRkMsU0FBSyxFQUFFO0FBQUVDO0FBQUYsS0FETDtBQUVGQztBQUZFLE1BR0ZSLEdBSEo7QUFLQSxNQUFJUyxJQUFKOztBQUVBLE1BQUk7QUFDQUEsUUFBSSxHQUFHQywrQ0FBUSxDQUFDQyxLQUFULENBQWUsTUFBZixDQUFQO0FBQ0gsR0FGRCxDQUVFLE9BQU9DLEdBQVAsRUFBWTtBQUNWSCxRQUFJLEdBQUdDLCtDQUFRLENBQUNDLEtBQVQsQ0FBZSxNQUFmLEVBQXVCRSxrRUFBdkIsQ0FBUDtBQUNIOztBQUVELFVBQVFMLE1BQVI7QUFDSSxTQUFLLEtBQUw7QUFDSSxVQUFJO0FBQ0EsY0FBTU0sSUFBSSxHQUFHLE1BQU1MLElBQUksQ0FBQ00sUUFBTCxDQUFjUixFQUFkLENBQW5CO0FBRUFOLFdBQUcsQ0FBQ2UsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLGlCQUFPLEVBQUUsSUFBWDtBQUFpQkMsY0FBSSxFQUFFTDtBQUF2QixTQUFyQjtBQUNILE9BSkQsQ0FJRSxPQUFPRixHQUFQLEVBQVk7QUFDVlgsV0FBRyxDQUFDZSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUMsaUJBQU8sRUFBRTtBQUFYLFNBQXJCO0FBQ0g7O0FBQ0Q7O0FBRUosU0FBSyxRQUFMO0FBQ0ksVUFBSTtBQUNBLGNBQU1FLFdBQVcsR0FBRyxNQUFNWCxJQUFJLENBQUNZLGlCQUFMLENBQXVCZCxFQUF2QixDQUExQjtBQUVBTixXQUFHLENBQUNlLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyxpQkFBTyxFQUFFLElBQVg7QUFBaUJDLGNBQUksRUFBRUM7QUFBdkIsU0FBckI7QUFDSCxPQUpELENBSUUsT0FBT1IsR0FBUCxFQUFZO0FBQ1ZYLFdBQUcsQ0FBQ2UsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLGlCQUFPLEVBQUU7QUFBWCxTQUFyQjtBQUNIOztBQUNEO0FBbkJSO0FBcUJILENBdENEIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL2FwaS9baWRdLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0JztcbmltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XG5cbmltcG9ydCBjb25uZWN0VG9Nb25nbyBmcm9tICcuLi8uLi9kYXRhYmFzZS9jb25uZWN0aW9uJztcbmltcG9ydCBVc2VyU2NoZW1hIGZyb20gJy4uLy4uL2RhdGFiYXNlL21vZGVscy9Vc2VyTW9kZWwnO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpID0+IHtcblxuICAgIGNvbm5lY3RUb01vbmdvKHByb2Nlc3MuZW52LkRBVEFCQVNFX1VSTCk7XG5cbiAgICBjb25zdCB7XG4gICAgICAgIHF1ZXJ5OiB7IGlkIH0sXG4gICAgICAgIG1ldGhvZFxuICAgIH0gPSByZXE7XG5cbiAgICBsZXQgVXNlcjtcblxuICAgIHRyeSB7XG4gICAgICAgIFVzZXIgPSBtb25nb29zZS5tb2RlbCgnVXNlcicpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBVc2VyID0gbW9uZ29vc2UubW9kZWwoJ1VzZXInLCBVc2VyU2NoZW1hKTtcbiAgICB9XG5cbiAgICBzd2l0Y2ggKG1ldGhvZCkge1xuICAgICAgICBjYXNlICdHRVQnOlxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgVXNlci5maW5kQnlJZChpZCk7XG5cbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMSkuanNvbih7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHVzZXIgfSk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7IHN1Y2Nlc3M6IGZhbHNlIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnREVMRVRFJzpcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGVsZXRlZFVzZXIgPSBhd2FpdCBVc2VyLmZpbmRCeUlkQW5kRGVsZXRlKGlkKTtcblxuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAxKS5qc29uKHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogZGVsZXRlZFVzZXIgfSk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7IHN1Y2Nlc3M6IGZhbHNlIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/api/[id].tsx\n");

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