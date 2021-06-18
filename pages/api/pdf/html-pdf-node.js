import html_to_pdf from "html-pdf-node";
import fs from "fs";

export default async (req, res) => {
  if (req.method === "POST") {
    const { content } = req.body;
    console.log(decodeURIComponent(content));
    genPdf(decodeURIComponent(content));
    res.json({ content: content });
  }
};

function genPdf(content) {
  let options = {
    format: "A4",
    preferCSSPageSize: true,
  };
  // Example of options with args //
  // let options = { format: 'A4', args: ['--no-sandbox', '--disable-setuid-sandbox'] };

  let file = { content: content };
  // or //
  // let file = { url: "https://example.com" };
  html_to_pdf.generatePdf(file, options).then((pdfBuffer) => {
    //console.log("PDF Buffer:-", pdfBuffer);
    writeFile(pdfBuffer);
  });
}

function writeFile(pdfBuffer) {
  fs.writeFile("test.pdf", pdfBuffer, "binary", function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("The file was saved!");
    }
  });
}
