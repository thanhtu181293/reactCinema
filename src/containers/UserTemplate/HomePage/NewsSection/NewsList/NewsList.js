import React, { Component } from 'react';
import style from './NewsList.module.scss';
import News from '../News/News';

export default class NewsList extends Component {
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
        let {dataProvider} = this.props;
        return (
            <div className = {`${style.newsList} container`}>
                <div className="row mx-0">
                    <div className="col-12 col-sm-4 pr-0 order-sm-0 order-2">
                        <News type = "2" data = {dataProvider[0]}/>
                        <hr/>
                        <News type = "2" data = {dataProvider[1]}/>
                        <hr/>
                        <News type = "2" data = {dataProvider[2]}/>
                        <hr/>
                        <News type = "2" data = {dataProvider[3]}/>
                        <hr/>
                        <News type = "2" data = {dataProvider[4]}/>
                    </div>
                    <div className="col-12 col-sm-4 order-sm-1 order-0">
                        <News center_box = {true} data = {dataProvider[5]}/>
                    </div>
                    <div className="col-12 col-sm-4 order-sm-2 order-1">
                        <News className = "mb-2" type = "1" data = {dataProvider[6]}/>
                        <News type = "1" data = {dataProvider[7]}/>
                    </div>
                </div>
            </div>
        )
    }
}
