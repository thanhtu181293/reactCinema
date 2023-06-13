import React, { Component } from 'react';
import style from './NewsSection.module.scss';
import MoviesNews from './MovieNews/MoviesNews';
import Review from './Review/Review';
import Promotion from './Promotion/Promotion';


export default class NewsSection extends Component {
    render() {
        return (
            <div className = {`${style.newsSection} container`}>
                <ul className="newSection__nav nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <a className="nav-link active" id="movie-news-tab" data-toggle="pill" href="#movie-news" role="tab" aria-controls="pills-home" aria-selected="true">Điện Ảnh 24h</a>
                    </li>
                    <li className="nav-item" role="presentation">
                        <a className="nav-link" id="review-tab" data-toggle="pill" href="#review" role="tab" aria-controls="pills-profile" aria-selected="false">Review</a>
                    </li>
                    <li className="nav-item" role="presentation">
                        <a className="nav-link" id="promotion-tab" data-toggle="pill" href="#promotion" role="tab" aria-controls="pills-contact" aria-selected="false">Khuyến Mãi</a>
                    </li>
                </ul>
                <div className="tab-content" id="news-tabContent">
                    <div className="tab-pane fade show active" id="movie-news" role="tabpanel" aria-labelledby="movie-news-tab">
                        <MoviesNews />
                    </div>
                    <div className="tab-pane fade" id="review" role="tabpanel" aria-labelledby="review-tab">
                        <Review />
                    </div>
                    <div className="tab-pane fade" id="promotion" role="tabpanel" aria-labelledby="promotion-tab">
                        <Promotion />
                    </div>
                </div>
            </div>
        )
    }
}
