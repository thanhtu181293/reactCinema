import React, { Component } from 'react'
import carouselStyle from './Carousel.module.scss';
import CarouselForm from './CarouselForm';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import Footer from '../Footer/Footer';

export default class Carousel extends Component {
    render() {
        return (
            <div className={carouselStyle.Carousel}>
                <div className="carousel__Main">
                    <div id="carouselSlider" className="carousel__Slider carousel slide carousel-fade">
                        <ol className="container carousel-indicators">
                            <li data-target="#carouselSlider" data-slide-to={0} className="active" />
                            <li data-target="#carouselSlider" data-slide-to={1} />
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="./img/hero-1.jpg" className="d-block w-100" alt="..." />
                                <div className="container carousel__Slider--Content text-left text-light d-none d-sm-block">
                                    <p>ACTION, ADVENTURE, FANTASY</p>
                                    <h3><a href="#">End of the World: Part II</a></h3>
                                    <p>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum.</p>
                                    <div className="movieCarousel__play">
                                        <span className="rounded-circle border border-white p-3 text-white">PG</span>
                                        <button className="p-3 text-white">
                                            <i className="fa fa-play" /><span>PLAY TRAILER</span>
                                        </button>
                                    </div>
                                </div>
                                <div className="movieCarousel__play--tablet d-inline d-sm-none">
                                    <button className="rounded-circle p-3">
                                        <i className="fa fa-play" /><span></span>
                                    </button>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src="./img/hero-2.jpg" className="d-block w-100" alt="..." />
                                <div className="container carousel__Slider--Content text-left text-light d-none d-sm-block">
                                    <p>ACTION, ADVENTURE, FANTASY</p>
                                    <h3><a href="#">End of the World: Part II</a></h3>
                                    <p>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum.</p>
                                    <div className="movieCarousel__play">
                                        <span className="rounded-circle border border-white p-3 text-white">PG</span>
                                        <button className="p-3 text-white">
                                            <i className="fa fa-play" /><span>PLAY TRAILER</span>
                                        </button>
                                    </div>
                                </div>
                                <div className="movieCarousel__play--tablet d-inline d-sm-none">
                                    <button className="rounded-circle p-3">
                                        <i className="fa fa-play" /><span></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <CarouselForm/> */}
                </div>
            </div>
        )
    }
}
