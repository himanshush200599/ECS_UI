// @// TODO: debouncing in search bar and checkout features

import React, { Component } from "react";
import "./App.css";
import db from "./db";
import Dexie from "dexie";
// Component export
import Navbar from "./Components/Navbar";
import BookView from "./Components/BookView";
class App extends Component {
  componentDidMount() {
    fetch(
      "https://cors-anywhere.herokuapp.com/http://starlord.hackerearth.com/books"
    )
      .then(res => res.json())
      .then(data => {
        return db.books
          .bulkAdd(data)
          .then(function(lastKey) {
            console.log("Done");
          })
          .catch(Dexie.BulkError, function(e) {
            // console.log("DONE!!!");
          });
      });
  }
  render() {
    return (
      <div>
        <Navbar />
        <BookView />
      </div>
    );
  }
}

export default App;
