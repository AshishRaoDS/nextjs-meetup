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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/[meetupId]/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/meetups/MeetupDetails.js":
/*!*********************************************!*\
  !*** ./components/meetups/MeetupDetails.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MeetupDetails_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MeetupDetails.module.css */ "./components/meetups/MeetupDetails.module.css");
/* harmony import */ var _MeetupDetails_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_MeetupDetails_module_css__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\Ashish rao ds\\Next\\nextjs-meetup\\components\\meetups\\MeetupDetails.js";


const MeetupDetails = props => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    className: _MeetupDetails_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.details,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      src: props.image,
      alt: props.title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      children: props.title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("address", {
      children: props.address
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: props.description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 10
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (MeetupDetails);

/***/ }),

/***/ "./components/meetups/MeetupDetails.module.css":
/*!*****************************************************!*\
  !*** ./components/meetups/MeetupDetails.module.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"details": "MeetupDetails_details__3zPqQ"
};


/***/ }),

/***/ "./pages/[meetupId]/index.js":
/*!***********************************!*\
  !*** ./pages/[meetupId]/index.js ***!
  \***********************************/
/*! exports provided: default, getStaticPaths, getStaticProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticPaths", function() { return getStaticPaths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_meetups_MeetupDetails__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/meetups/MeetupDetails */ "./components/meetups/MeetupDetails.js");
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mongodb */ "mongodb");
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\Ashish rao ds\\Next\\nextjs-meetup\\pages\\[meetupId]\\index.js";



const MeetupDetailsPage = props => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_meetups_MeetupDetails__WEBPACK_IMPORTED_MODULE_1__["default"], {
    image: props.image,
    title: props.title,
    description: props.description,
    address: props.address
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 10
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (MeetupDetailsPage);
async function getStaticPaths() {
  const client = await mongodb__WEBPACK_IMPORTED_MODULE_2__["MongoClient"].connect("mongodb+srv://nextjs-user:wu3c1LmGMBscIctZ@cluster0.mbkhkkd.mongodb.net/My-meetups?retryWrites=true&w=majority");
  const db = client.db();
  const meetupsCollections = db.collection("meetups");
  const meetupPaths = await meetupsCollections.find({}, {
    _id: 1
  }).toArray();
  client.close();
  return {
    fallback: false,
    paths: meetupPaths.map(meetup => ({
      params: {
        meetupId: meetup._id.toString()
      }
    }))
  };
}
async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  const client = await mongodb__WEBPACK_IMPORTED_MODULE_2__["MongoClient"].connect("mongodb+srv://nextjs-user:wu3c1LmGMBscIctZ@cluster0.mbkhkkd.mongodb.net/My-meetups?retryWrites=true&w=majority");
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const selectedMeetup = await meetupsCollection.findOne({
    _id: new mongodb__WEBPACK_IMPORTED_MODULE_2__["ObjectId"](meetupId)
  });
  const meetup = await meetupsCollection.find().toArray();
  client.close();
  return {
    props: {
      image: selectedMeetup.image,
      title: selectedMeetup.title,
      description: selectedMeetup.description,
      address: selectedMeetup.address
    }
  };
}

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongodb");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tZWV0dXBzL01lZXR1cERldGFpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tZWV0dXBzL01lZXR1cERldGFpbHMubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9bbWVldHVwSWRdL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vbmdvZGJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJNZWV0dXBEZXRhaWxzIiwicHJvcHMiLCJzdHlsZXMiLCJkZXRhaWxzIiwiaW1hZ2UiLCJ0aXRsZSIsImFkZHJlc3MiLCJkZXNjcmlwdGlvbiIsIk1lZXR1cERldGFpbHNQYWdlIiwiZ2V0U3RhdGljUGF0aHMiLCJjbGllbnQiLCJNb25nb0NsaWVudCIsImNvbm5lY3QiLCJkYiIsIm1lZXR1cHNDb2xsZWN0aW9ucyIsImNvbGxlY3Rpb24iLCJtZWV0dXBQYXRocyIsImZpbmQiLCJfaWQiLCJ0b0FycmF5IiwiY2xvc2UiLCJmYWxsYmFjayIsInBhdGhzIiwibWFwIiwibWVldHVwIiwicGFyYW1zIiwibWVldHVwSWQiLCJ0b1N0cmluZyIsImdldFN0YXRpY1Byb3BzIiwiY29udGV4dCIsIm1lZXR1cHNDb2xsZWN0aW9uIiwic2VsZWN0ZWRNZWV0dXAiLCJmaW5kT25lIiwiT2JqZWN0SWQiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FB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RUEsUUFBTWdCLGNBQWMsR0FBRyxNQUFNRCxpQkFBaUIsQ0FBQ0UsT0FBbEIsQ0FBMEI7QUFBRWQsT0FBRyxFQUFFLElBQUllLGdEQUFKLENBQWFQLFFBQWI7QUFBUCxHQUExQixDQUE3QjtBQUNBLFFBQU1GLE1BQU0sR0FBRyxNQUFNTSxpQkFBaUIsQ0FBQ2IsSUFBbEIsR0FBeUJFLE9BQXpCLEVBQXJCO0FBRUFULFFBQU0sQ0FBQ1UsS0FBUDtBQUVBLFNBQU87QUFDTG5CLFNBQUssRUFBRTtBQUNMRyxXQUFLLEVBQUUyQixjQUFjLENBQUMzQixLQURqQjtBQUVMQyxXQUFLLEVBQUUwQixjQUFjLENBQUMxQixLQUZqQjtBQUdMRSxpQkFBVyxFQUFFd0IsY0FBYyxDQUFDeEIsV0FIdkI7QUFJTEQsYUFBTyxFQUFFeUIsY0FBYyxDQUFDekI7QUFKbkI7QUFERixHQUFQO0FBUUQsQzs7Ozs7Ozs7Ozs7QUMxREQsb0M7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvW21lZXR1cElkXS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvW21lZXR1cElkXS9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBzdHlsZXMgZnJvbSAnLi9NZWV0dXBEZXRhaWxzLm1vZHVsZS5jc3MnXG5cblxuY29uc3QgTWVldHVwRGV0YWlscyA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMuZGV0YWlsc30+XG4gICAgPGltZyBzcmM9e3Byb3BzLmltYWdlfSBhbHQ9e3Byb3BzLnRpdGxlfSAvPlxuICAgIDxoMT57cHJvcHMudGl0bGV9PC9oMT5cbiAgICA8YWRkcmVzcz57cHJvcHMuYWRkcmVzc308L2FkZHJlc3M+XG4gICAgPHA+e3Byb3BzLmRlc2NyaXB0aW9ufTwvcD5cbiAgPC9zZWN0aW9uPlxufVxuXG5leHBvcnQgZGVmYXVsdCBNZWV0dXBEZXRhaWxzOyIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImRldGFpbHNcIjogXCJNZWV0dXBEZXRhaWxzX2RldGFpbHNfXzN6UHFRXCJcbn07XG4iLCJpbXBvcnQgTWVldHVwRGV0YWlscyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9tZWV0dXBzL01lZXR1cERldGFpbHNcIjtcbmltcG9ydCB7IE1vbmdvQ2xpZW50LCBPYmplY3RJZCB9IGZyb20gXCJtb25nb2RiXCJcblxuY29uc3QgTWVldHVwRGV0YWlsc1BhZ2UgPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIDxNZWV0dXBEZXRhaWxzXG4gICAgaW1hZ2U9e3Byb3BzLmltYWdlfVxuICAgIHRpdGxlPXtwcm9wcy50aXRsZX1cbiAgICBkZXNjcmlwdGlvbj17cHJvcHMuZGVzY3JpcHRpb259XG4gICAgYWRkcmVzcz17cHJvcHMuYWRkcmVzc31cbiAgLz5cbn1cblxuZXhwb3J0IGRlZmF1bHQgTWVldHVwRGV0YWlsc1BhZ2U7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdChcIm1vbmdvZGIrc3J2Oi8vbmV4dGpzLXVzZXI6d3UzYzFMbUdNQnNjSWN0WkBjbHVzdGVyMC5tYmtoa2tkLm1vbmdvZGIubmV0L015LW1lZXR1cHM/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5XCIpXG5cbiAgY29uc3QgZGIgPSBjbGllbnQuZGIoKVxuXG4gIGNvbnN0IG1lZXR1cHNDb2xsZWN0aW9ucyA9IGRiLmNvbGxlY3Rpb24oXCJtZWV0dXBzXCIpXG5cbiAgY29uc3QgbWVldHVwUGF0aHMgPSBhd2FpdCBtZWV0dXBzQ29sbGVjdGlvbnMuZmluZCh7fSwgeyBfaWQ6IDEgfSkudG9BcnJheSgpXG5cbiAgY2xpZW50LmNsb3NlKClcbiAgcmV0dXJuIHtcbiAgICBmYWxsYmFjazogZmFsc2UsXG4gICAgcGF0aHM6IG1lZXR1cFBhdGhzLm1hcChtZWV0dXAgPT4gKFxuICAgICAge1xuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICBtZWV0dXBJZDogbWVldHVwLl9pZC50b1N0cmluZygpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICApKVxuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyhjb250ZXh0KSB7XG4gIGNvbnN0IG1lZXR1cElkID0gY29udGV4dC5wYXJhbXMubWVldHVwSWQ7XG5cbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdChcIm1vbmdvZGIrc3J2Oi8vbmV4dGpzLXVzZXI6d3UzYzFMbUdNQnNjSWN0WkBjbHVzdGVyMC5tYmtoa2tkLm1vbmdvZGIubmV0L015LW1lZXR1cHM/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5XCIpXG5cbiAgY29uc3QgZGIgPSBjbGllbnQuZGIoKVxuXG4gIGNvbnN0IG1lZXR1cHNDb2xsZWN0aW9uID0gZGIuY29sbGVjdGlvbihcIm1lZXR1cHNcIilcblxuICBjb25zdCBzZWxlY3RlZE1lZXR1cCA9IGF3YWl0IG1lZXR1cHNDb2xsZWN0aW9uLmZpbmRPbmUoeyBfaWQ6IG5ldyBPYmplY3RJZChtZWV0dXBJZCkgfSlcbiAgY29uc3QgbWVldHVwID0gYXdhaXQgbWVldHVwc0NvbGxlY3Rpb24uZmluZCgpLnRvQXJyYXkoKVxuXG4gIGNsaWVudC5jbG9zZSgpXG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgaW1hZ2U6IHNlbGVjdGVkTWVldHVwLmltYWdlLFxuICAgICAgdGl0bGU6IHNlbGVjdGVkTWVldHVwLnRpdGxlLFxuICAgICAgZGVzY3JpcHRpb246IHNlbGVjdGVkTWVldHVwLmRlc2NyaXB0aW9uLFxuICAgICAgYWRkcmVzczogc2VsZWN0ZWRNZWV0dXAuYWRkcmVzcyxcbiAgICB9XG4gIH1cbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb25nb2RiXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9