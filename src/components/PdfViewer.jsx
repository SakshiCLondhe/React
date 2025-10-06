import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const PdfViewer = () => {
  const [file, setFile] = useState(null);
  const [numPages, setNumPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);

  const onFileChange = (e) => {
    const chosenFile = e.target.files[0];
    if (chosenFile && chosenFile.type === "application/pdf") {
      setFile(chosenFile);
    } else {
      alert("Please select a valid PDF file.");
    }
  };

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setPageNumber(1);
  };

  const changePage = (offset) => {
    setPageNumber((prev) => prev + offset);
  };

  return (
    <div className="flex flex-col items-center">
      <input
        type="file"
        accept="application/pdf"
        onChange={onFileChange}
        className="mb-4 border p-2 rounded w-full max-w-md"
      />
      {file && (
        <>
          <Document
            file={file}
            onLoadSuccess={onDocumentLoadSuccess}
            className="border rounded bg-white shadow-lg p-4"
          >
            <Page pageNumber={pageNumber} />
          </Document>

          <div className="flex items-center space-x-4 mt-4">
            <button
              onClick={() => changePage(-1)}
              disabled={pageNumber <= 1}
              className="bg-blue-500 text-white px-3 py-1 rounded disabled:opacity-50"
            >
              Previous
            </button>
            <p>
              Page {pageNumber} of {numPages}
            </p>
            <button
              onClick={() => changePage(1)}
              disabled={pageNumber >= numPages}
              className="bg-blue-500 text-white px-3 py-1 rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default PdfViewer;
