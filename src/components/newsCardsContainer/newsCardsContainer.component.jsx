import "./newsCardsContainer.styles.css";
import React, { Component } from "react";
import SingleNewsCard from "../singleNewsCard/singleNewsCard.component";

export default class NewsCardsContainer extends Component {
  constructor(props) {
    super(props);
    this.containerRef = React.createRef;
  }

  render() {
    return (
      <div ref={this.containerRef} className="news-cards-container">
        {this.props.allNewsArticles.map((singleArticle) => (
          <SingleNewsCard
            key={singleArticle.publishedAt}
            articleDetails={singleArticle}
          />
        ))}
      </div>
    );
  }
}
