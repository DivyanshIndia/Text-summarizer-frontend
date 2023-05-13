import React from "react";
import Header from "./components/Header";
import Textbox from "./components/Textbox";
import Project from "./components/Project";
import Foot from "./components/Foot";
import "./App.css";
import AboutUs from "./components/AboutUs";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";


const App = () => {
  // Comment
//   const formdata = new FormData();
// formdata.append("key", "6ba0fec18b47bb1e9b7bb40336403cf9");
// formdata.append("txt", "input");
// formdata.append("sentences", "NUMBER OF SENTENCES");

// const requestOptions = {
//   method: 'POST',
//   body: formdata,
//   redirect: 'follow'
// };

// const response = fetch("https://api.meaningcloud.com/summarization-1.0", requestOptions)
//   .then(response => ({
//     status: response.status, 
//     body: response.json()
//   }))
//   .then(({ status, body }) => console.log(status, body))
//   .catch(error => console.log('error', error));

  // commentend
  

  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        {/* <Textbox show={true} label='Text to be summarized' flabel="Enter text here" />
      <Textbox show={false} label='Summarized text' /> */}
      <Route path="/AboutUs" element={<AboutUs/>}/>
      <Route path="/Project" element={<Project/>}/>
        
      </Routes>
      <Foot/>

    </React.Fragment>
  );
};

export default App;
