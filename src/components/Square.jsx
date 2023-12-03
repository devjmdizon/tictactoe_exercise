import React from "react";
import { useState } from "react";

function Square({ value, onSquareClick }) {
  return (
    <button
      className="square bg-white hover:bg-gray-100 text-gray-800 font-semibold border border-gray-400 rounded shadow h-12 w-12 text-4xl text-center"
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}

export default Square;
