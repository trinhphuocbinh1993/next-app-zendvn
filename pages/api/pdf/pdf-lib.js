import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import Blob from "node-fetch";

export default async (req, res) => {
  if (req.method === "POST") {
    const { content } = req.body;
    console.log(decodeURIComponent(content));
    const pdf = await createPdf(decodeURIComponent(content));
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", "attachment; filename=name.Pdf");
    //res.setHeader("Content-Length", pdf.length);
    return res.send(pdf);
  }
};

async function createPdf(content) {
  const pdfDoc = await PDFDocument.create();
  const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman);

  const page = pdfDoc.addPage();
  const { width, height } = page.getSize();
  const fontSize = 20;
  page.drawText(content, {
    x: 50,
    y: height - 4 * fontSize,
    size: fontSize,
    font: timesRomanFont,
    color: rgb(0, 0.53, 0.71),
  });

  const pdfBytes = await pdfDoc.save();
  let pdfBuffer = Buffer.from(pdfBytes.buffer, "binary");
  return pdfBuffer;
}
// function saveByteArray(reportName, byte) {
//   var blob = new Blob([byte], { type: "application/pdf" });
//   var link = document.createElement("a");
//   link.href = window.URL.createObjectURL(blob);
//   var fileName = reportName;
//   link.download = fileName;
//   link.click();
//   document.body.removeChild(link);

//   // Recommended: revoke the object URL after some time to free up resources.
//   // There is no way to know when the download is complete.
//   setTimeout(function () {
//     window.URL.revokeObjectURL(url);
//   }, 60000);
// }
