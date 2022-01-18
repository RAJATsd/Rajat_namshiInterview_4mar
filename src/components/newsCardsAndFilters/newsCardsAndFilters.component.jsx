import "./newsCardsAndFilters.styles.css";
import React, { Component } from "react";
import axios from "axios";

import Filters from "../filters/filters.component";
import NewsCardsContainer from "../newsCardsContainer/newsCardsContainer.component";

export default class NewsCardsAndFilters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allNewsArticles: [],
      source: "any",
    };

    this.containerRef = React.createRef();
  }

  componentDidMount() {
    this.fetchArticles("addResults");
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.props.pageNumber !== prevProps.pageNumber &&
      this.props.pageNumber !== 1
    ) {
      this.fetchArticles("addResults");
    } else if (
      this.state.source !== prevState.source ||
      this.props.searchValue !== prevProps.searchValue
    ) {
      console.log("here in replace");
      this.fetchArticles("replaceResults");
    }
  }

  handleSourceChange = (event) => {
    this.props.changePageNumber("reset");
    this.setState({ ...this.state, source: event.target.value });
  };

  handleOnScroll = () => {
    if (this.containerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } =
        this.containerRef.current;
      if (scrollHeight - scrollTop - clientHeight < 1) {
        this.props.changePageNumber("increment");
      }
    }
  };

  fetchArticles = (actionType) => {
    let URL =
      `https://newsapi.org/v2/everything?apiKey=${process.env.NEWS_API}&pageSize=21` +
      `&page=${this.props.pageNumber}&from=2022-01-01`;

    if (this.props.searchValue !== "") {
      URL += `&q=${this.props.searchValue}`;
    } else {
      URL += "&q=cryptocurrency";
    }

    if (this.state.source !== "any") {
      URL += `&sources=${this.state.source}`;
    }

    axios
      .get(URL)
      .then((data) => {
        console.log(data.data);
        this.setState({
          ...this.state,
          allNewsArticles:
            actionType === "addResults"
              ? [...this.state.allNewsArticles, ...data.data.articles]
              : [...data.data.articles],
        });
      })
      .catch((e) => {
        return;
      });
  };

  render() {
    return (
      <div className="news-car-and-filters-holder">
        <div
          ref={this.containerRef}
          onScroll={this.handleOnScroll}
          className="inner-div"
        >
          <Filters
            source={this.state.source}
            handleCountryChange={this.handleCountryChange}
            handleSourceChange={this.handleSourceChange}
          />
          <NewsCardsContainer allNewsArticles={this.state.allNewsArticles} />
        </div>
      </div>
    );
  }
}
