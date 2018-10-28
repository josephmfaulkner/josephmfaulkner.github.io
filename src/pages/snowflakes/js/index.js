import './../sass/main.scss';
import drawSnowFlake from './drawcurve';


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
    drawSnowFlake(model.context, model.size, model.numberOfSides, model.angle, model.pinchFactor, model.depth)
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



