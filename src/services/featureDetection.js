const detectKeyPoints = (img, detector) => {
  const keyPoints = detector.detect(img);
  const drawKeyPointsImg = cv.drawKeyPoints(img, keyPoints);
  return drawKeyPointsImg;
};

exports.detectKeyPointsORB = img => detectKeyPoints(img, new cv.ORBDetector());
exports.detectKeyPointsSURF = img => detectKeyPoints(img, new cv.SURFDetector());
exports.detectKeyPointsSIFT = img => detectKeyPoints(img, new cv.SIFTDetector());