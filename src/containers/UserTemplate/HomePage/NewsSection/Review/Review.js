import React, { Component } from 'react';
import style from './Review.module.scss';
import NewsList from '../NewsList/NewsList';

export default class Review extends Component {
    data = [
        {
            imgUrl: './images/News/review-tan-tich-quy-am-relic-ba-the-he-va-moi-lien-ket-15965255784224.png',
            title: 'Review: Tàn Tích Quỷ Ám (Relic) - Ba thế hệ và mối liên kết',
            description: 'Điểm nhấn của phim kinh dị năm 2020 chính là Tàn Tích Quỷ Ám',
            like: false,
            like_number: 2,
            comment_number: 0,
        },
        {
            imgUrl: './images/News/review-dinh-thu-oan-khuat-ghost-of-war-15965120886610.png',
            title: 'Review: Dinh Thự Oan Khuất (Ghost Of War)',
            description: 'chưa đủ để đem khán giả trở lại phòng vé!',
            like: false,
            like_number: 0,
            comment_number: 0,
        },
        {
            imgUrl: './images/News/blackkklansman-coc-nuoc-lanh-de-nguoi-my-thuc-tinh-15910862294165.png',
            title: '‘BlacKkKlansman’ - cốc nước lạnh để người Mỹ thức tỉnh',
            description: 'Tác phẩm nhận đề cử Phim truyện xuất sắc tại Oscar 2019 của đạo diễn Spike Lee là một lát cắt nữa về nạn phân biệt chủng tộc - nỗi đau gây nhức ',
            like: false,
            like_number: 0,
            comment_number: 0,
        },
        {
            imgUrl: './images/News/review-tan-tich-quy-am-relic-ba-the-he-va-moi-lien-ket-15965255784224.png',
            title: 'Review: Tàn Tích Quỷ Ám (Relic) - Ba thế hệ và mối liên kết',
            description: 'Điểm nhấn của phim kinh dị năm 2020 chính là Tàn Tích Quỷ Ám',
            like: false,
            like_number: 2,
            comment_number: 0,
        },
        {
            imgUrl: './images/News/review-dinh-thu-oan-khuat-ghost-of-war-15965120886610.png',
            title: 'Review: Dinh Thự Oan Khuất (Ghost Of War)',
            description: 'chưa đủ để đem khán giả trở lại phòng vé!',
            like: false,
            like_number: 0,
            comment_number: 0,
        },
        {
            imgUrl: './images/News/blackkklansman-coc-nuoc-lanh-de-nguoi-my-thuc-tinh-15910862294165.png',
            title: '‘BlacKkKlansman’ - cốc nước lạnh để người Mỹ thức tỉnh',
            description: 'Tác phẩm nhận đề cử Phim truyện xuất sắc tại Oscar 2019 của đạo diễn Spike Lee là một lát cắt nữa về nạn phân biệt chủng tộc - nỗi đau gây nhức ',
            like: false,
            like_number: 0,
            comment_number: 0,
        },
        {
            imgUrl: './images/News/review-tan-tich-quy-am-relic-ba-the-he-va-moi-lien-ket-15965255784224.png',
            title: 'Review: Tàn Tích Quỷ Ám (Relic) - Ba thế hệ và mối liên kết',
            description: 'Điểm nhấn của phim kinh dị năm 2020 chính là Tàn Tích Quỷ Ám',
            like: false,
            like_number: 2,
            comment_number: 0,
        },
        {
            imgUrl: './images/News/review-dinh-thu-oan-khuat-ghost-of-war-15965120886610.png',
            title: 'Review: Dinh Thự Oan Khuất (Ghost Of War)',
            description: 'chưa đủ để đem khán giả trở lại phòng vé!',
            like: false,
            like_number: 0,
            comment_number: 0,
        },
        {
            imgUrl: './images/News/blackkklansman-coc-nuoc-lanh-de-nguoi-my-thuc-tinh-15910862294165.png',
            title: '‘BlacKkKlansman’ - cốc nước lạnh để người Mỹ thức tỉnh',
            description: 'Tác phẩm nhận đề cử Phim truyện xuất sắc tại Oscar 2019 của đạo diễn Spike Lee là một lát cắt nữa về nạn phân biệt chủng tộc - nỗi đau gây nhức ',
            like: false,
            like_number: 0,
            comment_number: 0,
        },
        {
            imgUrl: './images/News/review-dinh-thu-oan-khuat-ghost-of-war-15965120886610.png',
            title: 'Review: Dinh Thự Oan Khuất (Ghost Of War)',
            description: 'chưa đủ để đem khán giả trở lại phòng vé!',
            like: false,
            like_number: 0,
            comment_number: 0,
        },
    ]
    render() {
        return (
            <div className = {`${style.review}`}>
                <NewsList dataProvider = {this.data}/>
            </div>
        )
    }
}
