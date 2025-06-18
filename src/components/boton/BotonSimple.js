import React from "react";

export default function BotonSimple({ text, onClick }) {


  return (
    <div className="botonSimple" onClick={onClick}>
      {text}
    </div>
  );
}
