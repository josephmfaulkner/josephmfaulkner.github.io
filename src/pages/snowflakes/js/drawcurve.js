import * as Canvas from   './canvasUtil';
import * as MathUtil from './mathUtil';


let getPerpendicularPoint = function(point1,point2,angle)
{
    let midPoint   = MathUtil.getMidPoint(point1,point2);

    let midPointLineVector = MathUtil.getVectorFromPoints(point1,midPoint);
    let midPointVectorMagnitude = MathUtil.getVectorMagnitude(midPointLineVector);  
    
    let perpendicularMagnitude = midPointVectorMagnitude * Math.tan(angle * Math.PI/180);
    let perpendicularVector = MathUtil.getPerpendicularVector(midPointLineVector);
    perpendicularVector = MathUtil.scaleVector(perpendicularVector,perpendicularMagnitude);

    let perpendicularPoint = MathUtil.getPointFromVector(midPoint,perpendicularVector); 

    return perpendicularPoint; 
}


let getKochCurveSubPoints = function(point1, point2, angle, pinchFactor)
{
    let midPoint   = MathUtil.getMidPoint(point1,point2);
    let midPoint1  = MathUtil.getMidPointPercentage(point1,midPoint,pinchFactor);
    let midPoint2  = MathUtil.getMidPointPercentage(point2,midPoint,pinchFactor);

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
        Canvas.drawLine(context,point1,point2);
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

    let prevPoint = MathUtil.getPointInCircle(theta,size);

    for(let i = 1; i <= numberOfSides; i++)
    {
        theta = (thetaDelta * i);
        let nextPoint = MathUtil.getPointInCircle(theta,size);
        drawCurveRecursive(context, MathUtil.getTranslatePoint(prevPoint,centerX,centerY), MathUtil.getTranslatePoint(nextPoint,centerX,centerY), angle, pinchFactor, depth);
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

export default drawSnowFlake; 