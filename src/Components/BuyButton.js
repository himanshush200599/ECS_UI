import React from "react";
function BuyButton({ title }) {
  return (
    <>
      <span>{title}</span>
      <button className="btn btn-outline-info">+ Cart</button>
    </>
  );
}
export default BuyButton;
