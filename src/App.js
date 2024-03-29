import React, { Component } from "react";
import { SearchBox } from "./component/search.component/search.component";
import { CardList } from "./component/card.list.component/card.list.component";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [
        {
          id: 1,
          name: "Leanne Graham",
          username: "Bret",
          email: "Sincere@april.biz",
        },
        {
          id: 2,
          name: "Ervin Howell",
          username: "Antonette",
          email: "Shanna@melissa.tv",
        },
        {
          id: 3,
          name: "Clementine Bauch",
          username: "Samantha",
          email: "Nathan@yesenia.net",
        },
        {
          id: 4,
          name: "Patricia Lebsack",
          username: "Karianne",
          email: "Julianne.OConner@kory.org",
        },
        {
          id: 5,
          name: "Chelsey Dietrich",
          username: "Kamren",
          email: "Lucio_Hettinger@annie.ca",
        },
        {
          id: 6,
          name: "Mrs. Dennis Schulist",
          username: "Leopoldo",
          email: "Karley_Dach@jasper.info",
        },
        {
          id: 7,
          name: "Kurtis Weissnat",
          username: "Elwyn",
          email: "Telly.Hoeger@billy.biz",
        },
        {
          id: 8,
          name: "Nicholas Runolfsdottir V",
          username: "Maxime",
          email: "Sherwood@rosamond.me",
        },
        {
          id: 9,
          name: "Glenna Reichert",
          username: "Delphine",
          email: "Chaim_McDermott@dana.io",
        },
        {
          id: 10,
          name: "Clementina DuBuque",
          username: "Moriah",
          email: "Rey.Padberg@karina.biz",
        },
      ],
      searchField: "",
    };
  }
  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };
  // componentDidMount() {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((response) => response.json())
  //     .then((users) => this.setState({ robots: users }));
  // }

  render() {
    const { robots, searchField } = this.state;
    const filteredRobots = robots.filter((robots) =>
      robots.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>ROBO FRIENDS</h1>
        <SearchBox handleChange={this.handleChange} />
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}
export default App;
