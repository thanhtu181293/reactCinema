import React, { Component } from 'react';
import style from './CommingSoonFlim.module.scss';
import moment from 'moment';
import 'moment/locale/vi'

export default class Commingsoonflim extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        let {title, releaseDate, imgUrl} = this.props.dataProvider;
        moment.locale('vi');
        return (
            <div className={`${style.commingSoonFlim}`}>
                <div className="commingSoonFlim__card">
                        <div className="commingSoonFlim__img">
                            <div className="commingSoonFlim__overlay"></div>
                            <img src={imgUrl} alt="" />
                        </div>
                        <div className="commingSoonFlim__content">
                            <p className="commingSoonFlim__content--title">
                               {title}
                        </p>
                            <p className="commingSoonFlim__content--release_date">
                               {moment(releaseDate).format('Do MMMM YYYY')}
                        </p>
                        </div>
                </div>
            </div>
        )
    }
}
