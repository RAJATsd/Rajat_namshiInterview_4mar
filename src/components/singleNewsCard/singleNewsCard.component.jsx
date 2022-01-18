import "./singleNewsCard.styles.css";
import React, { Component } from "react";

export default class SingleNewsCard extends Component {
  render() {
    const cardDetails = this.props.articleDetails;

    return (
      <div className="single-card">
        <div className="news-image-container">
          <img
            id="news-related-image"
            src={cardDetails.urlToImage}
            alt="related"
          />
        </div>
        <div className="news-info">
          <h5 className="news-title">{cardDetails.title}</h5>
          <div className="news-author">
            by{" "}
            <a id="news-author-name" href="#">
              {cardDetails.author}
            </a>
          </div>
          <div className="news-description">
            {cardDetails.content.length < 120
              ? cardDetails.content
              : cardDetails.content.slice(0, 120) + "..."}
          </div>
          <div className="pusblishing-time">{cardDetails.publishedAt}</div>
        </div>
      </div>
    );
  }
}
