import { ImageRun, Paragraph } from "docx";
import fs from "fs";
import path from "path";

const logoDirectory = path.join(
  process.cwd(),
  "public/images/pdf/t&k_logo.png"
);

const image = new ImageRun({
  data: fs.readFileSync(logoDirectory),
  transformation: {
    width: 88,
    height: 66,
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
