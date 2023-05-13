import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import style from "./Textbox.module.css";
import Button from "react-bootstrap/Button";
import {useState} from "react";

function Textbox(props) {
    const [value, setValue] = useState('');
    const onChangeHandler = (event) =>{
        setValue(event.target.value);
    };

    const onSubmitHandler = () =>{
        console.log("shitCake");
    };
  return (
    <>
      <div className={style.margins}>
        <p>{props.label}</p>
        <FloatingLabel
          controlId="floatingTextarea2"
          label={props.flabel}
          className="mb-3"
        >
          <Form.Control
            as="textarea"
            value ={value}
            onChange = {onChangeHandler}
            placeholder="Leave a comment here"
            style={{ height: "300px" }}
          />
        </FloatingLabel>
        <div className={style.buttoncenter}>
          {props.show && <Button  onsubmit={onSubmitHandler} variant="success">Summarize</Button>}
        </div>
      </div>
    </>
  );
}

export default Textbox;
