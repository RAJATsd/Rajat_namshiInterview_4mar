import "./App.css";
import React from "react";
import HeaderAndInput from "./components/headerAndInput/headerAndInput.component";
import NewsCardsAndFilters from "./components/newsCardsAndFilters/newsCardsAndFilters.component";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: "",
      pageNumber: 1,
    };
  }

  handleInputChange = (event) =>
    this.setState({ ...this.state, searchValue: event.target.value });

  changePageNumber = (actionType) =>
    this.setState({
      ...this.state,
      pageNumber: actionType === "increment" ? this.state.pageNumber + 1 : 1,
    });

  render() {
    return (
      <div className="App">
        <HeaderAndInput handleInputChange={this.handleInputChange} />
        <NewsCardsAndFilters
          searchValue={this.state.searchValue}
          pageNumber={this.state.pageNumber}
          changePageNumber={this.changePageNumber}
        />
      </div>
    );
  }
}

export default App;
