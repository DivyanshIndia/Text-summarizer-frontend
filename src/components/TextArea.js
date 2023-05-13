import React, { useState } from "react";
import html2pdf from "html2pdf.js";
import "./TextArea.css";

function TextArea(props) {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleDownload = () => {
    const element = props.ans;
    const opt = {
      margin: 1,
      filename: "Summary.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };
    html2pdf().set(opt).from(element).save();
  };

  return (
    <div className="punchy-text-area">
      <label className="punchy-text-area__label">Output: Summarized Text</label>
      <textarea
        className="punchy-text-area__textarea"
        placeholder="Output here"
        value={props.ans}
        onChange={handleChange}
      />
      <button className="punchy-text-area__button" onClick={handleDownload}>
        Download PDF
      </button>
      <div className="punchy-text-area__output" id="pdf">
        {text}
      </div>
    </div>
  );
}

export default TextArea;
