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


let getKochCurveSubPoints = function(point1, point2, angle)
{
    let midPoint   = getMidPoint(point1,point2);
    let midPoint1  = getMidPoint(point1,midPoint);
    let midPoint2  = getMidPoint(midPoint,point2);

    let perpendicularPoint = getPerpendicularPoint(point1, point2, angle); 

    return { 
        midPoint1: midPoint1,
        perpendicularPoint: perpendicularPoint,
        midPoint2: midPoint2
    };

}

let drawCurveRecursive = function(context, point1, point2, angle, depth)
{
    if(depth <= 0)
    {
        drawLine(context,point1,point2);
        return; 
    }
    
    let subpoints = getKochCurveSubPoints(point1,point2,angle);

    drawCurveRecursive(context, point1                      , subpoints.midPoint1         , angle, depth - 1);
    drawCurveRecursive(context, subpoints.midPoint1         , subpoints.perpendicularPoint, angle, depth - 1);
    drawCurveRecursive(context, subpoints.perpendicularPoint, subpoints.midPoint2         , angle, depth - 1);
    drawCurveRecursive(context, subpoints.midPoint2         , point2                      , angle, depth - 1);

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
        drawCurveRecursive(context, getTranslatePoint(prevPoint,centerX,centerY), getTranslatePoint(nextPoint,centerX,centerY), angle, depth);
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

var canvas = document.getElementById("mainView");
var canvasContext = canvas.getContext("2d");

var inputSize        = document.getElementById("inputSize");
var inputNumSides    = document.getElementById("inputNumSides");
var inputAngle       = document.getElementById("inputAngle");
var inputPinchFactor = document.getElementById("inputPinchFactor");
var inputDepth       = document.getElementById("inputDepth");

let appModel = {
    context: canvasContext,
    size: 100, 
    numberOfSides: 10,
    angle: 20,
    pinchFactor: 0.5,
    depth: 5
};

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

inputSize.oninput        = onSliderChange;         
inputNumSides.oninput    = onSliderChange;
inputAngle.oninput       = onSliderChange;
inputPinchFactor.oninput = onSliderChange;
inputDepth.oninput       = onSliderChange;

onSliderChange(); 

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

window.addEventListener('resize', resizeCanvas, false);
resizeCanvas();





/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL3Nub3dmbGFrZXMvc2Fzcy9tYWluLnNjc3M/Yzk0OCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvc25vd2ZsYWtlcy9qcy9jYW52YXNVdGlsLmpzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9zbm93Zmxha2VzL2pzL21hdGhVdGlsLmpzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9zbm93Zmxha2VzL2pzL2RyYXdjdXJ2ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvc25vd2ZsYWtlcy9qcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7OztBQ2xGQSx1Qzs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxXO0FBQ1o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHFDOztBQUVBLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0EsbUQ7QUFDQSxtRDs7QUFFQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTtBQUNBLDhCO0FBQ0EsOEI7O0FBRUEsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQSxzQjtBQUNBOztBQUVBLGtCO0FBQ0E7O0FBRUEsK0NBQStDLGFBQWE7O0FBRTVELCtCO0FBQ0E7Ozs7OztBQ3pFeUM7QUFDRjs7O0FBR3ZDO0FBQ0E7QUFDQSxxQkFBcUIsV0FBb0I7O0FBRXpDLDZCQUE2QixtQkFBNEI7QUFDekQsa0NBQWtDLGtCQUEyQixxQjs7QUFFN0Q7QUFDQSw4QkFBOEIsc0JBQStCO0FBQzdELDBCQUEwQixXQUFvQjs7QUFFOUMsNkJBQTZCLGtCQUEyQiwrQjs7QUFFeEQsOEI7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLHFCQUFxQixXQUFvQjtBQUN6QyxxQkFBcUIsV0FBb0I7QUFDekMscUJBQXFCLFdBQW9COztBQUV6QywwRTs7QUFFQSxZO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLFFBQWU7QUFDdkIsZTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsMkM7O0FBRUEsb0JBQW9CLGdCQUF5Qjs7QUFFN0Msa0JBQWtCLG9CQUFvQjtBQUN0QztBQUNBO0FBQ0Esd0JBQXdCLGdCQUF5QjtBQUNqRCxvQ0FBb0MsaUJBQTBCLDZCQUE2QixpQkFBMEI7QUFDckgsOEI7QUFDQTs7QUFFQTs7QUFFQSxrQkFBa0I7QUFDbEIsa0JBQWtCO0FBQ2xCLGtCQUFrQjs7QUFFbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZSwyREFBYSxFOztBQ3RGQztBQUNXOzs7QUFHeEM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUksU0FBYTtBQUNqQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzRDtBQUNBO0FBQ0Esc0Q7O0FBRUE7QUFDQTs7QUFFQSwwQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCOztBQUVBO0FBQ0E7QUFDQSwwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNFOztBQUVBO0FBQ0Esc0M7QUFDQSw2QjtBQUNBOztBQUVBO0FBQ0EiLCJmaWxlIjoicGFnZXMvc25vd2ZsYWtlcy82NDQ5MzY1YWIxNWY4ODdkMDVmOS5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNyk7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJsZXQgZHJhd0xpbmU9IGZ1bmN0aW9uKGNvbnRleHQsIHBvaW50MSwgcG9pbnQyKVxue1xuICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgY29udGV4dC5tb3ZlVG8ocG9pbnQxLngsIHBvaW50MS55KTtcbiAgICBjb250ZXh0LmxpbmVUbyhwb2ludDIueCwgcG9pbnQyLnkpO1xuICAgIGNvbnRleHQuc3Ryb2tlKCk7XG59XG5cbmV4cG9ydCB7IGRyYXdMaW5lIH0gOyIsImxldCBnZXRNaWRQb2ludCA9IGZ1bmN0aW9uKHBvaW50MSwgcG9pbnQyKVxue1xuICAgIGxldCBuWCA9IChwb2ludDEueCArIHBvaW50Mi54KS8yO1xuICAgIGxldCBuWSA9IChwb2ludDEueSArIHBvaW50Mi55KS8yO1xuICAgIHJldHVybiB7eDpuWCx5Om5ZfTsgXG59XG5cbmxldCBnZXRWZWN0b3JGcm9tUG9pbnRzID0gZnVuY3Rpb24ocG9pbnQxLHBvaW50MilcbntcbiAgICBsZXQgdlggPSBwb2ludDIueCAtIHBvaW50MS54O1xuICAgIGxldCB2WSA9IHBvaW50Mi55IC0gcG9pbnQxLnk7XG4gICAgcmV0dXJuIHsgeDogdlgsIHk6IHZZIH07XG59XG5cbmxldCBnZXRWZWN0b3JNYWduaXR1ZGUgPSBmdW5jdGlvbih2ZWN0b3IpXG57XG4gICAgbGV0IHgyID0gKHZlY3Rvci54ICogdmVjdG9yLngpO1xuICAgIGxldCB5MiA9ICh2ZWN0b3IueSAqIHZlY3Rvci55KTtcbiAgICBsZXQgaHlwb3RlbnVzZSA9IChNYXRoLnNxcnQoeDIgKyB5MikpO1xuICAgIHJldHVybiBoeXBvdGVudXNlOyBcbn1cblxubGV0IHNjYWxlVmVjdG9yID0gZnVuY3Rpb24odmVjdG9yLHNjYWxlKVxue1xuICAgIGxldCBuZXdYID0gdmVjdG9yLnggKiBzY2FsZTtcbiAgICBsZXQgbmV3WSA9IHZlY3Rvci55ICogc2NhbGU7XG4gICAgbGV0IG5ld1ZlY3RvciA9IHsgeDogbmV3WCwgeTogbmV3WSB9O1xuICAgIHJldHVybiBuZXdWZWN0b3I7XG59XG5cbmxldCBub3JtYWxpemVWZWN0b3IgPSBmdW5jdGlvbih2ZWN0b3IpXG57XG4gICAgbGV0IHZlY3Rvck1hZ25pdHVkZSA9IGdldFZlY3Rvck1hZ25pdHVkZSh2ZWN0b3IpO1xuICAgIGxldCBzY2FsZUZhY3RvciA9ICgxL3ZlY3Rvck1hZ25pdHVkZSk7XG5cbiAgICByZXR1cm4gc2NhbGVWZWN0b3IodmVjdG9yLHNjYWxlRmFjdG9yKTtcbn1cblxubGV0IGdldFBvaW50RnJvbVZlY3RvciA9IGZ1bmN0aW9uKHN0YXJ0UG9pbnQsIHZlY3RvcilcbntcbiAgICBsZXQgcFggPSBzdGFydFBvaW50LnggLSB2ZWN0b3IueDtcbiAgICBsZXQgcFkgPSBzdGFydFBvaW50LnkgLSB2ZWN0b3IueTsgXG5cbiAgICByZXR1cm4ge3g6IHBYLCB5OiBwWX07XG59XG5cbmxldCBnZXRQb2ludEluQ2lyY2xlID0gZnVuY3Rpb24odGhldGEsc2NhbGUpXG57XG4gICAgbGV0IHBYID0gTWF0aC5jb3ModGhldGEgKiBNYXRoLlBJLzE4MCkgKiBzY2FsZTsgXG4gICAgbGV0IHBZID0gTWF0aC5zaW4odGhldGEgKiBNYXRoLlBJLzE4MCkgKiBzY2FsZTsgXG5cbiAgICByZXR1cm4ge3g6IHBYICwgeTogcFkgfTtcbn1cblxubGV0IGdldFRyYW5zbGF0ZVBvaW50ID0gZnVuY3Rpb24ocG9pbnQsIHRyYW5zWCwgdHJhbnNZKVxue1xuICAgIGxldCBwWCA9IHBvaW50LnggKyB0cmFuc1g7IFxuICAgIGxldCBwWSA9IHBvaW50LnkgKyB0cmFuc1k7IFxuXG4gICAgcmV0dXJuIHt4OiBwWCAsIHk6IHBZIH07XG59XG5cbmxldCBnZXRQZXJwZW5kaWN1bGFyVmVjdG9yID0gZnVuY3Rpb24odmVjdG9yKVxue1xuICAgIGxldCB4MSA9IHZlY3Rvci54OyBcbiAgICBsZXQgeTEgPSB2ZWN0b3IueTtcbiAgIFxuICAgIGxldCB4MiA9ICAgeTE7IFxuICAgIGxldCB5MiA9ICgteDEpO1xuXG4gICAgbGV0IHBlcnBlbmRpY3VsYXJWZWN0b3IgPSBub3JtYWxpemVWZWN0b3Ioe3g6IHgyLCB5OiB5Mn0pO1xuXG4gICAgcmV0dXJuIHBlcnBlbmRpY3VsYXJWZWN0b3I7ICAgXG59XG5cblxuXG5leHBvcnQgeyBnZXRNaWRQb2ludCwgZ2V0VmVjdG9yRnJvbVBvaW50cywgZ2V0VmVjdG9yTWFnbml0dWRlLCBzY2FsZVZlY3Rvciwgbm9ybWFsaXplVmVjdG9yLCBnZXRQb2ludEZyb21WZWN0b3IgLCBnZXRQb2ludEluQ2lyY2xlLCBnZXRUcmFuc2xhdGVQb2ludCwgZ2V0UGVycGVuZGljdWxhclZlY3RvciB9OyIsImltcG9ydCAqIGFzIENhbnZhcyBmcm9tICAgJy4vY2FudmFzVXRpbCc7XG5pbXBvcnQgKiBhcyBNYXRoVXRpbCBmcm9tICcuL21hdGhVdGlsJztcblxuXG5sZXQgZ2V0UGVycGVuZGljdWxhclBvaW50ID0gZnVuY3Rpb24ocG9pbnQxLHBvaW50MixhbmdsZSlcbntcbiAgICBsZXQgbWlkUG9pbnQgICA9IE1hdGhVdGlsLmdldE1pZFBvaW50KHBvaW50MSxwb2ludDIpO1xuXG4gICAgbGV0IG1pZFBvaW50TGluZVZlY3RvciA9IE1hdGhVdGlsLmdldFZlY3RvckZyb21Qb2ludHMocG9pbnQxLG1pZFBvaW50KTtcbiAgICBsZXQgbWlkUG9pbnRWZWN0b3JNYWduaXR1ZGUgPSBNYXRoVXRpbC5nZXRWZWN0b3JNYWduaXR1ZGUobWlkUG9pbnRMaW5lVmVjdG9yKTsgIFxuICAgIFxuICAgIGxldCBwZXJwZW5kaWN1bGFyTWFnbml0dWRlID0gbWlkUG9pbnRWZWN0b3JNYWduaXR1ZGUgKiBNYXRoLnRhbihhbmdsZSAqIE1hdGguUEkvMTgwKTtcbiAgICBsZXQgcGVycGVuZGljdWxhclZlY3RvciA9IE1hdGhVdGlsLmdldFBlcnBlbmRpY3VsYXJWZWN0b3IobWlkUG9pbnRMaW5lVmVjdG9yKTtcbiAgICBwZXJwZW5kaWN1bGFyVmVjdG9yID0gTWF0aFV0aWwuc2NhbGVWZWN0b3IocGVycGVuZGljdWxhclZlY3RvcixwZXJwZW5kaWN1bGFyTWFnbml0dWRlKTtcblxuICAgIGxldCBwZXJwZW5kaWN1bGFyUG9pbnQgPSBNYXRoVXRpbC5nZXRQb2ludEZyb21WZWN0b3IobWlkUG9pbnQscGVycGVuZGljdWxhclZlY3Rvcik7IFxuXG4gICAgcmV0dXJuIHBlcnBlbmRpY3VsYXJQb2ludDsgXG59XG5cblxubGV0IGdldEtvY2hDdXJ2ZVN1YlBvaW50cyA9IGZ1bmN0aW9uKHBvaW50MSwgcG9pbnQyLCBhbmdsZSlcbntcbiAgICBsZXQgbWlkUG9pbnQgICA9IE1hdGhVdGlsLmdldE1pZFBvaW50KHBvaW50MSxwb2ludDIpO1xuICAgIGxldCBtaWRQb2ludDEgID0gTWF0aFV0aWwuZ2V0TWlkUG9pbnQocG9pbnQxLG1pZFBvaW50KTtcbiAgICBsZXQgbWlkUG9pbnQyICA9IE1hdGhVdGlsLmdldE1pZFBvaW50KG1pZFBvaW50LHBvaW50Mik7XG5cbiAgICBsZXQgcGVycGVuZGljdWxhclBvaW50ID0gZ2V0UGVycGVuZGljdWxhclBvaW50KHBvaW50MSwgcG9pbnQyLCBhbmdsZSk7IFxuXG4gICAgcmV0dXJuIHsgXG4gICAgICAgIG1pZFBvaW50MTogbWlkUG9pbnQxLFxuICAgICAgICBwZXJwZW5kaWN1bGFyUG9pbnQ6IHBlcnBlbmRpY3VsYXJQb2ludCxcbiAgICAgICAgbWlkUG9pbnQyOiBtaWRQb2ludDJcbiAgICB9O1xuXG59XG5cbmxldCBkcmF3Q3VydmVSZWN1cnNpdmUgPSBmdW5jdGlvbihjb250ZXh0LCBwb2ludDEsIHBvaW50MiwgYW5nbGUsIGRlcHRoKVxue1xuICAgIGlmKGRlcHRoIDw9IDApXG4gICAge1xuICAgICAgICBDYW52YXMuZHJhd0xpbmUoY29udGV4dCxwb2ludDEscG9pbnQyKTtcbiAgICAgICAgcmV0dXJuOyBcbiAgICB9XG4gICAgXG4gICAgbGV0IHN1YnBvaW50cyA9IGdldEtvY2hDdXJ2ZVN1YlBvaW50cyhwb2ludDEscG9pbnQyLGFuZ2xlKTtcblxuICAgIGRyYXdDdXJ2ZVJlY3Vyc2l2ZShjb250ZXh0LCBwb2ludDEgICAgICAgICAgICAgICAgICAgICAgLCBzdWJwb2ludHMubWlkUG9pbnQxICAgICAgICAgLCBhbmdsZSwgZGVwdGggLSAxKTtcbiAgICBkcmF3Q3VydmVSZWN1cnNpdmUoY29udGV4dCwgc3VicG9pbnRzLm1pZFBvaW50MSAgICAgICAgICwgc3VicG9pbnRzLnBlcnBlbmRpY3VsYXJQb2ludCwgYW5nbGUsIGRlcHRoIC0gMSk7XG4gICAgZHJhd0N1cnZlUmVjdXJzaXZlKGNvbnRleHQsIHN1YnBvaW50cy5wZXJwZW5kaWN1bGFyUG9pbnQsIHN1YnBvaW50cy5taWRQb2ludDIgICAgICAgICAsIGFuZ2xlLCBkZXB0aCAtIDEpO1xuICAgIGRyYXdDdXJ2ZVJlY3Vyc2l2ZShjb250ZXh0LCBzdWJwb2ludHMubWlkUG9pbnQyICAgICAgICAgLCBwb2ludDIgICAgICAgICAgICAgICAgICAgICAgLCBhbmdsZSwgZGVwdGggLSAxKTtcblxufVxuXG5sZXQgZHJhd1Nub3dGbGFrZSA9IGZ1bmN0aW9uKGNvbnRleHQsIHNpemUsIG51bWJlck9mU2lkZXMsYW5nbGUscGluY2hGYWN0b3IsZGVwdGgpXG57XG4gICAgdmFyIGNlbnRlclggID0gY29udGV4dC5jYW52YXMuY2xpZW50V2lkdGggIC8gMjtcbiAgICB2YXIgY2VudGVyWSAgPSBjb250ZXh0LmNhbnZhcy5jbGllbnRIZWlnaHQgLyAyO1xuXG4gICAgY29udGV4dC5jbGVhclJlY3QoMCwgMCwgY2VudGVyWCAqIDIsIGNlbnRlclkgKiAyKTtcblxuICAgIGxldCB0aGV0YSAgICAgID0gMDtcbiAgICBsZXQgdGhldGFEZWx0YSA9ICgzNjAgLyBudW1iZXJPZlNpZGVzKTsgXG5cbiAgICBsZXQgcHJldlBvaW50ID0gTWF0aFV0aWwuZ2V0UG9pbnRJbkNpcmNsZSh0aGV0YSxzaXplKTtcblxuICAgIGZvcihsZXQgaSA9IDE7IGkgPD0gbnVtYmVyT2ZTaWRlczsgaSsrKVxuICAgIHtcbiAgICAgICAgdGhldGEgPSAodGhldGFEZWx0YSAqIGkpO1xuICAgICAgICBsZXQgbmV4dFBvaW50ID0gTWF0aFV0aWwuZ2V0UG9pbnRJbkNpcmNsZSh0aGV0YSxzaXplKTtcbiAgICAgICAgZHJhd0N1cnZlUmVjdXJzaXZlKGNvbnRleHQsIE1hdGhVdGlsLmdldFRyYW5zbGF0ZVBvaW50KHByZXZQb2ludCxjZW50ZXJYLGNlbnRlclkpLCBNYXRoVXRpbC5nZXRUcmFuc2xhdGVQb2ludChuZXh0UG9pbnQsY2VudGVyWCxjZW50ZXJZKSwgYW5nbGUsIGRlcHRoKTtcbiAgICAgICAgcHJldlBvaW50ID0gbmV4dFBvaW50OyBcbiAgICB9XG4gICAgXG4vKlxuICAgIFxuICAgIGxldCBwb2ludDEgPSB7eDogMTI1LCB5OiAzNzV9O1xuICAgIGxldCBwb2ludDIgPSB7eDogMzc1LCB5OiAzNzV9O1xuICAgIGxldCBwb2ludDMgPSB7eDogMjU1LCB5OiAxMjV9O1xuXG4gICAgZHJhd0N1cnZlUmVjdXJzaXZlKGNvbnRleHQsIHBvaW50MSwgcG9pbnQyLCBhbmdsZSwgZGVwdGgpO1xuICAgIGRyYXdDdXJ2ZVJlY3Vyc2l2ZShjb250ZXh0LCBwb2ludDIsIHBvaW50MywgYW5nbGUsIGRlcHRoKTtcbiAgICBkcmF3Q3VydmVSZWN1cnNpdmUoY29udGV4dCwgcG9pbnQzLCBwb2ludDEsIGFuZ2xlLCBkZXB0aCk7XG4qL1xufVxuXG5leHBvcnQgZGVmYXVsdCBkcmF3U25vd0ZsYWtlOyAiLCJpbXBvcnQgJy4vLi4vc2Fzcy9tYWluLnNjc3MnO1xuaW1wb3J0IGRyYXdTbm93Rmxha2UgZnJvbSAnLi9kcmF3Y3VydmUnO1xuXG5cbmNvbnNvbGUubG9nKFwiSGVsbG8gZnJvbSB0aGUgY29uc29sZVwiKTtcblxudmFyIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblZpZXdcIik7XG52YXIgY2FudmFzQ29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5cbnZhciBpbnB1dFNpemUgICAgICAgID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dFNpemVcIik7XG52YXIgaW5wdXROdW1TaWRlcyAgICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXROdW1TaWRlc1wiKTtcbnZhciBpbnB1dEFuZ2xlICAgICAgID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dEFuZ2xlXCIpO1xudmFyIGlucHV0UGluY2hGYWN0b3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0UGluY2hGYWN0b3JcIik7XG52YXIgaW5wdXREZXB0aCAgICAgICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXREZXB0aFwiKTtcblxubGV0IGFwcE1vZGVsID0ge1xuICAgIGNvbnRleHQ6IGNhbnZhc0NvbnRleHQsXG4gICAgc2l6ZTogMTAwLCBcbiAgICBudW1iZXJPZlNpZGVzOiAxMCxcbiAgICBhbmdsZTogMjAsXG4gICAgcGluY2hGYWN0b3I6IDAuNSxcbiAgICBkZXB0aDogNVxufTtcblxubGV0IHVwZGF0ZVZpZXcgPSBmdW5jdGlvbihtb2RlbClcbntcbiAgICBkcmF3U25vd0ZsYWtlKG1vZGVsLmNvbnRleHQsIG1vZGVsLnNpemUsIG1vZGVsLm51bWJlck9mU2lkZXMsIG1vZGVsLmFuZ2xlLCBtb2RlbC5waW5jaEZhY3RvciwgbW9kZWwuZGVwdGgpXG59XG4gICAgXG5sZXQgb25TbGlkZXJDaGFuZ2UgPSBmdW5jdGlvbigpe1xuICAgIGFwcE1vZGVsLnNpemUgICAgICAgICAgPSBOdW1iZXIoaW5wdXRTaXplLnZhbHVlKTtcbiAgICBhcHBNb2RlbC5udW1iZXJPZlNpZGVzID0gTnVtYmVyKGlucHV0TnVtU2lkZXMudmFsdWUpO1xuICAgIGFwcE1vZGVsLmFuZ2xlICAgICAgICAgPSBOdW1iZXIoaW5wdXRBbmdsZS52YWx1ZSk7IFxuICAgIGFwcE1vZGVsLnBpbmNoRmFjdG9yICAgPSBOdW1iZXIoaW5wdXRQaW5jaEZhY3Rvci52YWx1ZSkgLyAxMDAuMDA7XG4gICAgYXBwTW9kZWwuZGVwdGggICAgICAgICA9IE51bWJlcihpbnB1dERlcHRoLnZhbHVlKTsgXG5cbiAgICB1cGRhdGVWaWV3KGFwcE1vZGVsKTtcbn1cblxuaW5wdXRTaXplLm9uaW5wdXQgICAgICAgID0gb25TbGlkZXJDaGFuZ2U7ICAgICAgICAgXG5pbnB1dE51bVNpZGVzLm9uaW5wdXQgICAgPSBvblNsaWRlckNoYW5nZTtcbmlucHV0QW5nbGUub25pbnB1dCAgICAgICA9IG9uU2xpZGVyQ2hhbmdlO1xuaW5wdXRQaW5jaEZhY3Rvci5vbmlucHV0ID0gb25TbGlkZXJDaGFuZ2U7XG5pbnB1dERlcHRoLm9uaW5wdXQgICAgICAgPSBvblNsaWRlckNoYW5nZTtcblxub25TbGlkZXJDaGFuZ2UoKTsgXG5cbmZ1bmN0aW9uIHJlc2l6ZUNhbnZhcygpIHtcbiAgICAgICAgbGV0IGNvbnRyb2xzQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250cm9sc0NvbnRhaW5lclwiKTtcbiAgICAgICAgbGV0IGNvbnRyb2xzV2lkdGggPSBjb250cm9sc0NvbnRhaW5lci5vZmZzZXRXaWR0aDsgXG4gICAgICAgIGxldCBjb250cm9sc1BhZGRpbmcgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShjb250cm9sc0NvbnRhaW5lciwgbnVsbCkuZ2V0UHJvcGVydHlWYWx1ZSgncGFkZGluZy1sZWZ0Jyk7XG4gICAgICAgIGNvbnRyb2xzUGFkZGluZyA9IGNvbnRyb2xzUGFkZGluZy5yZXBsYWNlKC9bXlxcZC4tXS9nLCAnJyk7XG4gICAgICAgIGNvbnRyb2xzUGFkZGluZyA9IHBhcnNlRmxvYXQoY29udHJvbHNQYWRkaW5nKTtcbiAgICAgICAgbGV0IG5ld0NhbnZhc1dpZHRoID0gY29udHJvbHNXaWR0aCAtIChjb250cm9sc1BhZGRpbmcgKiAyLjA1KTsgXG5cbiAgICAgICAgY29uc29sZS5sb2coJ3Jlc2l6ZScsY29udHJvbHNXaWR0aCxjb250cm9sc1BhZGRpbmcsbmV3Q2FudmFzV2lkdGgpO1xuICAgICAgICBjYW52YXMud2lkdGggPSBuZXdDYW52YXNXaWR0aDsgXG4gICAgICAgIHVwZGF0ZVZpZXcoYXBwTW9kZWwpOyBcbn1cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHJlc2l6ZUNhbnZhcywgZmFsc2UpO1xucmVzaXplQ2FudmFzKCk7XG5cblxuXG4iXSwic291cmNlUm9vdCI6IiJ9