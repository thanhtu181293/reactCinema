import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Tab, TabPanel, Tabs, TabList } from "react-web-tabs";
import moment from 'moment';
import "react-web-tabs/dist/react-web-tabs.css";
import style from './MovieDetailShowTime.module.scss';

export default class MovieDetailShowTime extends Component {

    constructor(props) {
        super(props);
    }

    createShowTimeList = (arr, field) => {
        return arr.reduce((newArr, obj) => {
            
            let key = moment(obj[field]).format('DD-MM');
            if (!newArr[key]) {
                newArr[key] = [];
            }
            newArr[key].push(obj);

            return newArr;
        }, []);
    }

    renderCinemaSystem = () => {
        return this.props.film.heThongRapChieu?.map((cinema, index) => {
            return (
                <Tab className="cinemasGroupItem" tabFor={cinema.maHeThongRap} key={index}>
                    <div className="cinemasGroupItemFlex">
                        <img className="cinemaImg" src={cinema.logo} alt={cinema.logo} />
                        <span className="cinemaName">{cinema.tenHeThongRap}</span>
                    </div>
                </Tab>
            );
        });
    }

    renderCinemaDetail = () => {
        return this.props.film.heThongRapChieu?.map((cinemaGroup, index) => {
            return (
                <TabPanel tabId={cinemaGroup.maHeThongRap} key={index} >
                    <Tabs>
                        <TabList className="listDayOfWeek">
                            {
                                cinemaGroup.cumRapChieu?.map((cinema) => {
                                    return this.renderCinemaTabList(cinema)
                                })
                            }
                        </TabList>
                        {
                            cinemaGroup.cumRapChieu?.map((cinema) => {
                                return this.renderCinemaTabPanel(cinema)
                            })
                        }
                    </Tabs>
                </TabPanel>
            );
        });
    }

    renderCinemaTabList = (cinema) => {
        const showTimeList = this.createShowTimeList(cinema.lichChieuPhim, 'ngayChieuGioChieu');
        return Object.keys(showTimeList).map((key, index, arr) => {
            // do something with obj[key]
                return (
                    <Tab className="dateSelect" tabFor={key} key={index}>
                        <p>{moment(key).format('dddd')}</p>
                        <p>{moment(key).format('DD/MM')}</p>
                    </Tab>
                )
        });
    }

    renderCinemaTabPanel = (cinema) => {
        const showTimeList = this.createShowTimeList(cinema.lichChieuPhim, 'ngayChieuGioChieu');
        return Object.entries(showTimeList).map(([key, value], index) => {
            // do something with obj[key]
            return (
                <TabPanel tabId={key} key={index}>
                    <div className="movieItem">
                        <div className="movieInfo">
                            <img className="movieImage" src="./images/cinema.jpg" alt="" />
                            <div className="wrapInfo">
                                <p>
                                    <span className="movieName">{cinema.tenCumRap}</span>
                                </p>
                                <p className="movieTime">L3-Bitexco Icon 68, 2 Hải Triều, Q.1</p>
                            </div>
                            <div className="movieSessions">
                                <div className="movieListTime">
                                    <div className="movieSession">
                                        {
                                            value.map((info, i) => {
                                                return (
                                                    <NavLink to="#" className="showTimeDetail" key={i}>
                                                        <span className="movie-time">{moment(info.ngayChieuGioChieu).format('hh:mm')}</span>
                                                    </NavLink>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </TabPanel>
            )
        });
    }

    render() {
        return (
            <div className="container">
                <div className={style.movieDetailShowTimeStyle}>
                    <div className="movieDetailShowTimeContent">
                        <Tabs forceRenderTabPanel vertical className="vertical-tabs">
                            <div className="row no-gutter">
                                <div className="col-md-4 columnFirst">
                                    <TabList className="cinemasGroup">
                                        {this.renderCinemaSystem()}
                                    </TabList>
                                </div>
                                <div className="col-md-8 columnSecond">
                                    { this.renderCinemaDetail() }
                                </div>
                            </div>
                        </Tabs>
                    </div>
                </div>
            </div>
        )
    }
}
