import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import style from './CommingSoonPage.module.scss';

export default class CommingSoonPage extends Component {
    render() {
        return (
            <div className = {style.commingSoonPage}>
                <div className="overlay">
                    <h2>COMING SOON</h2>
                    <NavLink to="/">Home</NavLink>
                </div>
            </div>
        )
    }
}
