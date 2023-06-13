import React, { useEffect } from 'react';
import Moment from 'react-moment';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Tab, TabPanel, Tabs, TabList } from "react-web-tabs";
import { getMovieShowTimeAxios } from '../../../../redux/actions/MovieShowTimeAction';

import "react-web-tabs/dist/react-web-tabs.css";
import style from './MovieShowTime.module.scss';


export default function MovieShowTime(props) {
    // giống như mapStateToProps lấy dữ liệu từ reducer
    let movieShowTimeInfo = useSelector(state => state.MovieShowTimeReducer.movieShowTimeInfo);

    // thay thế this.props.dispatch
    let dispatch = useDispatch();

    useEffect(() => {
        // dispatch action
        dispatch(getMovieShowTimeAxios());
    }, []);


    // render column danh sach cac loai rap
    let renderCinemaGroups = () => {
        return movieShowTimeInfo.map((item, index) => {
            return (
                <Tab className="cinemasGroup__item" tabFor={item.maHeThongRap} key={index} >
                    <img src={item.logo} alt={item.logo} />
                </Tab>
            );
        });
    };

    // render column ds rap chieu theo cum
    let renderCinema = (cinema) => {
        return cinema.map((item, index) => {
            return (
                <Tab className="cinemaItem" tabFor={item.maCumRap} key={index}>
                    <img className="cinema__image" src="https://s3img.vcdn.vn/123phim/2018/09/cgv-aeon-binh-tan-15380175062534.jpg" alt=""/>
                    <div className="cinema__info">
                        <span className="cinema__name">{item.tenCumRap}</span>
                        <span className="cinema__address">{item.diaChi}</span>
                        <span className="cinema__detail">
                            <Link to="#">chi tiết</Link>
                        </span>
                    </div>
                </Tab>
            );
        });
    }

    let renderFilm = (listFilm) => {
        return listFilm.map((phim, index) => {
            return (
                <div className="movieItem" key={index}>
                    <div className="movieInfo">
                        <img className="movieImage" src={phim.hinhAnh} alt={phim.hinhAnh} />
                        <div className="wrapInfo">
                            <p>
                                <span className="movieAgeType">C18</span>
                                <span className="movieName">{phim.tenPhim}</span>
                            </p>
                            <p className="movieTime">100 phút - TIX 7.5 - IMDb 7</p>
                        </div>
                        <div className="movieSessions">
                            <div className="movieListTime">
                                <div className="movieType">2D Digital</div>
                                <div className="movieSession">
                                    <a href="#" className="showTimeDetail">
                                        <span className="movie-time">18:05</span>
                                    </a>
                                    <a href="#" className="showTimeDetail">
                                        <span className="movie-time">18:05</span>
                                    </a>
                                    <a href="#" className="showTimeDetail">
                                        <span className="movie-time">18:05</span>
                                    </a>
                                    <a href="#" className="showTimeDetail">
                                        <span className="movie-time">18:05</span>
                                    </a>
                                    {/* {phim.lstLichChieuTheoPhim?.map((thongtin, index) => {
                                        if (thongtin.ngayChieuGioChieu.substring(0, 10) === "2019-01-01") {
                                            return (
                                                <Link to="#" className="showTimeDetail" key={index}>
                                                    <Moment className="movie-time" format="HH:mm">
                                                        {thongtin.ngayChieuGioChieu}
                                                    </Moment>
                                                </Link>
                                            );
                                        }
                                    })} */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        });
    }

    let renderlistMovies =(cinema) => {
        return cinema.map((item, index) => {
            return (
                <TabPanel tabId={item.maCumRap} key={index}>
                    <div className="movieShowTimeList scrollbarY">
                        {renderFilm(item.danhSachPhim)}
                    </div>
                </TabPanel>
            );
        });
    }

    // render column 2 & 3
    let renderCinemaAndShowTime = () => {
        return movieShowTimeInfo.map((cinema, index) => {
            return (
                <TabPanel tabId={cinema.maHeThongRap} key={index}>
                    <Tabs vertical>
                        <div className="row no-gutter">
                            <div className="col-md-5 col-lg-4">
                                <TabList className="listCinemas scrollbarY">
                                    {renderCinema(cinema.lstCumRap)}
                                </TabList>
                            </div>
                            <div className="col-md-7 col-lg-8">
                                {renderlistMovies(cinema.lstCumRap)}
                            </div>
                        </div>
                    </Tabs>
                </TabPanel>
            );
        });
    }

    return (
        <div className="container">
            <div className={style.movieShowTimeStyle}>
                <div className="movieShowTimeContent">
                    <Tabs vertical>
                        <div className="row no-gutter">
                            <div className="col-md-12 col-lg-1 columnFirst scrollbarY scrollbarX">
                                <TabList className="cinemasGroup">
                                    {renderCinemaGroups()}
                                </TabList>
                            </div>
                            <div className="col-md col-lg-11">
                                {renderCinemaAndShowTime()}
                            </div>
                        </div>
                    </Tabs>
                </div>
            </div>
        </div>
    )
}

