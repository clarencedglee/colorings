const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const image = new Image();
image.crossOrigin = "Anonymous";
image.src = "src/ha.jpeg";
image.onload = function() {
  console.log("foo");
  render(this);
};

function render(image) {
  console.log("foo");
  ctx.drawImage(image, 0, 0);
  const width = 10; //image.width;
  const height = 10; //image.height;
  const x = ctx.getImageData(0, 0, width, height);
  // return x;
  // console.log(data.data.length);
  // const pixels = [];
  // for (let i = 0; i <= data.length; i += 4) {
  //   // console.log(data[i]);
  // }
}

// for (let l = 0; l <= 100; l++) {
//   for (let h = 0; h <= 360; h++) {
//     ctx.fillStyle = `hsl(${h}, 100%, ${l}%)`;
//     ctx.fillRect(h, l, h + 1, l + 1);
//   }
// }
