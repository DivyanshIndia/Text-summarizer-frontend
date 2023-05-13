import React, { useEffect, useState } from "react";
import { Configuration, OpenAIApi } from "openai";

import "./Form.css";
import TextArea from "./TextArea";

function MyForm() {
  const [text, setText] = useState("");
  const [summarizedtext, setSummarizedtext] = useState("");
  const [loading, setLoading] = useState(false);
  const [number, setNumber] = useState(100);

  // This hardcodes insertion of 'User-Agent'
  let config = new Configuration({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  });

  // Delete it
  delete config.baseOptions.headers["User-Agent"];

  let openai = new OpenAIApi(config);

  // const configuration = new Configuration({
  //   // apiKey: process.env.OPENAI_API_KEY,
  //   apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  // });

  // const openai = new OpenAIApi(configuration);

  // const trimText = (text) => text.replace(/\s+/g, " ").trim();

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    if (text.trim().length !== 0) {
      openai
        .createCompletion({
          model: "text-davinci-003",
          prompt: generatePrompt(text),
          temperature: 0.6,
          max_tokens: number,
        })
        .then((res) => {
          if (res.status === 200) {
            setLoading(false);
            setSummarizedtext(res?.data?.choices[0]?.text);
          }
        })
        .catch((err) => {
          console.log(err, "An error occured");
        });
    } else {
      setSummarizedtext("Nothing Feeded");
      setLoading(false);
    }
  };

  useEffect(() => {}, [loading, summarizedtext]);

  function generatePrompt(text) {
    const trimText = text.replace(/\s+/g, " ").trim();
    return `Summarize this ${trimText} and break it into separate lines`;
  }
  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <label htmlFor="summary-text">
            Enter the text to do summarization:
          </label>
          <textarea
            id="summary-text"
            name="summary-text"
            value={text}
            onChange={handleChange}
            placeholder="Enter your text here"
          ></textarea>
          <br></br>
         
        <div>  <label htmlFor="Length">Length</label>
          <input
            id="Length"
            className="num"
            type="number"
            onChange={(e) => {
              const n = parseInt(e.target.value);
              if (isNaN(n)) {
                setNumber("");
              } else {
                setNumber(n);
              }
            }}
            value={number}
          ></input>
           <button className="butt" type="submit">
            {loading ? "loading..." : "Summarize"}
          </button></div>
        </form>
      </div>
      <TextArea ans={summarizedtext} orig={text}></TextArea>
    </>
  );
}

export default MyForm;
