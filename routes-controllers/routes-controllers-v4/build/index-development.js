/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const app = __webpack_require__(/*! ./src/app */ \"./src/app.js\");\n\nconst PORT = 3000;\napp.listen(PORT, function() {\n    console.log(`server is running on port ${PORT}`);\n});\n\n\n//# sourceURL=webpack://routes-controllers-v4/./index.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const express = __webpack_require__(/*! express */ \"express\");\nconst memberRouter = __webpack_require__(/*! ./router/memberRouter */ \"./src/router/memberRouter.js\")\nconst teamRouter = __webpack_require__(/*! ./router/teamRouter */ \"./src/router/teamRouter.js\")\n\nconst app = express();\napp.use(express.json());\napp.use(express.urlencoded({extended: true}));\n\napp.use((req, res, next) => {\n    console.log('');\n    console.log('- req.url', req.url);\n    console.log('- req.query', req.query);\n    console.log('- req.params', req.params);\n    console.log('- req.body', req.body);\n    next();\n});\n\n// router 를 404 나 ERR 보다 먼저 선언해준다\napp.use('/members', memberRouter);\napp.use('/teams', teamRouter);\n\n// 404 처리\napp.use((req, res, next) => {\n    res.sendStatus(404);\n    next();\n});\n\n// ERR 처리\napp.use((err, req, res, next) => {\n    res.sendStatus(500);\n    res.send(err.message);\n    next();\n});\n\nmodule.exports = app;\n\n\n//# sourceURL=webpack://routes-controllers-v4/./src/app.js?");

/***/ }),

/***/ "./src/controller/memberController.js":
/*!********************************************!*\
  !*** ./src/controller/memberController.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const memberService = __webpack_require__(/*! ../service/memberService */ \"./src/service/memberService.js\");\n\nconst getMemberList = function(req, res) {\n    const userList = memberService.getMemberList();\n    // if (true) {\n    //     return res.status(400).json({message: 'bad request'});\n    // }\n    res.status(200).json('getMemberList');\n};\n\nconst getMemberDetail = function(req, res) {\n    const user = memberService.getMemberDetail();\n    res.send('getMemberDetail');\n};\n\nconst addMember = function(req, res) {\n\n    console.log('');\n    console.log('- req.url', req.url);\n    console.log('- req.query', req.query);\n    console.log('- req.params', req.params);\n    console.log('- req.body', req.body);\n\n    memberService.addMember();\n    res.send('addMember');\n};\n\nconst modifyMember = function(req, res) {\n\n    console.log('');\n    console.log('- req.url', req.url);\n    console.log('- req.query', req.query);\n    console.log('- req.params', req.params);\n    console.log('- req.body', req.body);\n\n    memberService.modifyMember();\n    res.send('modifyMember');\n};\n\nconst deleteMember = function(req, res) {\n    memberService.deleteMember();\n    res.send('deleteMember');\n};\n\nmodule.exports = {\n    getMemberList,\n    getMemberDetail,\n    addMember,\n    modifyMember,\n    deleteMember,\n}\n\n\n//# sourceURL=webpack://routes-controllers-v4/./src/controller/memberController.js?");

/***/ }),

/***/ "./src/controller/teamController.js":
/*!******************************************!*\
  !*** ./src/controller/teamController.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const teamService = __webpack_require__(/*! ../service/teamService */ \"./src/service/teamService.js\");\n\nconst getTeamList = function(req, res) {\n    teamService.getTeamList();\n    res.send('getTeamList');\n};\n\nconst getTeamDetail = function(req, res) {\n    teamService.getTeamDetail();\n    res.send('getTeamDetail');\n};\n\nconst addTeam = function(req, res) {\n    teamService.addTeam();\n    res.send('addTeam');\n};\n\nconst modifyTeam = function(req, res) {\n    teamService.modifyTeam();\n    res.send('modifyTeam');\n};\n\nconst deleteTeam = function(req, res) {\n    teamService.deleteTeam();\n    res.send('deleteTeam');\n};\n\nmodule.exports = {\n    getTeamList,\n    getTeamDetail,\n    addTeam,\n    modifyTeam,\n    deleteTeam,\n}\n\n\n//# sourceURL=webpack://routes-controllers-v4/./src/controller/teamController.js?");

/***/ }),

/***/ "./src/router/memberRouter.js":
/*!************************************!*\
  !*** ./src/router/memberRouter.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const express = __webpack_require__(/*! express */ \"express\");\nconst router = express.Router();\nconst memberController = __webpack_require__(/*! ../controller/memberController */ \"./src/controller/memberController.js\");\n\nrouter.get('/', memberController.getMemberList);\nrouter.get('/:memberId', memberController.getMemberDetail);\nrouter.post('/', memberController.addMember);\nrouter.put('/:memberId', memberController.modifyMember);\nrouter.delete('/:memberId', memberController.deleteMember);\n\nmodule.exports = router;\n\n\n//# sourceURL=webpack://routes-controllers-v4/./src/router/memberRouter.js?");

/***/ }),

/***/ "./src/router/teamRouter.js":
/*!**********************************!*\
  !*** ./src/router/teamRouter.js ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const express = __webpack_require__(/*! express */ \"express\");\nconst router = express.Router();\nconst teamController = __webpack_require__(/*! ../controller/teamController */ \"./src/controller/teamController.js\");\n\nrouter.get('/', teamController.getTeamList);\nrouter.get('/:teamId', teamController.getTeamDetail);\nrouter.post('/', teamController.addTeam);\nrouter.put('/:teamId', teamController.modifyTeam);\nrouter.delete('/:teamId', teamController.deleteTeam);\n\nmodule.exports = router;\n\n\n//# sourceURL=webpack://routes-controllers-v4/./src/router/teamRouter.js?");

/***/ }),

/***/ "./src/service/memberService.js":
/*!**************************************!*\
  !*** ./src/service/memberService.js ***!
  \**************************************/
/***/ ((module) => {

eval("const addMember = function() {\n    console.log(\"add member\");\n}\n\nconst getMemberList = function() {\n    console.log(\"get member list\");\n    return [];\n}\n\nconst getMemberDetail = function() {\n    console.log(\"get member detail\");\n    return null;\n}\n\nconst modifyMember = function() {\n    console.log(\"modify member\");\n}\n\nconst deleteMember = function() {\n    console.log(\"delete member\");\n}\n\nmodule.exports = {\n    addMember,\n    getMemberList,\n    getMemberDetail,\n    modifyMember,\n    deleteMember,\n}\n\n//# sourceURL=webpack://routes-controllers-v4/./src/service/memberService.js?");

/***/ }),

/***/ "./src/service/teamService.js":
/*!************************************!*\
  !*** ./src/service/teamService.js ***!
  \************************************/
/***/ ((module) => {

eval("const addTeam = function() {\n    console.log(\"add team\");\n}\n\nconst getTeamList = function() {\n    console.log(\"get team list\");\n    return [];\n}\n\nconst getTeamDetail = function() {\n    console.log(\"get team detail\");\n    return null;\n}\n\nconst modifyTeam = function() {\n    console.log(\"modify team\");\n}\n\nconst deleteTeam = function() {\n    console.log(\"delete team\");\n}\n\nmodule.exports = {\n    addTeam,\n    getTeamList,\n    getTeamDetail,\n    modifyTeam,\n    deleteTeam,\n}\n\n//# sourceURL=webpack://routes-controllers-v4/./src/service/teamService.js?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("express");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;