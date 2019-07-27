import React from "react";
import StarRatings from "react-star-ratings";
import BuyButton from "./BuyButton";
function BookTable({
  bookID,
  title,
  authors,
  average_rating,
  isbn,
  language_code,
  ratings_count,
  price
}) {
  return (
    <tbody>
      <tr>
        <th scope="row">{bookID}</th>
        <td>
          <BuyButton title={title} />
        </td>
        <td>{authors}</td>
        <td>
          <StarRatings
            rating={average_rating}
            starDimension="20px"
            starSpacing="2px"
          />
        </td>
        <td>{isbn}</td>
        <td>{language_code}</td>
        <td>{ratings_count}</td>
        <td>{price}</td>
      </tr>
    </tbody>
  );
}
export default BookTable;
