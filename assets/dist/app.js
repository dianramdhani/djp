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
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/components/tr-wrapper/tr-wrapper.html":
/*!******************************************************!*\
  !*** ./assets/components/tr-wrapper/tr-wrapper.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = \"<aside class=\\\"aside aside-fixed\\\"> <div class=aside-header> <a href=# class=\\\"aside-logo tr-logo\\\"><img src=\" + __webpack_require__(/*! ../../img/logo-etl.png */ \"./assets/img/logo-etl.png\") + \" alt=\\\"\\\"></a> <a href=\\\"\\\" class=aside-menu-link> <i data-feather=menu></i> <i data-feather=x></i> </a> </div> <div class=aside-body> <ul class=\\\"nav nav-aside\\\"> <li class=nav-item> <a href=dashboard-one.html class=nav-link> <i data-feather=monitor></i> <span>Dashboard</span> </a> </li> <li class=\\\"nav-item active\\\"> <a href=dashboard-one.html class=nav-link> <i data-feather=arrow-down-circle></i> <span>Load Data</span> </a> </li> <li class=nav-item> <a href=dashboard-one.html class=nav-link> <i data-feather=shield></i> <span>Cleansing Role</span> </a> </li> <li class=\\\"nav-label mg-t-25\\\">Master Data Management</li> <li class=nav-item> <a href=../../components class=nav-link> <i data-feather=clock></i> <span>History Data Processing</span> </a> </li> <li class=nav-item> <a href=../../components class=nav-link> <i data-feather=book></i> <span>Activity List</span> </a> </li> </ul> </div> </aside> <div class=\\\"content ht-100v pd-0\\\"> <div class=\\\"content-header tr-content-header\\\"> <div class=\\\"dropdown dropdown-profile\\\"> <a href=\\\"\\\" class=dropdown-link data-toggle=dropdown data-display=static> <div class=\\\"avatar avatar-sm\\\"> <img src=https://via.placeholder.com/500 class=rounded-circle alt=\\\"\\\"> </div> </a> <div class=\\\"dropdown-menu dropdown-menu-right tx-13\\\"> <div class=tr-profile> <div class=\\\"avatar avatar-lg mg-b-15\\\"> <img src=https://via.placeholder.com/500 class=rounded-circle alt=\\\"\\\"> </div> <h6 class=\\\"tx-semibold mg-b-5\\\">Katherine Pechon</h6> <p class=\\\"mg-b-10 tx-12 tx-color-03\\\">Administrator</p> </div> <div class=dropdown-divider></div> <a href=\\\"\\\" class=dropdown-item><i data-feather=settings></i>Account Settings</a> <a href=page-signin.html class=dropdown-item><i data-feather=log-out></i>Logout</a> </div> </div> </div> <div class=content-body> <div class=\\\"container pd-x-0\\\"> <div class=\\\"d-sm-flex align-items-center justify-content-between mg-b-20 mg-lg-b-25 mg-xl-b-30\\\"> <h4 class=\\\"mg-b-0 tx-spacing--1\\\">Load Data</h4> <nav aria-label=breadcrumb> <ol class=\\\"breadcrumb breadcrumb-style1 mg-b-10\\\"> <li class=breadcrumb-item><a href=#>Home</a></li> <li class=\\\"breadcrumb-item active\\\" aria-current=page>Load Data</li> </ol> </nav> </div> <load-data></load-data> </div> </div> </div>\";\n\n//# sourceURL=webpack:///./assets/components/tr-wrapper/tr-wrapper.html?");

/***/ }),

/***/ "./assets/components/tr-wrapper/tr-wrapper.js":
/*!****************************************************!*\
  !*** ./assets/components/tr-wrapper/tr-wrapper.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("(function () {\r\n    'use strict';\r\n\r\n    // Usage:\r\n    // \r\n    // Creates:\r\n    // \r\n\r\n    window.app\r\n        .component('trWrapper', {\r\n            template: __webpack_require__(/*! ./tr-wrapper.html */ \"./assets/components/tr-wrapper/tr-wrapper.html\"),\r\n            controller: _\r\n        });\r\n\r\n    _.$inject = ['$timeout'];\r\n    function _($timeout) {\r\n        let $ctrl = this;\r\n        $ctrl.$onInit = () => {\r\n            console.log('testing');\r\n            $timeout(() => {\r\n                __webpack_require__(/*! ../../lib/dashforge/js/dashforge */ \"./assets/lib/dashforge/js/dashforge.js\");\r\n                __webpack_require__(/*! ../../lib/dashforge/js/dashforge.aside */ \"./assets/lib/dashforge/js/dashforge.aside.js\");\r\n            });\r\n        };\r\n    }\r\n})();\n\n//# sourceURL=webpack:///./assets/components/tr-wrapper/tr-wrapper.js?");

/***/ }),

/***/ "./assets/img/logo-etl.png":
/*!*********************************!*\
  !*** ./assets/img/logo-etl.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/img/logo-etl.png\";\n\n//# sourceURL=webpack:///./assets/img/logo-etl.png?");

/***/ }),

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("window.app = angular.module('DJP', ['ui.router', 'ngCookies', 'datatables']);\r\n\r\n// CONFIG\r\n__webpack_require__(/*! ./config */ \"./assets/js/config.js\");\r\n\r\n// RUN\r\n\r\n// ROUTES\r\n\r\n// SERVICES\r\n\r\n// DIRECTIVES\r\n\r\n// COMPONENTS\r\n__webpack_require__(/*! ../components/tr-wrapper/tr-wrapper */ \"./assets/components/tr-wrapper/tr-wrapper.js\");\r\n\r\n// VIEWS\r\n// require('../views/dashboard/dashboard');\r\n__webpack_require__(/*! ../views/load-data/load-data */ \"./assets/views/load-data/load-data.js\");\r\n\n\n//# sourceURL=webpack:///./assets/js/app.js?");

/***/ }),

/***/ "./assets/js/config.js":
/*!*****************************!*\
  !*** ./assets/js/config.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./assets/js/config.js?");

/***/ }),

/***/ "./assets/lib/dashforge/js/dashforge.aside.js":
/*!****************************************************!*\
  !*** ./assets/lib/dashforge/js/dashforge.aside.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(function(){\n\n  'use strict'\n\n  $('[data-toggle=\"tooltip\"]').tooltip()\n\n  const asideBody = new PerfectScrollbar('.aside-body', {\n    suppressScrollX: true\n  });\n\n  if($('.aside-backdrop').length === 0) {\n    $('body').append('<div class=\"aside-backdrop\"></div>');\n  }\n\n  var mql = window.matchMedia('(min-width:992px) and (max-width: 1199px)');\n\n  function doMinimize(e) {\n    if (e.matches) {\n      $('.aside').addClass('minimize');\n    } else {\n      $('.aside').removeClass('minimize');\n    }\n\n    asideBody.update()\n  }\n\n  mql.addListener(doMinimize);\n  doMinimize(mql);\n\n  $('.aside-menu-link').on('click', function(e){\n    e.preventDefault()\n\n    if(window.matchMedia('(min-width: 992px)').matches) {\n      $(this).closest('.aside').toggleClass('minimize');\n    } else {\n\n      $('body').toggleClass('show-aside');\n    }\n\n    asideBody.update()\n  })\n\n  $('.nav-aside .with-sub').on('click', '.nav-link', function(e){\n    e.preventDefault();\n\n    $(this).parent().siblings().removeClass('show');\n    $(this).parent().toggleClass('show');\n\n    asideBody.update()\n  })\n\n  $('body').on('mouseenter', '.minimize .aside-body', function(e){\n    console.log('e');\n    $(this).parent().addClass('maximize');\n  })\n\n  $('body').on('mouseleave', '.minimize .aside-body', function(e){\n    $(this).parent().removeClass('maximize');\n\n    asideBody.update()\n  })\n\n  $('body').on('click', '.aside-backdrop', function(e){\n    $('body').removeClass('show-aside');\n  })\n})\n\n\n//# sourceURL=webpack:///./assets/lib/dashforge/js/dashforge.aside.js?");

/***/ }),

/***/ "./assets/lib/dashforge/js/dashforge.js":
/*!**********************************************!*\
  !*** ./assets/lib/dashforge/js/dashforge.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n$(function(){\n  'use strict'\n\n  feather.replace();\n\n  ////////// NAVBAR //////////\n\n  // Initialize PerfectScrollbar of navbar menu for mobile only\n  if(window.matchMedia('(max-width: 991px)').matches) {\n    const psNavbar = new PerfectScrollbar('#navbarMenu', {\n      suppressScrollX: true\n    });\n  }\n\n  // Showing sub-menu of active menu on navbar when mobile\n  function showNavbarActiveSub() {\n    if(window.matchMedia('(max-width: 991px)').matches) {\n      $('#navbarMenu .active').addClass('show');\n    } else {\n      $('#navbarMenu .active').removeClass('show');\n    }\n  }\n\n  showNavbarActiveSub()\n  $(window).resize(function(){\n    showNavbarActiveSub()\n  })\n\n  // Initialize backdrop for overlay purpose\n  $('body').append('<div class=\"backdrop\"></div>');\n\n\n  // Showing sub menu of navbar menu while hiding other siblings\n  $('.navbar-menu .with-sub .nav-link').on('click', function(e){\n    e.preventDefault();\n    $(this).parent().toggleClass('show');\n    $(this).parent().siblings().removeClass('show');\n\n    if(window.matchMedia('(max-width: 991px)').matches) {\n      psNavbar.update();\n    }\n  })\n\n  // Closing dropdown menu of navbar menu\n  $(document).on('click touchstart', function(e){\n    e.stopPropagation();\n\n    // closing nav sub menu of header when clicking outside of it\n    if(window.matchMedia('(min-width: 992px)').matches) {\n      var navTarg = $(e.target).closest('.navbar-menu .nav-item').length;\n      if(!navTarg) {\n        $('.navbar-header .show').removeClass('show');\n      }\n    }\n  })\n\n  $('#mainMenuClose').on('click', function(e){\n    e.preventDefault();\n    $('body').removeClass('navbar-nav-show');\n  });\n\n  $('#sidebarMenuOpen').on('click', function(e){\n    e.preventDefault();\n    $('body').addClass('sidebar-show');\n  })\n\n  // Navbar Search\n  $('#navbarSearch').on('click', function(e){\n    e.preventDefault();\n    $('.navbar-search').addClass('visible');\n    $('.backdrop').addClass('show');\n  })\n\n  $('#navbarSearchClose').on('click', function(e){\n    e.preventDefault();\n    $('.navbar-search').removeClass('visible');\n    $('.backdrop').removeClass('show');\n  })\n\n\n\n  ////////// SIDEBAR //////////\n\n  // Initialize PerfectScrollbar for sidebar menu\n  if($('#sidebarMenu').length) {\n    const psSidebar = new PerfectScrollbar('#sidebarMenu', {\n      suppressScrollX: true\n    });\n\n\n    // Showing sub menu in sidebar\n    $('.sidebar-nav .with-sub').on('click', function(e){\n      e.preventDefault();\n      $(this).parent().toggleClass('show');\n\n      psSidebar.update();\n    })\n  }\n\n\n  $('#mainMenuOpen').on('click touchstart', function(e){\n    e.preventDefault();\n    $('body').addClass('navbar-nav-show');\n  })\n\n  $('#sidebarMenuClose').on('click', function(e){\n    e.preventDefault();\n    $('body').removeClass('sidebar-show');\n  })\n\n  // hide sidebar when clicking outside of it\n  $(document).on('click touchstart', function(e){\n    e.stopPropagation();\n\n    // closing of sidebar menu when clicking outside of it\n    if(!$(e.target).closest('.burger-menu').length) {\n      var sb = $(e.target).closest('.sidebar').length;\n      var nb = $(e.target).closest('.navbar-menu-wrapper').length;\n      if(!sb && !nb) {\n        if($('body').hasClass('navbar-nav-show')) {\n          $('body').removeClass('navbar-nav-show');\n        } else {\n          $('body').removeClass('sidebar-show');\n        }\n      }\n    }\n  });\n\n})\n\n\n//# sourceURL=webpack:///./assets/lib/dashforge/js/dashforge.js?");

/***/ }),

/***/ "./assets/views/load-data/load-data.html":
/*!***********************************************!*\
  !*** ./assets/views/load-data/load-data.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div class=\\\"row row-xs\\\"> <div class=col-lg-5> <div class=card> <div class=\\\"card-header pd-t-20 pd-b-0 bd-b-0\\\"> <h6>Upload a File</h6> </div> <div class=card-body> <form> <div class=\\\"form-group row\\\"> <label class=\\\"col-sm-4 col-form-label pd-r-0\\\">Attachment</label> <div class=col-sm-8> <div class=custom-file> <input type=file class=custom-file-input id=customFile> <label class=custom-file-label for=customFile>Choose file</label> </div> </div> </div> <div class=\\\"form-group row\\\"> <label for=inputPassword3 class=\\\"col-sm-4 col-form-label pd-r-0\\\">Comment</label> <div class=col-sm-8> <textarea id=inputPassword3 class=form-control rows=2 placeholder=Comment></textarea> </div> </div> <button type=submit class=\\\"btn btn-primary\\\">Upload</button> </form> </div> </div> </div> <div class=\\\"col-lg-7 mg-t-10 mg-lg-t-0\\\"> <div class=card> <div class=\\\"card-header pd-t-20 pd-b-0 bd-b-0\\\"> <h6>List Files</h6> </div> <div class=table-responsive> <table class=\\\"table table-dashboard mg-t-10 mg-b-0\\\"> <thead> <tr> <th>File Name</th> <th>Date Uploaded</th> <th>Comment</th> </tr> </thead> <tbody> <tr> <td>DKI_Jakarta.xls</td> <td>03/05/2018</td> <td>Data DKI Jakarta</td> </tr> <tr> <td>DKI_Jakarta.xls</td> <td>03/05/2018</td> <td>Data DKI Jakarta</td> </tr> <tr> <td>DKI_Jakarta.xls</td> <td>03/05/2018</td> <td>Data DKI Jakarta</td> </tr> <tr> <td>DKI_Jakarta.xls</td> <td>03/05/2018</td> <td>Data DKI Jakarta</td> </tr> <tr> <td>DKI_Jakarta.xls</td> <td>03/05/2018</td> <td>Data DKI Jakarta</td> </tr> </tbody> </table> </div> </div> </div> </div>\";\n\n//# sourceURL=webpack:///./assets/views/load-data/load-data.html?");

/***/ }),

/***/ "./assets/views/load-data/load-data.js":
/*!*********************************************!*\
  !*** ./assets/views/load-data/load-data.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("(function () {\r\n    'use strict';\r\n\r\n    // Usage:\r\n    // \r\n    // Creates:\r\n    // \r\n\r\n    window.app\r\n        .component('loadData', {\r\n            template: __webpack_require__(/*! ./load-data.html */ \"./assets/views/load-data/load-data.html\"),\r\n            controller: _\r\n        });\r\n\r\n    _.$inject = [];\r\n    function _() {\r\n        let $ctrl = this;\r\n        $ctrl.$onInit = () => { };\r\n    }\r\n})();\n\n//# sourceURL=webpack:///./assets/views/load-data/load-data.js?");

/***/ })

/******/ });