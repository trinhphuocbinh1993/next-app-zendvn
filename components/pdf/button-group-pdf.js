import ButtonPdfLib from "./button-pdf-lib";
import ButtonHtmlPdfNode from "./button-html-pdf-node";
import ButtonPdfMake from "./button-pdf-make";
import { useState } from "react";

export default function ButtonGroupPdf() {
  const [content, setContent] = useState("");
  return (
    <>
      <span className="relative z-0 inline-flex shadow-sm rounded-md">
        <ButtonPdfMake content={content} />
        <ButtonHtmlPdfNode content={content} />
        <ButtonPdfLib content={content} />
      </span>
      <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
        <label
          htmlFor="about"
          className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
        >
          HTML
        </label>
        <div className="mt-1 sm:mt-0 sm:col-span-2">
          <textarea
            id="about"
            name="about"
            rows={10}
            className="max-w-lg shadow-sm block w-full focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-300 rounded-md"
            value={content}
            onChange={(event) => setContent(event.target.value)}
          />
        </div>
      </div>
    </>
  );
}
