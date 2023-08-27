import React, { useState } from "react";
import Element from "./Element";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./Clothing.css";

function Navbar({ apiDataArray, filtering, apiArrayDuplicate, transfer }) {
  const categoryArr = [
    ...new Set(
      apiDataArray.map((data) => {
        return data.category;
      })
    ),
  ];
  return (
    <>
      <div className="navBox">
        {categoryArr.map((data) => (
          <>
            <button className="navbarItem" onClick={() => filtering(data)}>
              {data}
            </button>
            {console.log(apiArrayDuplicate, "bbnmbb")}
          </>
        ))}
      </div>
    </>
  );
}

export default Navbar;
