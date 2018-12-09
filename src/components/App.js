import React, { Component } from "react";
import "../styles/App.css";
import SearchBar from "./SearchBar";
import ResourceList from "./ResourceList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>Content</div>
        </header>
        <SearchBar />
        <ResourceList />
      </div>
    );
  }
}

export default App;
