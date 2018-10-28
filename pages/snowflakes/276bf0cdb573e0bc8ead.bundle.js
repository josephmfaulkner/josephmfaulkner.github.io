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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ({

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 7:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/pages/snowflakes/sass/main.scss
var main = __webpack_require__(6);

// CONCATENATED MODULE: ./src/pages/snowflakes/js/canvasUtil.js
let drawLine= function(context, point1, point2)
{
    context.beginPath();
    context.moveTo(point1.x, point1.y);
    context.lineTo(point2.x, point2.y);
    context.stroke();
}


// CONCATENATED MODULE: ./src/pages/snowflakes/js/mathUtil.js
let getMidPoint = function(point1, point2)
{
    let nX = (point1.x + point2.x)/2;
    let nY = (point1.y + point2.y)/2;
    return {x:nX,y:nY}; 
}

let getMidPointPercentage = function(point1, point2, percentage)
{
    let deltaX = point2.x - point1.x;
    let deltaY = point2.y - point1.y;

    let nX = point1.x + (deltaX * percentage);
    let nY = point1.y + (deltaY * percentage);
    
    return {x:nX,y:nY}; 
}

let getVectorFromPoints = function(point1,point2)
{
    let vX = point2.x - point1.x;
    let vY = point2.y - point1.y;
    return { x: vX, y: vY };
}

let getVectorMagnitude = function(vector)
{
    let x2 = (vector.x * vector.x);
    let y2 = (vector.y * vector.y);
    let hypotenuse = (Math.sqrt(x2 + y2));
    return hypotenuse; 
}

let scaleVector = function(vector,scale)
{
    let newX = vector.x * scale;
    let newY = vector.y * scale;
    let newVector = { x: newX, y: newY };
    return newVector;
}

let normalizeVector = function(vector)
{
    let vectorMagnitude = getVectorMagnitude(vector);
    let scaleFactor = (1/vectorMagnitude);

    return scaleVector(vector,scaleFactor);
}

let getPointFromVector = function(startPoint, vector)
{
    let pX = startPoint.x - vector.x;
    let pY = startPoint.y - vector.y; 

    return {x: pX, y: pY};
}

let getPointInCircle = function(theta,scale)
{
    let pX = Math.cos(theta * Math.PI/180) * scale; 
    let pY = Math.sin(theta * Math.PI/180) * scale; 

    return {x: pX , y: pY };
}

let getTranslatePoint = function(point, transX, transY)
{
    let pX = point.x + transX; 
    let pY = point.y + transY; 

    return {x: pX , y: pY };
}

let getPerpendicularVector = function(vector)
{
    let x1 = vector.x; 
    let y1 = vector.y;
   
    let x2 =   y1; 
    let y2 = (-x1);

    let perpendicularVector = normalizeVector({x: x2, y: y2});

    return perpendicularVector;   
}




// CONCATENATED MODULE: ./src/pages/snowflakes/js/drawcurve.js




let getPerpendicularPoint = function(point1,point2,angle)
{
    let midPoint   = getMidPoint(point1,point2);

    let midPointLineVector = getVectorFromPoints(point1,midPoint);
    let midPointVectorMagnitude = getVectorMagnitude(midPointLineVector);  
    
    let perpendicularMagnitude = midPointVectorMagnitude * Math.tan(angle * Math.PI/180);
    let perpendicularVector = getPerpendicularVector(midPointLineVector);
    perpendicularVector = scaleVector(perpendicularVector,perpendicularMagnitude);

    let perpendicularPoint = getPointFromVector(midPoint,perpendicularVector); 

    return perpendicularPoint; 
}


let getKochCurveSubPoints = function(point1, point2, angle, pinchFactor)
{
    let midPoint   = getMidPoint(point1,point2);
    let midPoint1  = getMidPointPercentage(point1,midPoint,pinchFactor);
    let midPoint2  = getMidPointPercentage(point2,midPoint,pinchFactor);

    let perpendicularPoint = getPerpendicularPoint(point1, point2, angle); 

    return { 
        midPoint1: midPoint1,
        perpendicularPoint: perpendicularPoint,
        midPoint2: midPoint2
    };

}

let drawCurveRecursive = function(context, point1, point2, angle, pinchFactor, depth)
{
    if(depth <= 0)
    {
        drawLine(context,point1,point2);
        return; 
    }
    
    let subpoints = getKochCurveSubPoints(point1,point2,angle, pinchFactor);

    drawCurveRecursive(context, point1                      , subpoints.midPoint1         , angle, pinchFactor, depth - 1);
    drawCurveRecursive(context, subpoints.midPoint1         , subpoints.perpendicularPoint, angle, pinchFactor, depth - 1);
    drawCurveRecursive(context, subpoints.perpendicularPoint, subpoints.midPoint2         , angle, pinchFactor, depth - 1);
    drawCurveRecursive(context, subpoints.midPoint2         , point2                      , angle, pinchFactor, depth - 1);

}

let drawSnowFlake = function(context, size, numberOfSides,angle,pinchFactor,depth)
{
    var centerX  = context.canvas.clientWidth  / 2;
    var centerY  = context.canvas.clientHeight / 2;

    context.clearRect(0, 0, centerX * 2, centerY * 2);

    let theta      = 0;
    let thetaDelta = (360 / numberOfSides); 

    let prevPoint = getPointInCircle(theta,size);

    for(let i = 1; i <= numberOfSides; i++)
    {
        theta = (thetaDelta * i);
        let nextPoint = getPointInCircle(theta,size);
        drawCurveRecursive(context, getTranslatePoint(prevPoint,centerX,centerY), getTranslatePoint(nextPoint,centerX,centerY), angle, pinchFactor, depth);
        prevPoint = nextPoint; 
    }
    
/*
    
    let point1 = {x: 125, y: 375};
    let point2 = {x: 375, y: 375};
    let point3 = {x: 255, y: 125};

    drawCurveRecursive(context, point1, point2, angle, depth);
    drawCurveRecursive(context, point2, point3, angle, depth);
    drawCurveRecursive(context, point3, point1, angle, depth);
*/
}

/* harmony default export */ var drawcurve = (drawSnowFlake); 
// CONCATENATED MODULE: ./src/pages/snowflakes/js/index.js




console.log("Hello from the console");

var canvas;
var canvasContext;
var appModel;

let updateView = function(model)
{
    drawcurve(model.context, model.size, model.numberOfSides, model.angle, model.pinchFactor, model.depth)
}
    
let onSliderChange = function(){
    appModel.size          = Number(inputSize.value);
    appModel.numberOfSides = Number(inputNumSides.value);
    appModel.angle         = Number(inputAngle.value); 
    appModel.pinchFactor   = Number(inputPinchFactor.value) / 100.00;
    appModel.depth         = Number(inputDepth.value); 

    updateView(appModel);
}

function resizeCanvas() {
        let controlsContainer = document.getElementById("controlsContainer");
        let controlsWidth = controlsContainer.offsetWidth; 
        let controlsPadding = window.getComputedStyle(controlsContainer, null).getPropertyValue('padding-left');
        controlsPadding = controlsPadding.replace(/[^\d.-]/g, '');
        controlsPadding = parseFloat(controlsPadding);
        let newCanvasWidth = controlsWidth - (controlsPadding * 2.05); 

        console.log('resize',controlsWidth,controlsPadding,newCanvasWidth);
        canvas.width = newCanvasWidth; 
        updateView(appModel); 
}



//init page
(function() {

    canvas = document.getElementById("mainView");
    canvasContext = canvas.getContext("2d");

    var inputSize        = document.getElementById("inputSize");
    var inputNumSides    = document.getElementById("inputNumSides");
    var inputAngle       = document.getElementById("inputAngle");
    var inputPinchFactor = document.getElementById("inputPinchFactor");
    var inputDepth       = document.getElementById("inputDepth");


    inputSize.oninput        = onSliderChange;         
    inputNumSides.oninput    = onSliderChange;
    inputAngle.oninput       = onSliderChange;
    inputPinchFactor.oninput = onSliderChange;
    inputDepth.oninput       = onSliderChange;

    appModel = {
        context: canvasContext,
        size: 100, 
        numberOfSides: 10,
        angle: 20,
        pinchFactor: 0.5,
        depth: 5
    };

    window.addEventListener('resize', resizeCanvas, false);
    onSliderChange();
    resizeCanvas();
 })();




/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL3Nub3dmbGFrZXMvc2Fzcy9tYWluLnNjc3M/Yzk0OCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvc25vd2ZsYWtlcy9qcy9jYW52YXNVdGlsLmpzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9zbm93Zmxha2VzL2pzL21hdGhVdGlsLmpzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9zbm93Zmxha2VzL2pzL2RyYXdjdXJ2ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvc25vd2ZsYWtlcy9qcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7OztBQ2xGQSx1Qzs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxXO0FBQ1o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxZQUFZLFc7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EscUM7O0FBRUEsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQSxtRDtBQUNBLG1EOztBQUVBLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0EsOEI7QUFDQSw4Qjs7QUFFQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTtBQUNBLHNCO0FBQ0E7O0FBRUEsa0I7QUFDQTs7QUFFQSwrQ0FBK0MsYUFBYTs7QUFFNUQsK0I7QUFDQTs7Ozs7O0FDcEZ5QztBQUNGOzs7QUFHdkM7QUFDQTtBQUNBLHFCQUFxQixXQUFvQjs7QUFFekMsNkJBQTZCLG1CQUE0QjtBQUN6RCxrQ0FBa0Msa0JBQTJCLHFCOztBQUU3RDtBQUNBLDhCQUE4QixzQkFBK0I7QUFDN0QsMEJBQTBCLFdBQW9COztBQUU5Qyw2QkFBNkIsa0JBQTJCLCtCOztBQUV4RCw4QjtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EscUJBQXFCLFdBQW9CO0FBQ3pDLHFCQUFxQixxQkFBOEI7QUFDbkQscUJBQXFCLHFCQUE4Qjs7QUFFbkQsMEU7O0FBRUEsWTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxRQUFlO0FBQ3ZCLGU7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLDJDOztBQUVBLG9CQUFvQixnQkFBeUI7O0FBRTdDLGtCQUFrQixvQkFBb0I7QUFDdEM7QUFDQTtBQUNBLHdCQUF3QixnQkFBeUI7QUFDakQsb0NBQW9DLGlCQUEwQiw2QkFBNkIsaUJBQTBCO0FBQ3JILDhCO0FBQ0E7O0FBRUE7O0FBRUEsa0JBQWtCO0FBQ2xCLGtCQUFrQjtBQUNsQixrQkFBa0I7O0FBRWxCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWUsMkRBQWEsRTs7QUN0RkM7QUFDVzs7O0FBR3hDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSSxTQUFhO0FBQ2pCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHNEO0FBQ0E7QUFDQSxzRDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNFOztBQUVBO0FBQ0Esc0M7QUFDQSw2QjtBQUNBOzs7O0FBSUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLDhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFIiwiZmlsZSI6InBhZ2VzL3Nub3dmbGFrZXMvMjc2YmYwY2RiNTczZTBiYzhlYWQuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDcpO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwibGV0IGRyYXdMaW5lPSBmdW5jdGlvbihjb250ZXh0LCBwb2ludDEsIHBvaW50MilcbntcbiAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgIGNvbnRleHQubW92ZVRvKHBvaW50MS54LCBwb2ludDEueSk7XG4gICAgY29udGV4dC5saW5lVG8ocG9pbnQyLngsIHBvaW50Mi55KTtcbiAgICBjb250ZXh0LnN0cm9rZSgpO1xufVxuXG5leHBvcnQgeyBkcmF3TGluZSB9IDsiLCJsZXQgZ2V0TWlkUG9pbnQgPSBmdW5jdGlvbihwb2ludDEsIHBvaW50MilcbntcbiAgICBsZXQgblggPSAocG9pbnQxLnggKyBwb2ludDIueCkvMjtcbiAgICBsZXQgblkgPSAocG9pbnQxLnkgKyBwb2ludDIueSkvMjtcbiAgICByZXR1cm4ge3g6blgseTpuWX07IFxufVxuXG5sZXQgZ2V0TWlkUG9pbnRQZXJjZW50YWdlID0gZnVuY3Rpb24ocG9pbnQxLCBwb2ludDIsIHBlcmNlbnRhZ2UpXG57XG4gICAgbGV0IGRlbHRhWCA9IHBvaW50Mi54IC0gcG9pbnQxLng7XG4gICAgbGV0IGRlbHRhWSA9IHBvaW50Mi55IC0gcG9pbnQxLnk7XG5cbiAgICBsZXQgblggPSBwb2ludDEueCArIChkZWx0YVggKiBwZXJjZW50YWdlKTtcbiAgICBsZXQgblkgPSBwb2ludDEueSArIChkZWx0YVkgKiBwZXJjZW50YWdlKTtcbiAgICBcbiAgICByZXR1cm4ge3g6blgseTpuWX07IFxufVxuXG5sZXQgZ2V0VmVjdG9yRnJvbVBvaW50cyA9IGZ1bmN0aW9uKHBvaW50MSxwb2ludDIpXG57XG4gICAgbGV0IHZYID0gcG9pbnQyLnggLSBwb2ludDEueDtcbiAgICBsZXQgdlkgPSBwb2ludDIueSAtIHBvaW50MS55O1xuICAgIHJldHVybiB7IHg6IHZYLCB5OiB2WSB9O1xufVxuXG5sZXQgZ2V0VmVjdG9yTWFnbml0dWRlID0gZnVuY3Rpb24odmVjdG9yKVxue1xuICAgIGxldCB4MiA9ICh2ZWN0b3IueCAqIHZlY3Rvci54KTtcbiAgICBsZXQgeTIgPSAodmVjdG9yLnkgKiB2ZWN0b3IueSk7XG4gICAgbGV0IGh5cG90ZW51c2UgPSAoTWF0aC5zcXJ0KHgyICsgeTIpKTtcbiAgICByZXR1cm4gaHlwb3RlbnVzZTsgXG59XG5cbmxldCBzY2FsZVZlY3RvciA9IGZ1bmN0aW9uKHZlY3RvcixzY2FsZSlcbntcbiAgICBsZXQgbmV3WCA9IHZlY3Rvci54ICogc2NhbGU7XG4gICAgbGV0IG5ld1kgPSB2ZWN0b3IueSAqIHNjYWxlO1xuICAgIGxldCBuZXdWZWN0b3IgPSB7IHg6IG5ld1gsIHk6IG5ld1kgfTtcbiAgICByZXR1cm4gbmV3VmVjdG9yO1xufVxuXG5sZXQgbm9ybWFsaXplVmVjdG9yID0gZnVuY3Rpb24odmVjdG9yKVxue1xuICAgIGxldCB2ZWN0b3JNYWduaXR1ZGUgPSBnZXRWZWN0b3JNYWduaXR1ZGUodmVjdG9yKTtcbiAgICBsZXQgc2NhbGVGYWN0b3IgPSAoMS92ZWN0b3JNYWduaXR1ZGUpO1xuXG4gICAgcmV0dXJuIHNjYWxlVmVjdG9yKHZlY3RvcixzY2FsZUZhY3Rvcik7XG59XG5cbmxldCBnZXRQb2ludEZyb21WZWN0b3IgPSBmdW5jdGlvbihzdGFydFBvaW50LCB2ZWN0b3IpXG57XG4gICAgbGV0IHBYID0gc3RhcnRQb2ludC54IC0gdmVjdG9yLng7XG4gICAgbGV0IHBZID0gc3RhcnRQb2ludC55IC0gdmVjdG9yLnk7IFxuXG4gICAgcmV0dXJuIHt4OiBwWCwgeTogcFl9O1xufVxuXG5sZXQgZ2V0UG9pbnRJbkNpcmNsZSA9IGZ1bmN0aW9uKHRoZXRhLHNjYWxlKVxue1xuICAgIGxldCBwWCA9IE1hdGguY29zKHRoZXRhICogTWF0aC5QSS8xODApICogc2NhbGU7IFxuICAgIGxldCBwWSA9IE1hdGguc2luKHRoZXRhICogTWF0aC5QSS8xODApICogc2NhbGU7IFxuXG4gICAgcmV0dXJuIHt4OiBwWCAsIHk6IHBZIH07XG59XG5cbmxldCBnZXRUcmFuc2xhdGVQb2ludCA9IGZ1bmN0aW9uKHBvaW50LCB0cmFuc1gsIHRyYW5zWSlcbntcbiAgICBsZXQgcFggPSBwb2ludC54ICsgdHJhbnNYOyBcbiAgICBsZXQgcFkgPSBwb2ludC55ICsgdHJhbnNZOyBcblxuICAgIHJldHVybiB7eDogcFggLCB5OiBwWSB9O1xufVxuXG5sZXQgZ2V0UGVycGVuZGljdWxhclZlY3RvciA9IGZ1bmN0aW9uKHZlY3RvcilcbntcbiAgICBsZXQgeDEgPSB2ZWN0b3IueDsgXG4gICAgbGV0IHkxID0gdmVjdG9yLnk7XG4gICBcbiAgICBsZXQgeDIgPSAgIHkxOyBcbiAgICBsZXQgeTIgPSAoLXgxKTtcblxuICAgIGxldCBwZXJwZW5kaWN1bGFyVmVjdG9yID0gbm9ybWFsaXplVmVjdG9yKHt4OiB4MiwgeTogeTJ9KTtcblxuICAgIHJldHVybiBwZXJwZW5kaWN1bGFyVmVjdG9yOyAgIFxufVxuXG5cblxuZXhwb3J0IHsgZ2V0TWlkUG9pbnQsIGdldE1pZFBvaW50UGVyY2VudGFnZSwgZ2V0VmVjdG9yRnJvbVBvaW50cywgZ2V0VmVjdG9yTWFnbml0dWRlLCBzY2FsZVZlY3Rvciwgbm9ybWFsaXplVmVjdG9yLCBnZXRQb2ludEZyb21WZWN0b3IgLCBnZXRQb2ludEluQ2lyY2xlLCBnZXRUcmFuc2xhdGVQb2ludCwgZ2V0UGVycGVuZGljdWxhclZlY3RvciB9OyIsImltcG9ydCAqIGFzIENhbnZhcyBmcm9tICAgJy4vY2FudmFzVXRpbCc7XG5pbXBvcnQgKiBhcyBNYXRoVXRpbCBmcm9tICcuL21hdGhVdGlsJztcblxuXG5sZXQgZ2V0UGVycGVuZGljdWxhclBvaW50ID0gZnVuY3Rpb24ocG9pbnQxLHBvaW50MixhbmdsZSlcbntcbiAgICBsZXQgbWlkUG9pbnQgICA9IE1hdGhVdGlsLmdldE1pZFBvaW50KHBvaW50MSxwb2ludDIpO1xuXG4gICAgbGV0IG1pZFBvaW50TGluZVZlY3RvciA9IE1hdGhVdGlsLmdldFZlY3RvckZyb21Qb2ludHMocG9pbnQxLG1pZFBvaW50KTtcbiAgICBsZXQgbWlkUG9pbnRWZWN0b3JNYWduaXR1ZGUgPSBNYXRoVXRpbC5nZXRWZWN0b3JNYWduaXR1ZGUobWlkUG9pbnRMaW5lVmVjdG9yKTsgIFxuICAgIFxuICAgIGxldCBwZXJwZW5kaWN1bGFyTWFnbml0dWRlID0gbWlkUG9pbnRWZWN0b3JNYWduaXR1ZGUgKiBNYXRoLnRhbihhbmdsZSAqIE1hdGguUEkvMTgwKTtcbiAgICBsZXQgcGVycGVuZGljdWxhclZlY3RvciA9IE1hdGhVdGlsLmdldFBlcnBlbmRpY3VsYXJWZWN0b3IobWlkUG9pbnRMaW5lVmVjdG9yKTtcbiAgICBwZXJwZW5kaWN1bGFyVmVjdG9yID0gTWF0aFV0aWwuc2NhbGVWZWN0b3IocGVycGVuZGljdWxhclZlY3RvcixwZXJwZW5kaWN1bGFyTWFnbml0dWRlKTtcblxuICAgIGxldCBwZXJwZW5kaWN1bGFyUG9pbnQgPSBNYXRoVXRpbC5nZXRQb2ludEZyb21WZWN0b3IobWlkUG9pbnQscGVycGVuZGljdWxhclZlY3Rvcik7IFxuXG4gICAgcmV0dXJuIHBlcnBlbmRpY3VsYXJQb2ludDsgXG59XG5cblxubGV0IGdldEtvY2hDdXJ2ZVN1YlBvaW50cyA9IGZ1bmN0aW9uKHBvaW50MSwgcG9pbnQyLCBhbmdsZSwgcGluY2hGYWN0b3IpXG57XG4gICAgbGV0IG1pZFBvaW50ICAgPSBNYXRoVXRpbC5nZXRNaWRQb2ludChwb2ludDEscG9pbnQyKTtcbiAgICBsZXQgbWlkUG9pbnQxICA9IE1hdGhVdGlsLmdldE1pZFBvaW50UGVyY2VudGFnZShwb2ludDEsbWlkUG9pbnQscGluY2hGYWN0b3IpO1xuICAgIGxldCBtaWRQb2ludDIgID0gTWF0aFV0aWwuZ2V0TWlkUG9pbnRQZXJjZW50YWdlKHBvaW50MixtaWRQb2ludCxwaW5jaEZhY3Rvcik7XG5cbiAgICBsZXQgcGVycGVuZGljdWxhclBvaW50ID0gZ2V0UGVycGVuZGljdWxhclBvaW50KHBvaW50MSwgcG9pbnQyLCBhbmdsZSk7IFxuXG4gICAgcmV0dXJuIHsgXG4gICAgICAgIG1pZFBvaW50MTogbWlkUG9pbnQxLFxuICAgICAgICBwZXJwZW5kaWN1bGFyUG9pbnQ6IHBlcnBlbmRpY3VsYXJQb2ludCxcbiAgICAgICAgbWlkUG9pbnQyOiBtaWRQb2ludDJcbiAgICB9O1xuXG59XG5cbmxldCBkcmF3Q3VydmVSZWN1cnNpdmUgPSBmdW5jdGlvbihjb250ZXh0LCBwb2ludDEsIHBvaW50MiwgYW5nbGUsIHBpbmNoRmFjdG9yLCBkZXB0aClcbntcbiAgICBpZihkZXB0aCA8PSAwKVxuICAgIHtcbiAgICAgICAgQ2FudmFzLmRyYXdMaW5lKGNvbnRleHQscG9pbnQxLHBvaW50Mik7XG4gICAgICAgIHJldHVybjsgXG4gICAgfVxuICAgIFxuICAgIGxldCBzdWJwb2ludHMgPSBnZXRLb2NoQ3VydmVTdWJQb2ludHMocG9pbnQxLHBvaW50MixhbmdsZSwgcGluY2hGYWN0b3IpO1xuXG4gICAgZHJhd0N1cnZlUmVjdXJzaXZlKGNvbnRleHQsIHBvaW50MSAgICAgICAgICAgICAgICAgICAgICAsIHN1YnBvaW50cy5taWRQb2ludDEgICAgICAgICAsIGFuZ2xlLCBwaW5jaEZhY3RvciwgZGVwdGggLSAxKTtcbiAgICBkcmF3Q3VydmVSZWN1cnNpdmUoY29udGV4dCwgc3VicG9pbnRzLm1pZFBvaW50MSAgICAgICAgICwgc3VicG9pbnRzLnBlcnBlbmRpY3VsYXJQb2ludCwgYW5nbGUsIHBpbmNoRmFjdG9yLCBkZXB0aCAtIDEpO1xuICAgIGRyYXdDdXJ2ZVJlY3Vyc2l2ZShjb250ZXh0LCBzdWJwb2ludHMucGVycGVuZGljdWxhclBvaW50LCBzdWJwb2ludHMubWlkUG9pbnQyICAgICAgICAgLCBhbmdsZSwgcGluY2hGYWN0b3IsIGRlcHRoIC0gMSk7XG4gICAgZHJhd0N1cnZlUmVjdXJzaXZlKGNvbnRleHQsIHN1YnBvaW50cy5taWRQb2ludDIgICAgICAgICAsIHBvaW50MiAgICAgICAgICAgICAgICAgICAgICAsIGFuZ2xlLCBwaW5jaEZhY3RvciwgZGVwdGggLSAxKTtcblxufVxuXG5sZXQgZHJhd1Nub3dGbGFrZSA9IGZ1bmN0aW9uKGNvbnRleHQsIHNpemUsIG51bWJlck9mU2lkZXMsYW5nbGUscGluY2hGYWN0b3IsZGVwdGgpXG57XG4gICAgdmFyIGNlbnRlclggID0gY29udGV4dC5jYW52YXMuY2xpZW50V2lkdGggIC8gMjtcbiAgICB2YXIgY2VudGVyWSAgPSBjb250ZXh0LmNhbnZhcy5jbGllbnRIZWlnaHQgLyAyO1xuXG4gICAgY29udGV4dC5jbGVhclJlY3QoMCwgMCwgY2VudGVyWCAqIDIsIGNlbnRlclkgKiAyKTtcblxuICAgIGxldCB0aGV0YSAgICAgID0gMDtcbiAgICBsZXQgdGhldGFEZWx0YSA9ICgzNjAgLyBudW1iZXJPZlNpZGVzKTsgXG5cbiAgICBsZXQgcHJldlBvaW50ID0gTWF0aFV0aWwuZ2V0UG9pbnRJbkNpcmNsZSh0aGV0YSxzaXplKTtcblxuICAgIGZvcihsZXQgaSA9IDE7IGkgPD0gbnVtYmVyT2ZTaWRlczsgaSsrKVxuICAgIHtcbiAgICAgICAgdGhldGEgPSAodGhldGFEZWx0YSAqIGkpO1xuICAgICAgICBsZXQgbmV4dFBvaW50ID0gTWF0aFV0aWwuZ2V0UG9pbnRJbkNpcmNsZSh0aGV0YSxzaXplKTtcbiAgICAgICAgZHJhd0N1cnZlUmVjdXJzaXZlKGNvbnRleHQsIE1hdGhVdGlsLmdldFRyYW5zbGF0ZVBvaW50KHByZXZQb2ludCxjZW50ZXJYLGNlbnRlclkpLCBNYXRoVXRpbC5nZXRUcmFuc2xhdGVQb2ludChuZXh0UG9pbnQsY2VudGVyWCxjZW50ZXJZKSwgYW5nbGUsIHBpbmNoRmFjdG9yLCBkZXB0aCk7XG4gICAgICAgIHByZXZQb2ludCA9IG5leHRQb2ludDsgXG4gICAgfVxuICAgIFxuLypcbiAgICBcbiAgICBsZXQgcG9pbnQxID0ge3g6IDEyNSwgeTogMzc1fTtcbiAgICBsZXQgcG9pbnQyID0ge3g6IDM3NSwgeTogMzc1fTtcbiAgICBsZXQgcG9pbnQzID0ge3g6IDI1NSwgeTogMTI1fTtcblxuICAgIGRyYXdDdXJ2ZVJlY3Vyc2l2ZShjb250ZXh0LCBwb2ludDEsIHBvaW50MiwgYW5nbGUsIGRlcHRoKTtcbiAgICBkcmF3Q3VydmVSZWN1cnNpdmUoY29udGV4dCwgcG9pbnQyLCBwb2ludDMsIGFuZ2xlLCBkZXB0aCk7XG4gICAgZHJhd0N1cnZlUmVjdXJzaXZlKGNvbnRleHQsIHBvaW50MywgcG9pbnQxLCBhbmdsZSwgZGVwdGgpO1xuKi9cbn1cblxuZXhwb3J0IGRlZmF1bHQgZHJhd1Nub3dGbGFrZTsgIiwiaW1wb3J0ICcuLy4uL3Nhc3MvbWFpbi5zY3NzJztcbmltcG9ydCBkcmF3U25vd0ZsYWtlIGZyb20gJy4vZHJhd2N1cnZlJztcblxuXG5jb25zb2xlLmxvZyhcIkhlbGxvIGZyb20gdGhlIGNvbnNvbGVcIik7XG5cbnZhciBjYW52YXM7XG52YXIgY2FudmFzQ29udGV4dDtcbnZhciBhcHBNb2RlbDtcblxubGV0IHVwZGF0ZVZpZXcgPSBmdW5jdGlvbihtb2RlbClcbntcbiAgICBkcmF3U25vd0ZsYWtlKG1vZGVsLmNvbnRleHQsIG1vZGVsLnNpemUsIG1vZGVsLm51bWJlck9mU2lkZXMsIG1vZGVsLmFuZ2xlLCBtb2RlbC5waW5jaEZhY3RvciwgbW9kZWwuZGVwdGgpXG59XG4gICAgXG5sZXQgb25TbGlkZXJDaGFuZ2UgPSBmdW5jdGlvbigpe1xuICAgIGFwcE1vZGVsLnNpemUgICAgICAgICAgPSBOdW1iZXIoaW5wdXRTaXplLnZhbHVlKTtcbiAgICBhcHBNb2RlbC5udW1iZXJPZlNpZGVzID0gTnVtYmVyKGlucHV0TnVtU2lkZXMudmFsdWUpO1xuICAgIGFwcE1vZGVsLmFuZ2xlICAgICAgICAgPSBOdW1iZXIoaW5wdXRBbmdsZS52YWx1ZSk7IFxuICAgIGFwcE1vZGVsLnBpbmNoRmFjdG9yICAgPSBOdW1iZXIoaW5wdXRQaW5jaEZhY3Rvci52YWx1ZSkgLyAxMDAuMDA7XG4gICAgYXBwTW9kZWwuZGVwdGggICAgICAgICA9IE51bWJlcihpbnB1dERlcHRoLnZhbHVlKTsgXG5cbiAgICB1cGRhdGVWaWV3KGFwcE1vZGVsKTtcbn1cblxuZnVuY3Rpb24gcmVzaXplQ2FudmFzKCkge1xuICAgICAgICBsZXQgY29udHJvbHNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRyb2xzQ29udGFpbmVyXCIpO1xuICAgICAgICBsZXQgY29udHJvbHNXaWR0aCA9IGNvbnRyb2xzQ29udGFpbmVyLm9mZnNldFdpZHRoOyBcbiAgICAgICAgbGV0IGNvbnRyb2xzUGFkZGluZyA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGNvbnRyb2xzQ29udGFpbmVyLCBudWxsKS5nZXRQcm9wZXJ0eVZhbHVlKCdwYWRkaW5nLWxlZnQnKTtcbiAgICAgICAgY29udHJvbHNQYWRkaW5nID0gY29udHJvbHNQYWRkaW5nLnJlcGxhY2UoL1teXFxkLi1dL2csICcnKTtcbiAgICAgICAgY29udHJvbHNQYWRkaW5nID0gcGFyc2VGbG9hdChjb250cm9sc1BhZGRpbmcpO1xuICAgICAgICBsZXQgbmV3Q2FudmFzV2lkdGggPSBjb250cm9sc1dpZHRoIC0gKGNvbnRyb2xzUGFkZGluZyAqIDIuMDUpOyBcblxuICAgICAgICBjb25zb2xlLmxvZygncmVzaXplJyxjb250cm9sc1dpZHRoLGNvbnRyb2xzUGFkZGluZyxuZXdDYW52YXNXaWR0aCk7XG4gICAgICAgIGNhbnZhcy53aWR0aCA9IG5ld0NhbnZhc1dpZHRoOyBcbiAgICAgICAgdXBkYXRlVmlldyhhcHBNb2RlbCk7IFxufVxuXG5cblxuLy9pbml0IHBhZ2VcbihmdW5jdGlvbigpIHtcblxuICAgIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblZpZXdcIik7XG4gICAgY2FudmFzQ29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5cbiAgICB2YXIgaW5wdXRTaXplICAgICAgICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXRTaXplXCIpO1xuICAgIHZhciBpbnB1dE51bVNpZGVzICAgID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dE51bVNpZGVzXCIpO1xuICAgIHZhciBpbnB1dEFuZ2xlICAgICAgID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dEFuZ2xlXCIpO1xuICAgIHZhciBpbnB1dFBpbmNoRmFjdG9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dFBpbmNoRmFjdG9yXCIpO1xuICAgIHZhciBpbnB1dERlcHRoICAgICAgID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dERlcHRoXCIpO1xuXG5cbiAgICBpbnB1dFNpemUub25pbnB1dCAgICAgICAgPSBvblNsaWRlckNoYW5nZTsgICAgICAgICBcbiAgICBpbnB1dE51bVNpZGVzLm9uaW5wdXQgICAgPSBvblNsaWRlckNoYW5nZTtcbiAgICBpbnB1dEFuZ2xlLm9uaW5wdXQgICAgICAgPSBvblNsaWRlckNoYW5nZTtcbiAgICBpbnB1dFBpbmNoRmFjdG9yLm9uaW5wdXQgPSBvblNsaWRlckNoYW5nZTtcbiAgICBpbnB1dERlcHRoLm9uaW5wdXQgICAgICAgPSBvblNsaWRlckNoYW5nZTtcblxuICAgIGFwcE1vZGVsID0ge1xuICAgICAgICBjb250ZXh0OiBjYW52YXNDb250ZXh0LFxuICAgICAgICBzaXplOiAxMDAsIFxuICAgICAgICBudW1iZXJPZlNpZGVzOiAxMCxcbiAgICAgICAgYW5nbGU6IDIwLFxuICAgICAgICBwaW5jaEZhY3RvcjogMC41LFxuICAgICAgICBkZXB0aDogNVxuICAgIH07XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgcmVzaXplQ2FudmFzLCBmYWxzZSk7XG4gICAgb25TbGlkZXJDaGFuZ2UoKTtcbiAgICByZXNpemVDYW52YXMoKTtcbiB9KSgpO1xuXG5cbiJdLCJzb3VyY2VSb290IjoiIn0=