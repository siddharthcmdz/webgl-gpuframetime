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

/***/ "./node_modules/stats.js/build/stats.min.js":
/*!**************************************************!*\
  !*** ./node_modules/stats.js/build/stats.min.js ***!
  \**************************************************/
/***/ (function(module) {

eval("// stats.js - http://github.com/mrdoob/stats.js\n(function(f,e){ true?module.exports=e():0})(this,function(){var f=function(){function e(a){c.appendChild(a.dom);return a}function u(a){for(var d=0;d<c.children.length;d++)c.children[d].style.display=d===a?\"block\":\"none\";l=a}var l=0,c=document.createElement(\"div\");c.style.cssText=\"position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000\";c.addEventListener(\"click\",function(a){a.preventDefault();\nu(++l%c.children.length)},!1);var k=(performance||Date).now(),g=k,a=0,r=e(new f.Panel(\"FPS\",\"#0ff\",\"#002\")),h=e(new f.Panel(\"MS\",\"#0f0\",\"#020\"));if(self.performance&&self.performance.memory)var t=e(new f.Panel(\"MB\",\"#f08\",\"#201\"));u(0);return{REVISION:16,dom:c,addPanel:e,showPanel:u,begin:function(){k=(performance||Date).now()},end:function(){a++;var c=(performance||Date).now();h.update(c-k,200);if(c>g+1E3&&(r.update(1E3*a/(c-g),100),g=c,a=0,t)){var d=performance.memory;t.update(d.usedJSHeapSize/\n1048576,d.jsHeapSizeLimit/1048576)}return c},update:function(){k=this.end()},domElement:c,setMode:u}};f.Panel=function(e,f,l){var c=Infinity,k=0,g=Math.round,a=g(window.devicePixelRatio||1),r=80*a,h=48*a,t=3*a,v=2*a,d=3*a,m=15*a,n=74*a,p=30*a,q=document.createElement(\"canvas\");q.width=r;q.height=h;q.style.cssText=\"width:80px;height:48px\";var b=q.getContext(\"2d\");b.font=\"bold \"+9*a+\"px Helvetica,Arial,sans-serif\";b.textBaseline=\"top\";b.fillStyle=l;b.fillRect(0,0,r,h);b.fillStyle=f;b.fillText(e,t,v);\nb.fillRect(d,m,n,p);b.fillStyle=l;b.globalAlpha=.9;b.fillRect(d,m,n,p);return{dom:q,update:function(h,w){c=Math.min(c,h);k=Math.max(k,h);b.fillStyle=l;b.globalAlpha=1;b.fillRect(0,0,r,m);b.fillStyle=f;b.fillText(g(h)+\" \"+e+\" (\"+g(c)+\"-\"+g(k)+\")\",t,v);b.drawImage(q,d+a,m,n-a,p,d,m,n-a,p);b.fillRect(d+n-a,m,a,p);b.fillStyle=l;b.globalAlpha=.9;b.fillRect(d+n-a,m,a,g((1-h/w)*p))}}};return f});\n\n\n//# sourceURL=webpack://webgl-gpuframetime/./node_modules/stats.js/build/stats.min.js?");

/***/ }),

/***/ "./node_modules/three/build/three.module.js":
/*!**************************************************!*\
  !*** ./node_modules/three/build/three.module.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var stats_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stats.js */ \"./node_modules/stats.js/build/stats.min.js\");\n/* harmony import */ var stats_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(stats_js__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\n\r\nconst render = () => {\r\n    const canvas = document.querySelector('#c');\r\n    const renderer = new three__WEBPACK_IMPORTED_MODULE_1__.WebGLRenderer({canvas});\r\n    \r\n    const fov = 75;\r\n    const aspect = 2;  // the canvas default\r\n    const near = 0.1;\r\n    const far = 5;\r\n    const camera = new three__WEBPACK_IMPORTED_MODULE_1__.PerspectiveCamera(fov, aspect, near, far);\r\n    camera.position.z = 2;\r\n    \r\n    const scene = new three__WEBPACK_IMPORTED_MODULE_1__.Scene();\r\n    const boxWidth = 1;\r\n    const boxHeight = 1;\r\n    const boxDepth = 1;\r\n    const geometry = new three__WEBPACK_IMPORTED_MODULE_1__.BoxGeometry(boxWidth, boxHeight, boxDepth);\r\n    \r\n    const material = new three__WEBPACK_IMPORTED_MODULE_1__.MeshBasicMaterial({color: 0x44aa88});  // greenish blue\r\n    \r\n    const cube = new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(geometry, material);\r\n    scene.add(cube);\r\n\r\n    function resizeRendererToDisplaySize(renderer) {\r\n        const canvas = renderer.domElement;\r\n        const pixelRatio = window.devicePixelRatio;\r\n        const width  = canvas.clientWidth  * pixelRatio | 0;\r\n        const height = canvas.clientHeight * pixelRatio | 0;\r\n        const needResize = canvas.width !== width || canvas.height !== height;\r\n        if (needResize) {\r\n          renderer.setSize(width, height, false);\r\n        }\r\n        return needResize;    }\r\n\r\n    let gl = canvas.getContext('webgl2');\r\n    if(gl == null)\r\n    {\r\n        gl = canvas.getContext('webgl');\r\n    }\r\n    \r\n    console.log(gl);\r\n    let ext = gl.getExtension('EXT_disjoint_timer_query_webgl2');\r\n    console.log(ext)\r\n    console.log(window)\r\n\r\n    let stats = new stats_js__WEBPACK_IMPORTED_MODULE_0__()\r\n    console.log(stats)\r\n    stats.showPanel(3);\r\n    let queryPanel = stats.addPanel( new stats_js__WEBPACK_IMPORTED_MODULE_0__.Panel( 'ms', '#ff8', '#221' ) );\r\n    document.body.appendChild(stats.dom);\r\n\r\n    let availability_retry = 500\r\n    let elapsed_query = gl.createQuery()\r\n    let enableQueryOnce = true\r\n    let lastQueryResult = 0\r\n    // function checkQueryResults() {\r\n\r\n    //     console.log('checkQueryResults')\r\n    //     if (query) {\r\n    //         let available = gl.getQueryParameter(query, gl.QUERY_RESULT_AVAILABLE);\r\n    //         let disjoint = gl.getParameter(ext.GPU_DISJOINT_EXT);\r\n  \r\n    //         if (available && !disjoint) {\r\n    //           // See how much time the rendering of the object took in nanoseconds.\r\n    //           let timeElapsed = gl.getQueryParameter(query, gl.QUERY_RESULT);\r\n  \r\n    //           // Do something useful with the time.  Note that care should be\r\n    //           // taken to use all significant bits of the result, not just the\r\n    //           // least significant 32 bits.\r\n    //           console.log(timeElapsed);\r\n    //         }\r\n  \r\n    //         if (available || disjoint) {\r\n    //           // Clean up the query object.\r\n    //           gl.deleteQuery(query);\r\n    //           // Don't re-enter this polling loop.\r\n    //           query = null;\r\n    //         }\r\n    //       }\r\n    // }\r\n\r\n    function checkQueryResults() {\r\n        if (availability_retry > 0) {\r\n            // Make a reasonable attempt to wait for the queries' results to become available.\r\n            if (!gl.getQueryParameter(elapsed_query, gl.QUERY_RESULT_AVAILABLE)) {\r\n                let error = gl.getError();\r\n                if (error != gl.NO_ERROR) {\r\n                    console.log(\"getQueryParameter should have no errors: \" +error);\r\n                    return;\r\n                }\r\n                availability_retry--;\r\n                window.requestAnimationFrame(checkQueryResults);\r\n                return;\r\n            }\r\n        }\r\n    \r\n        let disjoint_value = gl.getParameter(ext.GPU_DISJOINT_EXT);\r\n        let available = gl.getQueryParameter(elapsed_query, gl.QUERY_RESULT_AVAILABLE);\r\n        if(!available)\r\n            return;\r\n\r\n        if (disjoint_value) {\r\n            // Cannot validate results make sense, but this is okay.\r\n            console.log(\"Disjoint triggered.\");\r\n        } else {\r\n            let elapsed_result = gl.getQueryParameter(elapsed_query, gl.QUERY_RESULT);\r\n            if(elapsed_result > 0) {\r\n                enableQueryOnce = true\r\n                let toms =  elapsed_result/1000\r\n                lastQueryResult = toms\r\n                console.log(toms)\r\n            }\r\n        }        \r\n    }\r\n\r\n    function renderQueryEx1(time) {\r\n        stats.begin()\r\n\r\n        if(enableQueryOnce) {\r\n            gl.beginQuery(ext.TIME_ELAPSED_EXT, elapsed_query);\r\n        }\r\n\r\n        time *= 0.001;  // convert time to seconds\r\n    \r\n        cube.rotation.x = time;\r\n        cube.rotation.y = time;\r\n        if (resizeRendererToDisplaySize(renderer)) {\r\n            const canvas = renderer.domElement;\r\n            camera.aspect = canvas.clientWidth / canvas.clientHeight;\r\n            camera.updateProjectionMatrix();\r\n        }\r\n\r\n        renderer.render(scene, camera);\r\n        if(enableQueryOnce)\r\n        {\r\n            gl.endQuery(ext.TIME_ELAPSED_EXT);\r\n            enableQueryOnce = false;\r\n        }\r\n        \r\n        stats.end()\r\n        queryPanel.update( lastQueryResult, 400 );\r\n\r\n        requestAnimationFrame(renderQueryEx1);\r\n        window.requestAnimationFrame(checkQueryResults)\r\n    }\r\n    requestAnimationFrame(renderQueryEx1);\r\n}\r\n\r\nrender()\r\n\n\n//# sourceURL=webpack://webgl-gpuframetime/./src/index.js?");

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;