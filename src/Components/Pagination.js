import React from "react";
function Pagination({ fetchBooks, fetchPrevBooks }) {
  return (
    <nav>
      <ul className="pagination">
        <li className="page-item">
          <button onClick={() => fetchPrevBooks()} className="page-link">
            Previous
          </button>
        </li>
        <li className="page-item">
          <button className="page-link" onClick={() => fetchBooks()}>
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
}
export default Pagination;
