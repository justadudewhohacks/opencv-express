var maxDim = 500;

function getImageDisplayScale(img) {
  var w = img.width;
  var h = img.height;

  var scale = 1.0;
  if (w > h) {
    scale = maxDim / w;
  } else {
    scale = maxDim / h;
  }

  if (scale < 1.0) {
    w = w * scale;
    h = h * scale;
  }
  return ({ width: w, height: h });
}

function displayImage(imageId, imageData) {
  var imgEl = document.getElementById(imageId);

  // rescale displayed image if it is too large
  var img = new Image();
  img.onload = function(e) {
    var img = e.target;
    var scaledDims = getImageDisplayScale(img);
    imgEl.src = imageData;
    imgEl.width = scaledDims.width;
    imgEl.height = scaledDims.height;
  };
  img.src = imageData;
}