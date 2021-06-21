import { PDFDocument, StandardFonts, rgb, TextAlignment } from "pdf-lib";
import fs from "fs";
import path from "path";
//import saa from "../../../public/images/pdf/";
export default async (req, res) => {
  if (req.method === "POST") {
    // const { content } = req.body;
    // console.log(decodeURIComponent(content));

    const pdf = await createPdf();
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", "attachment; filename=name.Pdf");
    res.setHeader("Content-Length", pdf.length);
    return res.send(pdf);
  }
};

async function createPdf() {
  try {
    const pdfDoc = await PDFDocument.create();
    const alignRight = await TextAlignment.Right;

    const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman);
    const HelveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);

    const page = pdfDoc.addPage();
    const { width, height } = page.getSize();
    const fontSize = 35;

    // embed image
    const logoDirectory = path.join(
      process.cwd(),
      "public/images/pdf/t&k_logo.png"
    );
    const uint8Array = fs.readFileSync(logoDirectory);
    const pngImage = await pdfDoc.embedPng(uint8Array);
    const pngDims = pngImage.scale(0.5);

    page.drawImage(pngImage, {
      x: page.getWidth() - 130,
      y: page.getHeight() - 100,
      width: pngDims.width,
      height: pngDims.height,
    });
    //test
    //test
    const pdfBytes = await pdfDoc.save();
    let pdfBuffer = Buffer.from(pdfBytes.buffer, "binary");
    return pdfBuffer;
  } catch (error) {
    console.error(error.message);
  }
}

// [
//   {
//     "company": "T&K Home Improvements Ltd",
//     "comAddress": "2-6 Huxley Close | Park Farm South",
//     "comCity": "Wellingborough",
//     "comCounty": "Northants",
//     "comPostCode": "NN 86AB",
//     "comEmail": "info@tkhi.co.uk",
//     "comPhone": "0800 622 716",
//     "date": "2021-06-18",
//     "conRef": "601413",
//     "name": "Mrs Rosie Flora",
//     "address": "33 Narborough Road South",
//     "city": "Leicester",
//     "county": "Leicestershire",
//     "postcode": "LE3 2HA",
//     "title": "-£2,500.00",
//     "content": "Thank you very much for choosing T&K for your home improvement and we trust you arenow enjoying the benefits of our products. We note that the above amount remains outstanding and it would be appreciated if you can contact the office and make this payment by debit or credit card as soon as possible in order to enable us to complete your guarantee documentation."
//   }
// ]
