import React,{useState} from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
function MagazineViewer() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  document.body.style.color="#111111"
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <center>
        <div style={{overflowY:"scroll"}}>
        <Document loading={"Warning: Don't set yourself on fire."} file="/somefile.pdf" onLoadSuccess={onDocumentLoadSuccess}>
        {Array.from(
              new Array(numPages),
              (el,index) => (
                <Page 
                  key={`page_${index+1}`}
                  pageNumber={index+1}
                  loading={"Why so serious?"}
                />
            )
        )}
        </Document>
        </div>
      </center>
    </div>
  );
}

export default MagazineViewer