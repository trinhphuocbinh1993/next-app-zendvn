// import Tabs from "../../components/contract/tabs";
import { useState } from "react";
import { Packer } from "docx";

function ContractPage() {
  const [pdfInfo, setPdfInfo] = useState([]);
  // const [docInfo, setDocInfo] = useState([]);

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
        // const link = document.createElement("a");
        // link.href = fileURL;
        // link.download = "fileName.pdf";
        // // Append to html link element page
        // document.body.appendChild(link);
        // link.click();
        // // Clean up and remove the link
        // link.parentNode.removeChild(link);
        // URL.revokeObjectURL(fileURL);
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
        onClick={handleClickPdf}
        type="button"
        className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Generate pdf !
      </button>
      <button
        onClick={handleClickWord}
        type="button"
        className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Generate doc !
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
