const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
const myForm = document.querySelector('form')

//creates grid on canvas
const gridSize = 5;
const canvasWidth = canvas.width;
const canvasHeight = canvas.height;
const numXLines = Math.floor(canvasHeight/gridSize)
const numYLines = Math.floor(canvasWidth/gridSize)
let dataPoints = [];

//draws x coordinate lines
const drawXLines = () => {
  for(let i = 0; i < numXLines; i++) {
    context.beginPath();
    context.lineWidth = 1;
    if(i == numXLines) {
      context.moveTo(0, gridSize*i);
      context.lineTo(canvasWidth, gridSize*i);
    }
    else {
      context.moveTo(0, gridSize*i+0.5);
      context.lineTo(canvasWidth, gridSize*i+0.5);
    }
    context.strokeStyle = "#e9e9e9";
    context.stroke();
  }
}

//draws y coordinate lines
const drawYLines = () => {
  for(let i = 0; i <= numYLines; i++) {
    context.beginPath();
    context.lineWidth = 1;

    if(i == numYLines) {
      context.moveTo(gridSize*i, 0);
      context.lineTo(gridSize*i, canvasHeight);
    }
    else {
      context.moveTo(gridSize*i+0.5, 0);
      context.lineTo(gridSize*i+0.5, canvasHeight);
    }
    context.strokeStyle = "#e9e9e9";
    context.stroke();
  }
}

//invokes drawing grid functions even after the canvas has been reset
drawXLines();
drawYLines();


const storesDataPoint = () => {
  let xVal = document.getElementById('x').value;
  let yVal = document.getElementById('y').value;
  dataPoints.push({x: xVal, y: yVal});
  if(xVal) {
    document.getElementById('x').value = '';
  }
  if(yVal) {
    document.getElementById('y').value = '';
  }
  console.log(dataPoints);
}


//takes that information and renders it onto a canvas
const rendersData = (ev) => {
  ev.preventDefault();
  //iterates over the data points
    for(let i = 0; i < dataPoints.length; i++) {
      console.log(dataPoints[i]);
      //starts the line
      context.beginPath()
      //marks the first data point
      context.moveTo(dataPoints[i].x, dataPoints[i].y)
      //draws line to next data point
      context.lineTo(dataPoints[i+1].x, dataPoints[i+1].y)
      context.strokeStyle = '#000000';
      context.stroke();
      //NOTE: write code that fixes the error Cannot read property 'x' of undefined. Write a conditional that acknowledges the end of the array and doesn't execute line 81 again.

    }
}

myForm.addEventListener('submit', rendersData)

const resetsDataPoints = () => {
  context.clearRect(0, 0, canvas.width, canvas.height);
  return dataPoints = [];
}
