// npm install --save pdf-lib
import { useState } from "react";
export default function ButtonPdfLib(props) {
  // cai nay de download

  // function handleClick() {
  //   fetch("/api/pdf/pdf-lib", {
  //     method: "POST",
  //     body: JSON.stringify({
  //       content: encodeURIComponent(props.content),
  //     }),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then((response) => response.blob())
  //     .then((blob) => {
  //       const file = new Blob([blob], { type: "application/pdf" });
  //       const fileURL = URL.createObjectURL(file);
  //       const link = document.createElement("a");
  //       link.href = fileURL;
  //       link.download = "fileName.pdf";
  //       // Append to html link element page
  //       document.body.appendChild(link);
  //       link.click();
  //       // Clean up and remove the link
  //       link.parentNode.removeChild(link);
  //       URL.revokeObjectURL(fileURL);
  //     });
  // }

  // cai nay de view
  const [pdfInfo, setPdfInfo] = useState([]);

  function handleClick() {
    fetch("/api/pdf/pdf-lib", {
      method: "POST",
      body: JSON.stringify({
        content: encodeURIComponent(props.content),
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
  return (
   
      <button
        onClick={handleClick}
        type="button"
        className="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
      >
        pdf-lib
      </button>
  );
}
