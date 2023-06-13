import React, { Component } from 'react'
import MovieShowTime from './MovieShowTime/MovieShowTime';
import Filmsection from './FlimSection/FilmSection';
import NewsSection from './NewsSection/NewsSection';
import Menu from './Menu/Menu';
import Carousel from './Carousel/Carousel';

export default class HomePage extends Component {
    render() {
        return (
            <div>
                <Carousel />
                <Filmsection />
                <MovieShowTime />
                <NewsSection />
            </div>
        )
    }
}
