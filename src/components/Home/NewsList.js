import React from "react";
import './style.css'

const NewsList = ({ news }) => {
    return (
        <div className="news-list">
            {news && news.map((item) => (
                <div key={item.id} className="news-card">
                    <img src={item.image} alt={item.title} />
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <span>{item.date}</span>
                    <a href={item.link}>Читать далее</a>
                </div>
            ))}
        </div>
    );
};

export default NewsList;
