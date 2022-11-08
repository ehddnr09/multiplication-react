import React, { useState } from "react";

const Input = ({ ...props }) => {
  const { onNumClick, onAddNum, onAddLine } = props;
  const [isInputNum, setIsInputNum] = useState("");

  const changeHandler = (e) => {
    setIsInputNum(e.target.value);
  };

  const onClickHandler = () => {
    onAddNum(isInputNum);
  };

  const onLineHandler = () => {
    onAddLine(isInputNum);
  };

  return (
    <div>
      {!onNumClick && (
        <>
          <h3>몇 단을 출력할까요?</h3>
          <input onChange={changeHandler} type="number" />
          <button onClick={onClickHandler}>입력</button>
        </>
      )}
      {onNumClick && (
        <>
          <h3>몇 번째 줄까지 입력할까요?</h3>
          <input onChange={changeHandler} type="number" />
          <button onClick={onLineHandler}>입력</button>
        </>
      )}
    </div>
  );
};

export default Input;
