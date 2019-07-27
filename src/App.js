import React, { Component } from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";

// Component export
import Navbar from "./Components/Navbar";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navbar />
      </Provider>
    );
  }
}

export default App;
