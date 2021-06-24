import sizeOf from "image-size";

function ratioImage(imagePath) {
  const dimensions = sizeOf(imagePath);
  const ratioImage = dimensions.width / dimensions.height;
  return ratioImage;
}

export default ratioImage;
