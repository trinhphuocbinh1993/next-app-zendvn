import fs from "fs";
import path from "path";
import PDFDocument from "pdfkit";

export default async (req, res) => {
  if (req.method === "POST") {
    // Create a document
    const doc = new PDFDocument();

    // Embed a font, set the font size, and render some text
    doc.font("Helvetica");

    // Add an image, constrain it to a given size, and center it vertically and horizontally
    const logoDirectory = path.join(
      process.cwd(),
      "public/images/pdf/t&k_logo.png"
    );

    doc.image(logoDirectory, {
      fit: [100, 200],
      x: doc.page.width - 150,
      y: 50,
      align: "right",
      valign: "top",
    });

    doc.moveDown();
    doc.moveDown();
    doc.moveDown();
    doc.moveDown();
    doc.moveDown().fillColor("gray");
    let y = 140;
    doc
      .fontSize(10)
      .text(
        `T&K Home Improvements Ltd\n2-6 Huxley Close | Park Farm South\nWellingborough | Northants`,
        0,
        y,
        {
          width: 500,
          align: "right",
          valign: "top",
        }
      );
    doc
      .moveTo(506, 140) // set the current point
      .lineTo(506, 170)
      .stroke("gray");
    doc
      .fontSize(10)
      .text(`Contact\ninfo@tkhi.co.uk\n0800 622 716`, doc.page.width - 100, y, {
        valign: "top",
        width: 500,
      });
    // date
    doc.moveDown().fillColor("black").fontSize(12);

    doc.text(`Date: 18/06/2021`, 75, 250);
    // ref
    doc.moveDown();
    doc.text(`Our Contact Ref: 601413`);
    // to
    doc.moveDown();
    doc.text(`To: Mrs Rosie Flora`);
    doc.text(`33 Narborough Road South`);
    doc.text(`Leicester`);
    doc.text(`Leicestershire`);
    doc.text(`LE3 2HA`);
    // dear
    doc.moveDown();
    doc.text(`Dear Mrs Rosie Flora,`);
    // title
    doc.moveDown();
    doc.text(`-£2,500.00`);
    // content
    doc.moveDown();
    doc.text(
      `Thank you very much for choosing T&K for your home improvement and we trust you are now enjoying the benefits of our products.\n\nWe note that the above amount remains outstanding and it would be appreciated if you can contact the office and make this payment by debit or credit card as soon as possible in order to enable us to complete your guarantee documentation.`,
      {
        align: "justify",
      }
    );
    // end
    doc.moveDown();

    doc.text("Your sincerely.");
    // signature image
    const signatureDirectory = path.join(
      process.cwd(),
      "public/images/pdf/signatures-doctor-signature.png"
    );

    doc.image(signatureDirectory, {
      fit: [150, 300],
    });
    // signature text
    doc.moveDown();
    doc.font("Helvetica-Bold").text("Doctor Strange");
    doc.text("T&K Operations Manager");

    doc.pipe(res);

    // Finalize PDF file
    doc.end();
  }
};
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
