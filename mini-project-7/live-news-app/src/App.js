import React, { Component } from "react";
import NewsCard from "./components/NewsCard";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
    };
  }

  componentDidMount() {
    const API_KEY = "YOUR_NEWSAPI_KEY_HERE";
    const URL = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${API_KEY}`;

    fetch(URL)
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          articles: data.articles,
          loading: false,
        })
      )
      .catch((err) => console.error("Error fetching news:", err));
  }

  render() {
    const { articles, loading } = this.state;

    return (
      <div className="app">
        <h1 className="title">LIVE NEWS</h1>
        <div className="news-container">
          {loading ? (
            <p>Loading...</p>
          ) : (
            articles.map((article, index) => (
              <NewsCard key={index} article={article} />
            ))
          )}
        </div>
      </div>
    );
  }
}

export default App;
