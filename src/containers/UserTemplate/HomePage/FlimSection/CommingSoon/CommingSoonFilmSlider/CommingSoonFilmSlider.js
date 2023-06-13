import React, { Component } from 'react'
import Slider from "react-slick";
import style from './CommingSoonFilmSlider.module.scss';
import moment from 'moment';
import 'moment/locale/vi';
import * as Utils from '../../../../../../assets/utils/utils';
import { connect } from 'react-redux';

class CommingSoonFilmSlider extends Component {
    constructor(props) {
        super(props)
    }

    playTrainer = (event) => {
        event.preventDefault();
        this.props.dispatch({
            type: 'SHOW_TRAILER_POPUP',
            src: this.props.dataProvider.trailerUrl
        })
    }

    render() {
        let {type, title, description, starNumber, releaseDate, imgUrl} = this.props.dataProvider;
        moment.locale('vi');
        return (
            <div className={style.commingSoonSlider}>
                <div className="commingSoonSlider__area">
                    <div className="container h-100">
                        <h3>PHIM SẮP CHIẾU</h3>
                        <div className="row h-100 align-item-center">
                            <div className="col-6 col-md-8 commingSoonSlider__area--left">
                                <p className = "commingSoonSlider__area--type">{type}</p>
                                <h4 className = "commingSoonSlider__area--title">{title}</h4>
                                <div className = "commingSoonSlider__info">
                                    <div className = "commingSoonSlider__info--star">
                                        {Utils.setStar(starNumber)}
                                    </div>
                                    <div className="commingSoonSlider__info--calendar">
                                        <i className="fa fa-calendar-alt mx-2"></i>
                                        <span className="date">{moment(releaseDate).format('Do MMMM YYYY')}</span>
                                    </div>
                                </div>
                                <p className= "commingSoonSlider__description">{description}</p>
                                <p className = "commingSoonSlider__moreinfo">
                                    <a href="">
                                        XEM THÊM
                                        <i className="fa fa-angle-right"></i>
                                    </a>
                                </p>
                            </div>
                            <div className="col-6 col-md-4 commingSoonSlider__area--right">
                                <div className="commingSoonSlider__img">
                                    <a href="" onClick = {this.playTrainer}
                                      data-toggle="modal" data-target="#trainerModal" >
                                        <div className="overlay"></div>
                                        <img src= {imgUrl} alt=""/>
                                        <i className="fa fa-play"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(null)(CommingSoonFilmSlider)
