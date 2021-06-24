import { ImageRun, Paragraph, TextRun } from "docx";
import fs from "fs";
import path from "path";
import ratioImage from "../../../lib/ratio-image";

const signatureDirectory = path.join(
  process.cwd(),
  "public/images/pdf/signatures-doctor-signature.png"
);

// get ratio of image to assign to scale
const ratio = ratioImage(signatureDirectory);

const image = new Paragraph({
  children: [
    new ImageRun({
      data: fs.readFileSync(signatureDirectory),
      transformation: {
        width: 200,
        height: 200 / ratio,
      },
      //   floating: {
      //     horizontalPosition: {
      //       offset: 5760000,
      //     },
      //     verticalPosition: {
      //       offset: 914400,
      //     },
      //     // margins: {
      //     //   top: 914400,
      //     //   bottom: 201440,
      //     // },
      //   },
    }),
    createTextRun(`Doctor Strange`, 2),
    createTextRun(`T&K Operations Manager`, 1),
  ],
});

function createTextRun(textContent, breakNum) {
  return new TextRun({
    text: textContent,
    font: "Calibri",
    bold: true,
    size: 25,
    break: breakNum,
  });
}

export default image;
