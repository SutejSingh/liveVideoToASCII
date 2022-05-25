
let video;
let asciiDiv;

function setup() {
  noCanvas();
  video = createCapture(VIDEO);
  let width = $('#widthRange').val();
  let height = width * 0.5625;
  video.size(width, height);
  asciiDiv = createDiv();

}

function draw() {
  let width = $('#widthRange').val();
  let height = width * 0.5625;
  video.size(width, height);

  asciiDiv.parent('videoOut');
  video.loadPixels();
  let asciiImage = "";
  for (let j = 0; j < video.height; j++) {
    for (let i = 0; i < video.width; i++) {
      const pixelIndex = (i + j * video.width) * 4;
      const r = video.pixels[pixelIndex + 0];
      const g = video.pixels[pixelIndex + 1];
      const b = video.pixels[pixelIndex + 2];
      const avg = (r + g + b) / 3;
      const len = density.length;
      const charIndex = floor(map(avg, 0, 255, 0, len));
      const c = density.charAt(charIndex);
      // color(r, g ,b, 0);
      if (c == " ") asciiImage += "&nbsp;";
      else asciiImage += c;
    }
    asciiImage += '<br/>';
  }
  asciiDiv.html(asciiImage);
}
