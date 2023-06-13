import React, { Component } from 'react'
import Slider from "react-slick";
import style from './CommingSoonFimList.module.scss';
import Commingsoonflim from '../CommingSoonFlim/CommingSoonFlim';
import CommingSoonFilmSlider from '../CommingSoonFilmSlider/CommingSoonFilmSlider';
import { connect } from 'react-redux';

class FimCommingSoonList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nav1: null,
            nav2: null,
            isUpdNav: false,
        };

    }

    componentDidMount() {
        console.log('componentDidMount');
        this.setState({
          nav1: this.slider1,
          nav2: this.slider2
        });
    }
    componentDidUpdate() {
        if (!this.state.isUpdNav) {
            this.setState({
                nav1: this.slider1,
                nav2: this.slider2,
                isUpdNav: true
            });
        }
    }
    mapPropstoDataProvider = () => {
        const dataProvider = this.props.listFilm.map(item =>{
            return ({
                type: '',
                title : item.tenPhim,
                imgUrl:  item.hinhAnh,
                point: item.danhGia,
                starNumber: (item.danhGia * 5) /10,
                description: item.moTa,
                releaseDate: item.ngayKhoiChieu,
                trailerUrl: item.trailer
            })
        });
        dataProvider.splice(0,1);
        return dataProvider;
    }
    
    renderCommingSoonFilmSlider = (dataProvider) => {
        console.log('renderCommingSoonFilmSlider start');
        return dataProvider.map((item, index) => {
            return (
                <div key = {index}>
                    <CommingSoonFilmSlider dataProvider = {item}/>
                </div>
            )
        });
    }

    renderCommingSoonFilm = (dataProvider) => {
        return dataProvider.map((item, index) => {
            return (
                <div key = {index}
                     onClick ={()=> {this.slider1.slickGoTo(index != 0 ? index: dataProvider.length)}}>
                    <Commingsoonflim dataProvider = {item}/>
                </div>
            )
        })
    }

    render() {
        const settingsMain = {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            speed: 500,
            draggable: false,
            swipeToSlide: false,
            asNavFor: '.slider-nav',
        };

        const settingsThumbs = {
            slidesToShow: 5,
            slidesToScroll: 2,
            swipeToSlide: true,
            draggable: true,
            infinite: true,
            asNavFor: '.slider-for',
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 2,
                    }
                },
                {
                    breakpoint: 850,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 2,
                    }
                },
                {
                    breakpoint: 630,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                    }
                }
            ]
        }

        const dataProvider = this.mapPropstoDataProvider();
        console.log(dataProvider);
        return (
            <div className={`${style.fimCommingSoonList}`}>
                    <div>
                        <Slider
                            {...settingsMain}
                            asNavFor={this.state.nav1}
                            ref={slider => (this.slider1 = slider)}
                        >
                            {
                                this.renderCommingSoonFilmSlider(dataProvider)
                            }
                        </Slider>
                        <Slider className = "container"
                            {...settingsThumbs}
                            asNavFor={this.state.nav2}
                            ref={slider => (this.slider2 = slider)}
                        >
                            {this.renderCommingSoonFilm(dataProvider)}
                        </Slider>
                    </div>
            </div>
        )
    }
}

const mapStatetoProps = (state) => {
    return ({
        listFilm: state.FilmSectionReducer.listFilm
    });
}

export default connect(mapStatetoProps, null)(FimCommingSoonList)