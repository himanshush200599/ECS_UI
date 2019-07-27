import React, { Component } from "react";
import db from "../db";
import BookTable from "./BookTable";
import Pagination from "./Pagination";
class BookView extends Component {
  state = {
    books: [],
    direction: {
      average_rating: "asc"
    },
    numberOfBooks: 20,
    pageNumber: 2,
    search: ""
  };
  componentDidMount() {
    db.table("books")
      .limit(20)
      .toArray()
      .then(books => this.setState({ books }));
  }
  updateSearch = e => {
    // @TODO - debouncing function
    this.setState({ search: e.target.value });
  };
  fetchBooks = () => {
    db.table("books")
      .offset((this.state.pageNumber - 1) * this.state.numberOfBooks)
      .limit(this.state.numberOfBooks)
      .toArray()
      .then(books =>
        this.setState({ books, pageNumber: this.state.pageNumber + 1 })
      );
  };
  fetchPrevBooks = () => {
    db.table("books")
      .offset((this.state.pageNumber - 1) * this.state.numberOfBooks)
      .limit(this.state.numberOfBooks)
      .toArray()
      .then(books =>
        this.setState({ books, pageNumber: this.state.pageNumber - 1 })
      );
  };
  sortBy(key) {
    this.setState({
      books: this.state.books.sort((a, b) =>
        this.state.direction[key] === "asc"
          ? parseFloat(a[key]) - parseFloat(b[key])
          : parseFloat(b[key]) - parseFloat(a[key])
      ),
      direction: {
        [key]: this.state.direction[key] === "asc" ? "dsc" : "asc"
      }
    });
  }
  render() {
    let filteredBooks = this.state.books.filter(books => {
      return (
        books.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !==
        -1
      );
    });
    return (
      <div className="mt-5">
        <div className="main">
          <div className="form-group has-search">
            <span className=" form-control-feedback" />
            <input
              type="text"
              value={this.state.search}
              onChange={this.updateSearch}
              className="form-control"
              placeholder="Search Books By Name"
            />
          </div>
        </div>
        <table className="table ">
          <thead>
            <tr>
              <th scope="col">BookID</th>
              <th scope="col">Title</th>
              <th scope="col">Authors</th>
              <th scope="col">
                Average Rating{" "}
                <button
                  className="btn"
                  onClick={() => this.sortBy("average_rating")}
                >
                  Sort
                </button>
              </th>
              <th scope="col">isbn</th>
              <th scope="col">Language Code</th>
              <th scope="col">Rating Count</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          {filteredBooks.map(book => (
            <BookTable {...book} key={book.bookID} />
          ))}
        </table>
        <Pagination
          fetchBooks={this.fetchBooks}
          fetchPrevBooks={this.fetchPrevBooks}
        />
      </div>
    );
  }
}
export default BookView;
