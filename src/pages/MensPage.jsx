import React, { useState } from "react";
import Accordian from "../component/Accordian";

function MensPage() {
  const [open, setopen] = useState(null);

  return (
    <div className="max-w-6xl mx-auto ">
      <h1 className="font-bold text-xl">Filter Product</h1>
      {["Brand", "Mens", "Gender", "Kids"].map((title, index) => (
        <Accordian key={index}
         title={title} 
         Open={open === index}
         setopen={() => setopen(open === index ? null : index)} />
      ))}
    </div> 
  );
}

export default MensPage;
