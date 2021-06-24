import {
  Paragraph,
  Table,
  TableCell,
  TableRow,
  WidthType,
  AlignmentType,
  convertInchesToTwip,
  BorderStyle,
  TableLayoutType,
  TextRun,
} from "docx";

// 1 cm = 360.000 EMU
// 1 inch = 914.400 EMU
// 1 point = 12.700 EMU
// 1 inch = 72 point
// 1 point = 20 DXA
// 1 cm = 3600/127 point
// example: 11 cm = (11 * (3600 / 127) * 20) DXA
// full width of word page is 18.54cm. with border is 2.54cm each position and content width is 16cm

//   doc.text(`Date: 18/06/2021`, 75, 250);
//     // ref
//     doc.moveDown();
//     doc.text(`Our Contact Ref: 601413`);
//     // to
//     doc.moveDown();
//     doc.text(`To: Mrs Rosie Flora`);
//     doc.text(`33 Narborough Road South`);
//     doc.text(`Leicester`);
//     doc.text(`Leicestershire`);
//     doc.text(`LE3 2HA`);
//     // dear
//     doc.moveDown();
//     doc.text(`Dear Mrs Rosie Flora,`);
//     // title
//     doc.moveDown();
//     doc.text(`-£2,500.00`);
//     // content
//     doc.moveDown();
//     doc.text(
//       `Thank you very much for choosing T&K for your home improvement and we trust you are now enjoying the benefits of our products.\n\nWe note that the above amount remains outstanding and it would be appreciated if you can contact the office and make this payment by debit or credit card as soon as possible in order to enable us to complete your guarantee documentation.`,
//       {
//         align: "justify",
//       }
//     );
//     // end
//     doc.moveDown();

//     doc.text("Your sincerely.");

// Structure

const contain = new Paragraph({
  children: [
    createTextRun(`Date: 18/06/2021`, 2),
    createTextRun(`Our Contact Ref: 601413`, 2),
    createTextRun(`To: Mrs Rosie Flora`, 1),
    createTextRun(`33 Narborough Road South`, 1),
    createTextRun(`Leicester`, 1),
    createTextRun(`Leicestershire`, 1),
    createTextRun(`LE3 2HA`, 2),
    createTextRun(`Dear Mrs Rosie Flora,`, 2),
    createTextRun(`-£2,500.00`, 2),
    createTextRun(
      `Thank you very much for choosing T&K for your home improvement and we trust you are now enjoying the benefits of our products.`,
      2
    ),
    createTextRun(
      `We note that the above amount remains outstanding and it would be appreciated if you can contact the office and make this payment by debit or credit card as soon as possible in order to enable us to complete your guarantee documentation.`,
      2
    ),
    createTextRun(`Your sincerely.`, 1),
  ],
  alignment: AlignmentType.JUSTIFIED,
});

function createTextRun(textContent, breakNum) {
  return new TextRun({
    text: textContent,
    font: "Calibri",
    size: 20,
    break: breakNum,
  });
}
export default contain;
