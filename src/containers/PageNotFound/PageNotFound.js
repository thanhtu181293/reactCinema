import React, { Component } from 'react';
import style from './PageNotFound.module.scss'

export default class PageNotFound extends Component {
    render() {
        return (
            <div className={`${style.pageNotFound}`}>
                <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="error-template">
                            <h1>
                                Oops!</h1>
                            <h2>
                                404 Not Found</h2>
                            <div className="error-details">
                                Sorry, an error has occured, Requested page not found!
                            </div>
                            <div className="error-actions">
                                <a href="/" className="btn btn-primary btn-lg">
                                    <i className="fa fa-home"></i>
                                    Take Me Home 
                                </a>
                                <a href="/" className="btn btn-default btn-lg">
                                    <i className="fa fa-envelope"></i>
                                    Contact Support 
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
