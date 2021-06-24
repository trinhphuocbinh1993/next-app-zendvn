// import Tabs from "../../components/contract/tabs";
import { useState } from "react";
import { Packer } from "docx";

function ContractPage() {
  const [pdfInfo, setPdfInfo] = useState([]);

  function handleClickPdf(event) {
    event.preventDefault();
    fetch("/api/pdf/pdfkit", {
      method: "POST",
      body: JSON.stringify({
        content: encodeURIComponent("aaaaa"),
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.blob())
      .then((blob) => {
        const file = new Blob([blob], { type: "application/pdf" });
        const fileURL = URL.createObjectURL(file);
        const link = document.createElement("a");
        link.href = fileURL;
        link.download = "fileName.pdf";
        // Append to html link element page
        document.body.appendChild(link);
        link.click();
        // Clean up and remove the link
        link.parentNode.removeChild(link);
        URL.revokeObjectURL(fileURL);
      });
  }

  function handleClickViewPdf(event) {
    event.preventDefault();
    fetch("/api/pdf/pdfkit", {
      method: "POST",
      body: JSON.stringify({
        content: encodeURIComponent("aaaaa"),
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.blob())
      .then((blob) => {
        const file = new Blob([blob], { type: "application/pdf" });
        const fileURL = URL.createObjectURL(file);
        setPdfInfo(fileURL);
      });
  }

  function handleClickWord(event) {
    event.preventDefault();
    fetch("/api/word/docx", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.blob())
      .then((blob) => {
        var wordFile = new Blob([blob], { type: "application/octet-stream" });
        var fileURL = URL.createObjectURL(wordFile);
        var link = document.createElement("a");
        link.href = fileURL;
        link.download = "FileName.docx";
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
        URL.revokeObjectURL(fileURL);
        // setDocInfo(fileURL);
      });
  }

  return (
    <div>
      {/* <Tabs /> */}
      <button
        onClick={handleClickViewPdf}
        type="button"
        className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
      >
        Review pdf - render from server!
      </button>
      <button
        onClick={handleClickPdf}
        type="button"
        className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
      >
        Download pdf - render from server!
      </button>
      <button
        onClick={handleClickWord}
        type="button"
        className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Download doc - render from server !
      </button>
      {
        <iframe
          title="test-frame"
          src={pdfInfo}
          className="absolute w-full h-full"
          frameBorder="0"
          type="application/pdf"
        />
      }
      {/* 
      {<iframe src={`${docInfo}`} />} */}
    </div>
  );
}

export default ContractPage;
