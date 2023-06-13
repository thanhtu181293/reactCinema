import React, { Component } from 'react';
import style from './MoviesNews.module.scss';
import NewsList from '../NewsList/NewsList';

export default class MoviesNews extends Component {
    data = [
        {
            imgUrl: './images/News/da-n-my-nhan-trong-the-gio-i-die-n-a-nh-cu-a-qua-i-kie-t-christopher-nolan-15970503918450.png',
            title: 'Dàn mỹ nhân trong thế giới điện ảnh của quái kiệt Christopher Nolan',
            description: 'Làng phim đương đại những năm qua chứng kiến sự lên ngôi của cái tên Christopher Nolan, được biết tới như một trong những đạo diễn thiên tài với khả năng tạo ra siêu phẩm bạc tỉ chất lượng.',
            like: false,
            like_number: 0,
            comment_number: 0,
        },
        {
            imgUrl: './images/News/da-n-my-nhan-trong-the-gio-i-die-n-a-nh-cu-a-qua-i-kie-t-christopher-nolan-15970503918450.png',
            title: 'Dàn mỹ nhân trong thế giới điện ảnh của quái kiệt Christopher Nolan',
            description: 'Làng phim đương đại những năm qua chứng kiến sự lên ngôi của cái tên Christopher Nolan, được biết tới như một trong những đạo diễn thiên tài với khả năng tạo ra siêu phẩm bạc tỉ chất lượng.',
            like: false,
            like_number: 0,
            comment_number: 0,
        },
        {
            imgUrl: './images/News/da-n-my-nhan-trong-the-gio-i-die-n-a-nh-cu-a-qua-i-kie-t-christopher-nolan-15970503918450.png',
            title: 'Dàn mỹ nhân trong thế giới điện ảnh của quái kiệt Christopher Nolan',
            description: 'Làng phim đương đại những năm qua chứng kiến sự lên ngôi của cái tên Christopher Nolan, được biết tới như một trong những đạo diễn thiên tài với khả năng tạo ra siêu phẩm bạc tỉ chất lượng.',
            like: false,
            like_number: 0,
            comment_number: 0,
        },
        {
            imgUrl: './images/News/da-n-my-nhan-trong-the-gio-i-die-n-a-nh-cu-a-qua-i-kie-t-christopher-nolan-15970503918450.png',
            title: 'Dàn mỹ nhân trong thế giới điện ảnh của quái kiệt Christopher Nolan',
            description: 'Làng phim đương đại những năm qua chứng kiến sự lên ngôi của cái tên Christopher Nolan, được biết tới như một trong những đạo diễn thiên tài với khả năng tạo ra siêu phẩm bạc tỉ chất lượng.',
            like: false,
            like_number: 0,
            comment_number: 0,
        },
        {
            imgUrl: './images/News/da-n-my-nhan-trong-the-gio-i-die-n-a-nh-cu-a-qua-i-kie-t-christopher-nolan-15970503918450.png',
            title: 'Dàn mỹ nhân trong thế giới điện ảnh của quái kiệt Christopher Nolan',
            description: 'Làng phim đương đại những năm qua chứng kiến sự lên ngôi của cái tên Christopher Nolan, được biết tới như một trong những đạo diễn thiên tài với khả năng tạo ra siêu phẩm bạc tỉ chất lượng.',
            like: false,
            like_number: 0,
            comment_number: 0,
        },
        {
            imgUrl: './images/News/da-n-my-nhan-trong-the-gio-i-die-n-a-nh-cu-a-qua-i-kie-t-christopher-nolan-15970503918450.png',
            title: 'Dàn mỹ nhân trong thế giới điện ảnh của quái kiệt Christopher Nolan',
            description: 'Làng phim đương đại những năm qua chứng kiến sự lên ngôi của cái tên Christopher Nolan, được biết tới như một trong những đạo diễn thiên tài với khả năng tạo ra siêu phẩm bạc tỉ chất lượng.',
            like: false,
            like_number: 0,
            comment_number: 0,
        },
        {
            imgUrl: './images/News/da-n-my-nhan-trong-the-gio-i-die-n-a-nh-cu-a-qua-i-kie-t-christopher-nolan-15970503918450.png',
            title: 'Dàn mỹ nhân trong thế giới điện ảnh của quái kiệt Christopher Nolan',
            description: 'Làng phim đương đại những năm qua chứng kiến sự lên ngôi của cái tên Christopher Nolan, được biết tới như một trong những đạo diễn thiên tài với khả năng tạo ra siêu phẩm bạc tỉ chất lượng.',
            like: false,
            like_number: 0,
            comment_number: 0,
        },
        {
            imgUrl: './images/News/da-n-my-nhan-trong-the-gio-i-die-n-a-nh-cu-a-qua-i-kie-t-christopher-nolan-15970503918450.png',
            title: 'Dàn mỹ nhân trong thế giới điện ảnh của quái kiệt Christopher Nolan',
            description: 'Làng phim đương đại những năm qua chứng kiến sự lên ngôi của cái tên Christopher Nolan, được biết tới như một trong những đạo diễn thiên tài với khả năng tạo ra siêu phẩm bạc tỉ chất lượng.',
            like: false,
            like_number: 0,
            comment_number: 0,
        },
        {
            imgUrl: './images/News/da-n-my-nhan-trong-the-gio-i-die-n-a-nh-cu-a-qua-i-kie-t-christopher-nolan-15970503918450.png',
            title: 'Dàn mỹ nhân trong thế giới điện ảnh của quái kiệt Christopher Nolan',
            description: 'Làng phim đương đại những năm qua chứng kiến sự lên ngôi của cái tên Christopher Nolan, được biết tới như một trong những đạo diễn thiên tài với khả năng tạo ra siêu phẩm bạc tỉ chất lượng.',
            like: false,
            like_number: 0,
            comment_number: 0,
        },
        {
            imgUrl: './images/News/da-n-my-nhan-trong-the-gio-i-die-n-a-nh-cu-a-qua-i-kie-t-christopher-nolan-15970503918450.png',
            title: 'Dàn mỹ nhân trong thế giới điện ảnh của quái kiệt Christopher Nolan',
            description: 'Làng phim đương đại những năm qua chứng kiến sự lên ngôi của cái tên Christopher Nolan, được biết tới như một trong những đạo diễn thiên tài với khả năng tạo ra siêu phẩm bạc tỉ chất lượng.',
            like: false,
            like_number: 0,
            comment_number: 0,
        }
    ]
    render() {
        return (
            <div className = {`${style.movieNews}`}>
                <NewsList dataProvider = {this.data}/>
            </div>
        )
    }
}
