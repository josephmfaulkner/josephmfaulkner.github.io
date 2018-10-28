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



export { getMidPoint, getVectorFromPoints, getVectorMagnitude, scaleVector, normalizeVector, getPointFromVector , getPointInCircle, getTranslatePoint, getPerpendicularVector };