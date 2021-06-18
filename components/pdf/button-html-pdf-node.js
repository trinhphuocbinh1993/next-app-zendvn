// npm i html-pdf-node

export default function ButtonHtmlPdfNode(props) {
  function handleClick() {
    fetch("/api/pdf/html-pdf-node", {
      method: "POST",
      body: JSON.stringify({
        content: encodeURIComponent(props.content),
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(decodeURIComponent(data.content)));
  }
  return (
    <button
      onClick={handleClick}
      type="button"
      className="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
    >
      html-pdf-node
    </button>
  );
}
