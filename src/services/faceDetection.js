module.exports = (img) => {
  const classifier = new cv.CascadeClassifier(cv.HAAR_FRONTALFACE_ALT2);

  const detection = classifier.detectMultiScale(img.bgrToGray());

  if (!detection.objects.length) {
    // no faces detectd
    return img;
  }

  // draw faces
  const facesImg = img.copy();
  detection.objects.forEach((rect, i) => {
    const blue = new cv.Vec(255, 0, 0);
    facesImg.drawRectangle(
      new cv.Point(rect.x, rect.y),
      new cv.Point(rect.x + rect.width, rect.y + rect.height),
      { color: blue, thickness: 2 }
    );
  });
  return facesImg;
};
