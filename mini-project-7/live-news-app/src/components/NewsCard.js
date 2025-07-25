import React, { Component } from "react";
import "./NewsCard.css";

class NewsCard extends Component {
  render() {
    const { title, description, urlToImage, source, publishedAt, author } =
      this.props.article;

    return (
      <div className="card">
        <img src={urlToImage || "https://via.placeholder.com/150"} alt="news" />
        <h3>{title}</h3>
        <p>{description || "No description available"}</p>
        <small>
          <b>{source.name}</b> | {author || "Unknown"} <br />
          {new Date(publishedAt).toLocaleString()}
        </small>
        <a href={this.props.article.url} target="_blank" rel="noreferrer">
          <button>Read More</button>
        </a>
      </div>
    );
  }
}

export default NewsCard;
