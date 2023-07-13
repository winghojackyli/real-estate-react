import React, { useEffect, useState } from "react";
import getAxios from "../../helper/getAxios";
import NewsCard from "./NewsCard";
import "./News.css";

const News = () => {
  const [newsList, setNewsList] = useState([]);
  const url = `https://newsdata.io/api/1/news?apikey=pub_14222574377f7ccd34b84e3e6b2d1ddde3e87&q=vancouver&language=en`;
  useEffect(() => {
    getAxios(url)
      .then((data) => setNewsList(data.results))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="text-center">
      <h1>News in Vancouver</h1>
      {newsList.map((news, index) => (
        <NewsCard key={index} news={news} />
      ))}
    </div>
  );
};

export default News;
