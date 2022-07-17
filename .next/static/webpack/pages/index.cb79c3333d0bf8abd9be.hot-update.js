webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/next/head.js":
/*!***********************************!*\
  !*** ./node_modules/next/head.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/next-server/lib/head */ "./node_modules/next/dist/next-server/lib/head.js")


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/meetups/MeetupList */ "./components/meetups/MeetupList.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);



var _jsxFileName = "C:\\Users\\Ashish rao ds\\Next\\nextjs-meetup\\pages\\index.js",
    _this = undefined;



var DUMMY_DATA = [{
  id: "m1",
  title: "This is the first meet up",
  image: "https://images.unsplash.com/photo-1657370152452-d1286b40317e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  address: "Landlinks Mangalore",
  description: "First meet up place ever"
}, {
  id: "m2",
  title: "This is the second meet up",
  image: "https://images.unsplash.com/photo-1657370152452-d1286b40317e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  address: "Landlinks Mangalore",
  description: "Second meet up place ever"
}, {
  id: "m3",
  title: "This is the third meet up",
  image: "https://images.unsplash.com/photo-1657370152452-d1286b40317e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  address: "Landlinks Mangalore",
  description: "Third meet up place ever"
}];

var HomePage = function HomePage(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_1__["default"], {
        meetups: props.meetups
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, _this)
  }, void 0, false);
};

_c = HomePage;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (HomePage);

var _c;

$RefreshReg$(_c, "HomePage");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvaGVhZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiRFVNTVlfREFUQSIsImlkIiwidGl0bGUiLCJpbWFnZSIsImFkZHJlc3MiLCJkZXNjcmlwdGlvbiIsIkhvbWVQYWdlIiwicHJvcHMiLCJtZWV0dXBzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxpQkFBaUIsbUJBQU8sQ0FBQyxxRkFBNkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQXREO0FBRUE7QUFFQSxJQUFNQSxVQUFVLEdBQUcsQ0FDakI7QUFDRUMsSUFBRSxFQUFFLElBRE47QUFFRUMsT0FBSyxFQUFFLDJCQUZUO0FBR0VDLE9BQUssRUFBRSxnS0FIVDtBQUlFQyxTQUFPLEVBQUUscUJBSlg7QUFLRUMsYUFBVyxFQUFFO0FBTGYsQ0FEaUIsRUFRakI7QUFDRUosSUFBRSxFQUFFLElBRE47QUFFRUMsT0FBSyxFQUFFLDRCQUZUO0FBR0VDLE9BQUssRUFBRSxnS0FIVDtBQUlFQyxTQUFPLEVBQUUscUJBSlg7QUFLRUMsYUFBVyxFQUFFO0FBTGYsQ0FSaUIsRUFlakI7QUFDRUosSUFBRSxFQUFFLElBRE47QUFFRUMsT0FBSyxFQUFFLDJCQUZUO0FBR0VDLE9BQUssRUFBRSxnS0FIVDtBQUlFQyxTQUFPLEVBQUUscUJBSlg7QUFLRUMsYUFBVyxFQUFFO0FBTGYsQ0FmaUIsQ0FBbkI7O0FBd0JBLElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLEtBQUQsRUFBVztBQUUxQixzQkFDRTtBQUFBLDJCQUNFLHFFQUFDLGdEQUFEO0FBQUEsNkJBQ0UscUVBQUMsc0VBQUQ7QUFBWSxlQUFPLEVBQUVBLEtBQUssQ0FBQ0M7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQVNELENBWEQ7O0tBQU1GLFE7O0FBdUNTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5jYjc5YzMzMzNkMGJmOGFiZDliZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2hlYWQnKVxuIiwiaW1wb3J0IE1lZXR1cExpc3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvbWVldHVwcy9NZWV0dXBMaXN0XCI7XG5pbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gXCJtb25nb2RiXCJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIlxuXG5jb25zdCBEVU1NWV9EQVRBID0gW1xuICB7XG4gICAgaWQ6IFwibTFcIixcbiAgICB0aXRsZTogXCJUaGlzIGlzIHRoZSBmaXJzdCBtZWV0IHVwXCIsXG4gICAgaW1hZ2U6IFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE2NTczNzAxNTI0NTItZDEyODZiNDAzMTdlP2l4bGliPXJiLTEuMi4xJml4aWQ9TW53eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDgmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0xMTcwJnE9ODBcIixcbiAgICBhZGRyZXNzOiBcIkxhbmRsaW5rcyBNYW5nYWxvcmVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJGaXJzdCBtZWV0IHVwIHBsYWNlIGV2ZXJcIlxuICB9LFxuICB7XG4gICAgaWQ6IFwibTJcIixcbiAgICB0aXRsZTogXCJUaGlzIGlzIHRoZSBzZWNvbmQgbWVldCB1cFwiLFxuICAgIGltYWdlOiBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNjU3MzcwMTUyNDUyLWQxMjg2YjQwMzE3ZT9peGxpYj1yYi0xLjIuMSZpeGlkPU1ud3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MTE3MCZxPTgwXCIsXG4gICAgYWRkcmVzczogXCJMYW5kbGlua3MgTWFuZ2Fsb3JlXCIsXG4gICAgZGVzY3JpcHRpb246IFwiU2Vjb25kIG1lZXQgdXAgcGxhY2UgZXZlclwiXG4gIH0sXG4gIHtcbiAgICBpZDogXCJtM1wiLFxuICAgIHRpdGxlOiBcIlRoaXMgaXMgdGhlIHRoaXJkIG1lZXQgdXBcIixcbiAgICBpbWFnZTogXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTY1NzM3MDE1MjQ1Mi1kMTI4NmI0MDMxN2U/aXhsaWI9cmItMS4yLjEmaXhpZD1Nbnd4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTExNzAmcT04MFwiLFxuICAgIGFkZHJlc3M6IFwiTGFuZGxpbmtzIE1hbmdhbG9yZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlRoaXJkIG1lZXQgdXAgcGxhY2UgZXZlclwiXG4gIH0sXG5dXG5cbmNvbnN0IEhvbWVQYWdlID0gKHByb3BzKSA9PiB7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDxNZWV0dXBMaXN0IG1lZXR1cHM9e3Byb3BzLm1lZXR1cHN9IC8+XG4gICAgICA8L0hlYWQ+XG4gICAgPC8+XG4gIClcblxuXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdChcIm1vbmdvZGIrc3J2Oi8vbmV4dGpzLXVzZXI6d3UzYzFMbUdNQnNjSWN0WkBjbHVzdGVyMC5tYmtoa2tkLm1vbmdvZGIubmV0L015LW1lZXR1cHM/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5XCIpXG5cbiAgY29uc3QgZGIgPSBjbGllbnQuZGIoKVxuXG4gIGNvbnN0IG1lZXR1cHNDb2xsZWN0aW9uID0gZGIuY29sbGVjdGlvbihcIm1lZXR1cHNcIilcblxuICBjb25zdCBtZWV0dXBzRnJvbURCID0gYXdhaXQgbWVldHVwc0NvbGxlY3Rpb24uZmluZCgpLnRvQXJyYXkoKVxuXG4gIGNsaWVudC5jbG9zZSgpXG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgbWVldHVwczogbWVldHVwc0Zyb21EQi5tYXAobWVldHVwID0+IChcbiAgICAgICAge1xuICAgICAgICAgIHRpdGxlOiBtZWV0dXAudGl0bGUsXG4gICAgICAgICAgaW1hZ2U6IG1lZXR1cC5pbWFnZSxcbiAgICAgICAgICBhZGRyZXNzOiBtZWV0dXAuYWRkcmVzcyxcbiAgICAgICAgICBpZDogbWVldHVwLl9pZC50b1N0cmluZygpXG4gICAgICAgIH1cbiAgICAgICkpXG4gICAgfSxcbiAgICByZXZhbGlkYXRlOiAxMFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlOyJdLCJzb3VyY2VSb290IjoiIn0=