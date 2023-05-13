import Textbox from "./Textbox";
import { useState, useEffect } from "react";

const Home = () => {
  // const [inputText, setInputText] = useState("");
  // const [OutputText, setOutputText] = useState("");
  return (
    <>
      <Textbox
        show={true}
        label="Text to be summarized"
        flabel="Enter text here"
      />
      <Textbox show={false} label="Summarized text" />
    </>
  );
};
export default Home;
