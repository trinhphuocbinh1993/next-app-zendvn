import PdfPrinter from "pdfmake";
import fs from "fs";

export default async (req, res) => {
  if (req.method === "POST") {
    const { content } = req.body;
    console.log(decodeURIComponent(content));
    pdfmake(decodeURIComponent(content));
    res.json({ content: content });
  }
};

function pdfmake(content) {
  // Define font files
  var fonts = {
    Roboto: {
      normal: "fonts/SourceSansPro-Regular.ttf",
      bold: "fonts/SourceSansPro-Bold.ttf",
      italics: "fonts/SourceSansPro-It.ttf",
      bolditalics: "fonts/SourceSansPro-BoldIt.ttf",
    },
  };
  var printer = new PdfPrinter(fonts);

  var docDefinition = {
    content: [content],
  };

  var options = {
    // ...
  };

  var pdfDoc = printer.createPdfKitDocument(docDefinition, options);
  pdfDoc.pipe(fs.createWriteStream("document.pdf"));
  pdfDoc.end();
}
