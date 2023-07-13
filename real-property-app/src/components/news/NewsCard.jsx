import React from "react";
import "./News.css";

const NewsCard = ({ news }) => {
  let keywords = "";
  if (news.keywords) {
    keywords = "Keywords: ";
    keywords += news.keywords.map(
      (keyword, index) => (index ? " " : "") + keyword
    );
  }

  console.log(keywords);
  return (
    <div className="card news-card mx-auto">
      <h3 className="card-header">{news.title}</h3>
      <div className="card-body">
        <h5 className="card-title details">{news.description}</h5>
        <p className="card-text details">{keywords}</p>
        <div className="d-flex justify-content-between">
          <a href={news.link} className="btn btn-primary">
            News Link
          </a>
          <p className="card-text text-left">{news.pubDate}</p>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
