import React, { Component } from 'react';
import style from './NowShowingFilm.module.scss';
import { connect } from 'react-redux';
import {NavLink} from "react-router-dom"; 

class Film extends Component {
    constructor(props) {
        super(props)

        this.state = {
        }
    }

    setStar = (number) => {
        let imgArr = [];
        for(let i=0; i< Math.floor(number); i++) {
            let img = <img key = {i} className = 'd-inline smallStar' src="./images/films/star1.png"/>
            imgArr = [...imgArr, img];
        }
        if (Math.floor(number) < number + 1) {
            let img = <img key = {number} className = 'd-inline smallStar' src="./images/films/star1.2.png"/>
            imgArr = [...imgArr, img];
        }
        return imgArr;
    }

    playTrainer = (event) => {
        event.preventDefault();
        this.props.dispatch({
            type: 'SHOW_TRAILER_POPUP',
            src: this.props.dataProvider.trailerUrl
        })
    }

    render() {
        console.log(this.props.dataProvider);
        let {title, infoFilm, imgUrl, point, starNumber, hotFilm, ageType, maPhim} = this.props.dataProvider;
        return (
            <div className = {style.film}>
              {hotFilm ? (
                  <div className="film__hot">
                    <img src="./images/films/film_type_1.png" alt=""/>
                  </div>
                  ): ''
              }
              <NavLink to={`/phim/${maPhim}`} className ="filmDetail" style = {{backgroundImage: `url(${imgUrl})`}} >
                  <div className = "filmThumbnail" >
                        <span className = "film__avgPoint">
                          <p className = "avgpoint m-0">
                              {point}
                          </p>
                          <p className = "m-0">
                              {this.setStar(starNumber)}
                          </p>
                        </span>
                  </div>
                  <div className = "film__hoverInfo">
                  </div>
                  <div className="film__playButton">
                    <button type="button" className = "playButton" onClick = {this.playTrainer}
                        data-toggle="modal" data-target="#trainerModal" >
                            <span>
                                <i className="fa fa-play"></i>
                            </span>
                        </button>
                  </div>
              </NavLink>
              <div className = "fimInfo">
                  <div className="nameFilm--noHover">
                        <span className = "ageType">{ageType}</span>
                        <span className = "filmTitle ml-2">{title}</span>
                  </div>
                  <div className="nameFilm--hover">
                    <NavLink to={`/phim/${maPhim}`} className = "buyNow">MUA VÉ</NavLink>
                  </div>
              </div>
            </div>
        )
    }
}

export default connect(null)(Film)
