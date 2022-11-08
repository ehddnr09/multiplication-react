import { useState } from "react";
import "./App.css";
import Result from "./components/Result/Result";
import Form from "./components/UI/Form";

function App({ ...props }) {
  const [isNumClick, setIsNumClick] = useState(false);
  const [isLineClick, setIsLineClick] = useState(false);
  const [isNumAdd, setIsNumAdd] = useState([]);

  const numClickHandler = (num) => {
    // console.log(num);
    setIsNumClick(true);
    setIsNumAdd((currentArray) => [...currentArray, num]);
    console.log(isNumAdd);
  };

  const lineClickHandler = (num) => {
    // console.log(num);
    setIsLineClick(true);
    setIsNumAdd((currentArray) => [...currentArray, num]);
    console.log(isNumAdd);
  };

  return (
    <div className="App">
      <h2>구구단 계산기 ver3</h2>
      {isLineClick ? (
        <Result numArray={isNumAdd} />
      ) : (
        <Form
          onNumClick={isNumClick}
          onAddNum={numClickHandler}
          onAddLine={lineClickHandler}
        />
      )}
    </div>
  );
}

export default App;
