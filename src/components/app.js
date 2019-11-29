import React, { Component } from "react";
import Listarobota from "../containers/listarobota";
import SearchBox from "../containers/searchbox";
import Scroll from "../containers/scroll";
import ErrorBoundry from "./ErrorBoundry";

class App extends Component {
  constructor() {
    super();
    this.state = {
      roboti: [],
      searchbar: ""
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        return response.json();
      })
      .then(users => {
        this.setState({ roboti: users });
      });
  }
  onSearchChange = event => {
    this.setState({ searchbar: event.target.value });
  };

  render() {
    const { roboti, searchbar } = this.state;
    const filterrobot = this.state.roboti.filter(robot => {
      return robot.name.toLowerCase().includes(searchbar);
    });
    return !roboti.length ? (
      <h1>Loading</h1>
    ) : (
      <div>
        <h1>Lista nasih robota</h1>
        <SearchBox
          searchbar={this.state.searchbar}
          searchchange={this.onSearchChange}
        />
        <Scroll>
          <ErrorBoundry>
            <Listarobota robots={filterrobot} />
          </ErrorBoundry>
        </Scroll>
      </div>
    );
  }
}
export default App;
