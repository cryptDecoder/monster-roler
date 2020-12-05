import React, { Component } from "react";
import "./App.css";
// Import all required components here
import { CardList } from "./components/Card-List/card-list.components";
import { SearchBox } from "./components/Search-box/Search-box.component";
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      monster: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monster: users }));
  }
  render() {
    const { monster, searchField } = this.state;
    const filterSearch = monster.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App-header">
        <h1>Find Monster</h1>
        <SearchBox
          placholder="Search the Monster"
          handleChange={e => {
            this.setState({ searchField: e.target.value });
          }}
        />
        <CardList monster={filterSearch} />
      </div>
    );
  }
}
