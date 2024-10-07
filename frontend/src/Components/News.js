import React from 'react';
import "./NewsBar.css";
import { NewsData } from './NewsData';


function News() {
    return (
        <>
            <div className='home'>
                 
            </div>
        </>
    );
}

export default News;

/* <div className="news-bar">
                    <div className="news-content">
                        {NewsData.map((item, index) => (
                        <div key={index} className="news-item">
                            <img src={item.img} alt={item.text} className="news-image" />
                            <span className="news-title">{item.text}</span>
                        </div>
                        ))}
                    </div>
                </div>
*/