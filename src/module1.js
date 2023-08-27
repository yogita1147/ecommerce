import React from "react";
const Card = (props) => {
  return (
    <>
      <div>
        <div></div>
        <div><h6>{props.title}</h6></div>
        <div><p>{props.desc}</p></div>
      </div>
    </>
  );
};

export default Card;