import React from "react";
function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-light d-flex justify-content-between">
      <h1 className=" mx-auto mb-0 text-info font-italic">Books-App</h1>
      <span className="h3 cart  bg-light">
        My Cart
        <i className="fas fa-cart-plus h3" />
      </span>
    </nav>
  );
}
export default Navbar;
