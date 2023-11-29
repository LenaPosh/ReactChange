import React from "react";
import { IoIdCardOutline } from "react-icons/io5";
import './style.css'

const NewsList = ({ news }) => {
    return (
        <div className="news-list">
            {news && news.map((item) => (
                <div key={item.id} className="news-card">

                    <IoIdCardOutline size={50} color="black" />
                    <h3 style={{ color: 'rgba(0,0,0,0.82)' }}>{item.title}</h3>
                    <p>{item.description}</p>
                    <span>{item.date}</span>
                    <a href={item.link} style={{ color: 'rgba(0, 0, 0, 0.51)' }}>Читать далее</a>
                </div>
            ))}
        </div>
    );
};

export default NewsList;
