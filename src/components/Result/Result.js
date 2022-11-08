import React from "react";

// const DUMMY = [
//   {
//     id: 1,
//     num: 6,
//   },
// ];

const Result = ({ ...props }) => {
  const { numArray } = props;

  const rendering = () => {
    const result = [];
    for (let i = 1; i <= numArray[1]; i++) {
      result.push(
        <li key={i}>{`${numArray[0]} x ${i} = ${numArray[0] * i}`}</li>
      );
    }
    return result;
  };

  return (
    <div>
      <ul>{rendering()}</ul>
    </div>
  );
};

export default Result;
