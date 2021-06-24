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

const table = new Table({
  rows: [
    new TableRow({
      children: [
        createTableCellWithoutBorders(
          "",
          AlignmentType.RIGHT,
          0,
          0,
          0,
          0,
          50,
          WidthType.PERCENTAGE
        ),
        createTableCellWithoutBorders(
          createTextRunGray("T&K Home Improvements Ltd", true),
          AlignmentType.RIGHT,
          0,
          0,
          0,
          0.1,
          35,
          WidthType.PERCENTAGE
        ),
        createTableCellWithLeftBorder(
          createTextRunGray("Contact", true),
          null,
          0,
          0,
          0.1,
          0,
          15,
          WidthType.PERCENTAGE,
          3
        ),
      ],
    }),
    new TableRow({
      children: [
        createTableCellWithoutBorders(
          "",
          AlignmentType.RIGHT,
          0,
          0,
          0,
          0,
          50,
          WidthType.PERCENTAGE
        ),
        createTableCellWithoutBorders(
          createTextRunGray("2-6 Huxley Close | Park Farm South", false),
          AlignmentType.RIGHT,
          0,
          0,
          0,
          0.1,
          35,
          WidthType.PERCENTAGE
        ),
        createTableCellWithLeftBorder(
          createTextRunGray("info@tkhi.co.uk", false),
          null,
          0,
          0,
          0.1,
          0,
          15,
          WidthType.PERCENTAGE,
          3
        ),
      ],
    }),
    new TableRow({
      children: [
        createTableCellWithoutBorders(
          "",
          AlignmentType.RIGHT,
          0,
          0,
          0,
          0,
          50,
          WidthType.PERCENTAGE
        ),
        createTableCellWithoutBorders(
          createTextRunGray("Wellingborough | Northants", false),
          AlignmentType.RIGHT,
          0,
          0,
          0,
          0.1,
          35,
          WidthType.PERCENTAGE
        ),
        createTableCellWithLeftBorder(
          createTextRunGray("0800 622 716", false),
          null,
          0,
          0,
          0.1,
          0,
          15,
          WidthType.PERCENTAGE,
          3
        ),
      ],
    }),
  ],
  width: {
    size: 17 * (3600 / 127) * 20,
    type: WidthType.DXA,
  },
  layout: TableLayoutType.FIXED,
});

function createParagraph(text, alignText) {
  return new Paragraph({ children: [text], alignment: alignText });
}
function createTableCellWithoutBorders(
  text,
  alignText,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  widthSize,
  withType
) {
  return new TableCell({
    children: [createParagraph(text, alignText)],
    margins: {
      top: convertInchesToTwip(marginTop),
      bottom: convertInchesToTwip(marginBottom),
      left: convertInchesToTwip(marginLeft),
      right: convertInchesToTwip(marginRight),
    },
    width: {
      size: widthSize,
      type: withType,
    },
    borders: {
      top: {
        style: BorderStyle.NONE,
        size: 0,
        color: "808080",
      },
      bottom: {
        style: BorderStyle.NONE,
        size: 0,
        color: "808080",
      },
      left: {
        style: BorderStyle.NONE,
        size: 0,
        color: "808080",
      },
      right: {
        style: BorderStyle.NONE,
        size: 0,
        color: "808080",
      },
    },
  });
}

function createTableCellWithLeftBorder(
  text,
  alignText,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  widthSize,
  withType
) {
  return new TableCell({
    children: [createParagraph(text, alignText)],
    margins: {
      top: convertInchesToTwip(marginTop),
      bottom: convertInchesToTwip(marginBottom),
      left: convertInchesToTwip(marginLeft),
      right: convertInchesToTwip(marginRight),
    },
    width: {
      size: widthSize,
      type: withType,
    },
    borders: {
      top: {
        style: BorderStyle.NONE,
        size: 0,
        color: "808080",
      },
      bottom: {
        style: BorderStyle.NONE,
        size: 0,
        color: "808080",
      },
      left: {
        style: BorderStyle.SINGLE,
        size: 3,
        color: "808080",
      },
      right: {
        style: BorderStyle.NONE,
        size: 0,
        color: "808080",
      },
    },
  });
}

function createTextRunGray(text, bold) {
  return new TextRun({
    text: text,
    bold: bold,
    font: "Calibri",
    size: 15,
    color: "808080",
  });
}

export default table;
