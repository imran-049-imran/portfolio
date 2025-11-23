import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";

import Particle from "../components/Particle";

import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc =
  `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Resume = () => {
  const [width, setWidth] = useState(window.innerWidth);

  // 🔥 Tumhara local PDF path
  const pdfPath = "/test.pdf";

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />

        {/* TOP DOWNLOAD BUTTON */}
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdfPath}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload /> &nbsp;Download Resume
          </Button>
        </Row>

        {/* PDF VIEW */}
        <Row className="resume" style={{ marginTop: "20px" }}>
          <Document
            file={pdfPath}
            onLoadError={(err) => console.error("PDF LOAD ERROR:", err)}
            className="d-flex justify-content-center"
          >
            <Page
              pageNumber={1}
              scale={width > 786 ? 1.6 : 0.6}
            />
          </Document>
        </Row>

        {/* BOTTOM DOWNLOAD BUTTON */}
        <Row style={{ justifyContent: "center", position: "relative", marginTop: "20px" }}>
          <Button
            variant="primary"
            href={pdfPath}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload /> &nbsp;Download Resume
          </Button>
        </Row>
      </Container>
    </div>
  );
};

export default Resume;
