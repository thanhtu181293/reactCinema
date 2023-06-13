import React, { Component } from 'react';
import style from './NowShowingFlimList.module.scss';
import Film from '../NowShowingFilm/NowShowingFilm';
import Slider from "react-slick";
import { connect } from 'react-redux';
import { getFilmLists } from '../../../../../../redux/actions/FilmSectionReducerAction';


class NowShowingFlimList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filmList : [
                {
                    title: 'Mãi Bên Em - Endless - (C13)',
                    infoFilm: '100 phút',
                    imgUrl: '/./images/films/mai-ben-em-endless.png',ageType: 'C13',
                    point: 7.5,
                    starNumber: 3.5,
                    hotFilm: true,
                    trailerUrl: 'https://www.youtube.com/embed/50aEACmN5iI'
                },
                {
                    title: 'Cá Sấu Tử Thần - Water: Abyss - (C18)',
                    infoFilm: '100 phút',
                    imgUrl: '/./images/films/ca-sau-tu-than.png',
                    ageType: 'C18',
                    point: 8.2,
                    starNumber: 5,
                    trailerUrl: 'https://www.youtube.com/embed/wihfeV6sTfM'
                },
                {
                    title: 'Nội Chiến Siêu Anh Hùng - Captain America: Civil War (NC16) Captain America: Ci',
                    infoFilm: '147 phút',
                    imgUrl: '/./images/films/noi-chien-sieu-anh-hung.png',
                    ageType: 'C18',
                    point: 8.2,
                    starNumber: 5,
                    trailerUrl: 'https://www.youtube.com/embed/VdeuR-jUysg'
                },
                {
                    title: '',
                    infoFilm: '',
                    imgUrl: '/./images/films/ca-sau-tu-than.png',
                    ageType: 'C18',
                    point: 8.2,
                    starNumber: 5,
                    trailerUrl: 'https://www.youtube.com/embed/Nn-8OqGdgrA'
                },
                {
                    title: 'Nội Chiến Siêu Anh Hùng - Captain America: Civil War',
                    infoFilm: '147 phút',
                    imgUrl: '/./images/films/ca-sau-tu-than.png',
                    ageType: 'C18',
                    point: 8.2,
                    starNumber: 5,
                    trailerUrl: 'https://www.youtube.com/embed/Nn-8OqGdgrA'
                },
                {
                    title: 'Nội Chiến Siêu Anh Hùng - Captain America: Civil War (NC16) Captain America: Ci',
                    infoFilm: '147 phút',
                    imgUrl: '/./images/films/ca-sau-tu-than.png',
                    ageType: 'C18',
                    point: 8.2,
                    starNumber: 5,
                    trailerUrl: 'https://www.youtube.com/embed/Nn-8OqGdgrA'
                },
                {
                    title: 'Nội Chiến Siêu Anh Hùng - Captain America: Civil War (NC16) Captain America: Ci',
                    infoFilm: '147 phút',
                    imgUrl: '/./images/films/ca-sau-tu-than.png',
                    ageType: 'C18',
                    point: 8.2,
                    starNumber: 5,
                    trailerUrl: 'https://www.youtube.com/embed/Nn-8OqGdgrA'
                },
                {
                    title: 'Nội Chiến Siêu Anh Hùng - Captain America: Civil War (NC16) Captain America: Ci',
                    infoFilm: '147 phút',
                    imgUrl: '/./images/films/ca-sau-tu-than.png',
                    ageType: 'C18',
                    point: 8.2,
                    starNumber: 5,
                    trailerUrl: 'https://www.youtube.com/embed/Nn-8OqGdgrA'
                },
                {
                    title: 'Nội Chiến Siêu Anh Hùng - Captain America: Civil War (NC16) Captain America: Ci',
                    infoFilm: '147 phút',
                    imgUrl: '/./images/films/ca-sau-tu-than.png',
                    ageType: 'C18',
                    point: 8.2,
                    starNumber: 5,
                    trailerUrl: 'https://www.youtube.com/embed/Nn-8OqGdgrA'
                },
            ]
        }
    }

    mapPropstoDataProvider = () => {
        let dataProvider = this.props.listFilm.map((item) => {
            return ({
                title: item.tenPhim,
                infoFilm: '0 phút',
                imgUrl: item.hinhAnh,
                ageType: 'C18',
                point: item.danhGia,
                starNumber: (item.danhGia * 5) /10,
                trailerUrl: item.trailer
            })
        })
        return dataProvider;
    }

    renderFilm = () => {
        const dataProvider = this.mapPropstoDataProvider();

        return dataProvider.map((item, index) => {
            return (
                <div className="mb-5" key = {index}>
                    <Film dataProvider = {item}/>
                </div>
            )
        })
    }

    render() {
        const settings = {
            infinite: true,
            speed: 500,
            slidesPerRow: 4,
            rows: 2,
            className: "outline-none",
            responsive: [
                {
                    breakpoint: 1070,
                    settings: {
                        dots: true,
                        arrows: false,
                        slidesPerRow: 3,
                        rows: 2,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        dots: true,
                        arrows: false,
                        slidesPerRow: 2,
                        rows: 2,
                    }
                },
            ]
        };
        return (
          <div className= {style.filmList}>
             <div className="container filmList-container">
                 <h2 className= "filmList__title">PHIM ĐANG CHIẾU</h2>
                <Slider {...settings}>
                    {this.renderFilm()}
                </Slider>   
             </div>
          </div>
        )
    }
    // componentDidMount() {
    //     this.props.dispatch(getFilmLists());
    // }
}

const mapStatetoProps = (state) => {
    return ({
        listFilm: state.FilmSectionReducer.listFilm
    });
}
export default connect(mapStatetoProps)(NowShowingFlimList)
