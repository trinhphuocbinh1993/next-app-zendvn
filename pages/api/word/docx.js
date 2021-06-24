import { Document, Packer, Paragraph } from "docx";

// form-example-1
import Logo from "../../../components/docx-render-form/form-example-1/logo";
import TextUnderLogo from "../../../components/docx-render-form/form-example-1/text-under-logo";
import MainContent from "../../../components/docx-render-form/form-example-1/main-content";

export default async (req, res) => {
  if (req.method === "GET") {
    let doc = new Document({
      sections: [
        {
          children: [
            // logo
            new Paragraph({
              children: [Logo],
            }),
            // enter
            new Paragraph(""),
            new Paragraph(""),
            new Paragraph(""),
            new Paragraph(""),
            // text under logo
            TextUnderLogo,
            // enter
            new Paragraph(""),
            new Paragraph(""),
            // main content
            MainContent,
          ],
        },
      ],
    });

    // const docBytes = await Packer.toBuffer(doc);
    // let docBuffer = Buffer.from(docBytes.buffer, "binary");
    // return res.send(docBuffer);

    // or
    const b64string = await Packer.toBase64String(doc);
    res.setHeader(
      "Content-Disposition",
      "attachment; filename=My Document.docx"
    );
    res.send(Buffer.from(b64string, "base64"));
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
