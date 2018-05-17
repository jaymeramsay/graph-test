var canvas: HTMLCanvasElement;
var context: CanvasRenderingContext2D;

window.onload = () => {
  canvas = <HTMLCanvasElement>document.querySelector('canvas');
  context = canvas.getContext('2d');
}
