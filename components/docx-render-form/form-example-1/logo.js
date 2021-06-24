import { ImageRun } from "docx";
import fs from "fs";
import path from "path";
import ratioImage from "../../../lib/ratio-image";

const logoDirectory = path.join(
  process.cwd(),
  "public/images/pdf/t&k_logo.png"
);
// get ratio of image to assign to scale
const ratio = ratioImage(logoDirectory);

const image = new ImageRun({
  data: fs.readFileSync(logoDirectory),
  transformation: {
    width: 100,
    height: 100 / ratio,
  },
  floating: {
    horizontalPosition: {
      offset: 5760000,
    },
    verticalPosition: {
      offset: 914400,
    },
    // margins: {
    //   top: 914400,
    //   bottom: 201440,
    // },
  },
});

export default image;
