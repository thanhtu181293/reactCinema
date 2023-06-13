import React, { Component } from 'react'
import NowShowingFlimList from './NowShowing/NowShowingFlimList/NowShowingFlimList';
import FimCommingSoonList from './CommingSoon/CommingSoonFimList/CommingSoonFimList';
import Trailerpopup from '../TrailerPopup'
import { getFilmLists } from '../../../../redux/actions/FilmSectionReducerAction';
import { connect } from 'react-redux';

class Filmsection extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
           <>
                <NowShowingFlimList />
                <FimCommingSoonList />
                <Trailerpopup/>
           </>
        )
    }

    componentDidMount = () => {
        this.props.dispatch(getFilmLists());
    }
}

export default connect(null)(Filmsection)