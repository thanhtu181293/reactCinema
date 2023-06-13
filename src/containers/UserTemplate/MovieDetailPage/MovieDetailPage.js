import React, { useState, useEffect } from 'react';
import { Tab, TabPanel, Tabs, TabList } from "react-web-tabs";
import PercentageCircle from './PercentageCircle/PercentageCircle';

import "react-web-tabs/dist/react-web-tabs.css";
import style from './MovieDetailPage.module.scss';
import MovieDetailShowTime from './MovieDetailShowTime/MovieDetailShowTime';
import { MovieMngService } from '../../../services/MovieManagementService';

export default function MovieDetailPage(props) {

    let [movieDetail, setMovieDetail] = useState({
        cinemaSystem: []
    });

    useEffect(() => {
        // let {film} = props.match.params;
        let filmId = 2528;

        MovieMngService.getMovieDetail(filmId).then(
            res => {
                let listFilm = res.data;
                console.log(listFilm);
                setMovieDetail(listFilm);
            }
        ).catch(
            err => {
                console.log(err.response.data);
            }
        )
    }, []);

    return (
        <div>
            <div className={style.movieDetailStyle}>
                <div className="movieDetailContent">
                    <div className="detailMain">
                        <div className="detailTop">
                            <div className="detailTop__content">
                                <div className="detailTop__blur">
                                    <img className="detailTop__poster" src="https://s3img.vcdn.vn/123phim/2020/08/tenet-15984144130532.png" alt="" />
                                </div>
                                <div className="detailTop__gradient"></div>

                                <div className="detailTop_movieInfo">
                                    <div className="container">
                                        <div className="row justify-content-center">
                                            <div className="col-4 movieInfo__poster">
                                                <div className="imagePoster" style={{ backgroundImage: "url('https://s3img.vcdn.vn/mobile/123phim/2020/09/ac-nu-bloodlust-lady-c18-15994496809693_215x318.png')" }}>
                                                    <button className="btnPlayVideo">
                                                        <img src="./images/play-video.png" alt=""/>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="col-6 movieInfo__detailGroup">
                                                <div>
                                                    <span className="movieInfo__date">11.09.2020</span>
                                                    <br />
                                                </div>
                                                <div>
                                                    <span className="movieInfo__detail">
                                                        <span className="movieInfo__age">C18</span>
                                                        <span>Ác Nữ - Bloodlust Lady</span>
                                                    </span>
                                                </div>
                                                <div>
                                                    <span className="movieInfo__time">116 phút - 0 IMDb - 2D/Digital</span>
                                                </div>
                                                <button type="button" className="btn btnBuyTicket">Mua vé</button>
                                            </div>
                                            <div className="col-2 movieInfo_circleStar">
                                                <div className="circlePercent">
                                                    <PercentageCircle percent="7.2"/>
                                                </div>
                                                <div className="row starMain">
                                                    <img src="./images/star.png" alt=""/>
                                                    <img src="./images/star.png" alt=""/>
                                                    <img src="./images/star.png" alt=""/>
                                                    <img src="./images/star.png" alt=""/>
                                                    <img src="./images/star.png" alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="detailContent">
                            <div className="container">
                                <div className="detailContent__navMenu">
                                    <ul className="nav nav-tabs navMenuList" id="myTab" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <a className="nav-link active" id="showTime-tab" data-toggle="tab" href="#showTime" role="tab" aria-controls="showTime" aria-selected="true">Lịch Chiếu</a>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <a className="nav-link" id="info-tab" data-toggle="tab" href="#info" role="tab" aria-controls="info" aria-selected="false">Thông tin</a>
                                        </li>
                                    </ul>
                                    <div className="tab-content" id="myTabContent">
                                        {/* Lịch chiếu */}
                                        <div className="tab-pane fade show active" id="showTime" role="tabpanel" aria-labelledby="showTime-tab">
                                            <MovieDetailShowTime film={movieDetail}/>
                                        </div>

                                        {/* Thông tin */}
                                        <div className="tab-pane fade" id="info" role="tabpanel" aria-labelledby="info-tab">
                                            <div className="row">
                                                <div className="col-sm-6 col-xs-12 info__left">
                                                    <div className="row rowInfoLeft">
                                                        <p className="info__left_title">Ngày công chiếu</p>
                                                        <p className="info__left_data">11.09.2020</p>
                                                    </div>
                                                    <div className="row rowInfoLeft">
                                                        <p className="info__left_title">Đạo diễn</p>
                                                        <p className="info__left_data">Anggy Umbara, Bounty Umbara</p>
                                                    </div>
                                                    <div className="row rowInfoLeft">
                                                        <p className="info__left_title">Diễn viên</p>
                                                        <p className="info__left_data"></p>
                                                    </div>
                                                    <div className="row rowInfoLeft">
                                                        <p className="info__left_title">Thể loại</p>
                                                        <p className="info__left_data">kinh dị</p>
                                                    </div>
                                                    <div className="row rowInfoLeft">
                                                        <p className="info__left_title">Định dạng</p>
                                                        <p className="info__left_data">2D/Digital</p>
                                                    </div>
                                                    <div className="row rowInfoLeft">
                                                        <p className="info__left_title">Quốc gia SX</p>
                                                        <p className="info__left_data">Mỹ</p>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6 col-xs-12 info__right">
                                                    <div className="row rowInfoRight">
                                                        <p className="info__right_title">Nội dung</p>
                                                    </div>
                                                    <div className="row rowInfoRight">
                                                        <p className="info__right_content">
                                                            Cuộc báo thù đẫm máu của Maryam chết oan dưới sự hãm hại của những tên ác bá.
                                                            Khoác lên mình chiếc váy đỏ nữ oan hồn quyết tâm đuổi theo những gã đàn ông tồi đã cướp
                                                            đi mạng sống của cô vì đã bán rẻ danh dự của một người phụ nữ vì đồng tiền, dục vọng tầm thường.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
