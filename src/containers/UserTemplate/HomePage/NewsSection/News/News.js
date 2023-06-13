import React, { Component } from 'react';
import style from './News.module.scss';
import { NavLink } from 'react-router-dom';

export default class News extends Component {
    constructor(props) {
        super(props)

        this.state = {
        }
    }

    handleClickLike = () => {
        let { like, like_number } = this.state;
        this.setState({
            like_number: !like ? like_number + 1 : like_number - 1,
            like: !like
        })
    }
    static getDerivedStateFromProps = (props, state) => {
        if(state.title) {
            return;
        }
        return {...props.data};
    }

    render() {
        let type = (this.props.type != undefined) ? this.props.type : '0';
        let center_box = this.props.center_box ? true : false;
        return (
            <div className={`${style.cardNews} ${this.props.className}`}>
                {
                    type !== '2' ? (
                        <>
                            <NavLink to="/comming-soon">
                                <img className={`card-img-top mb-2 ${type === '1' ? 'small-img' : ''}`} src={this.state.imgUrl} alt="" />
                            </NavLink>
                            <div className="card-body">
                                <NavLink to="/comming-soon">
                                    <h4 className={`card-title title-overflow ${center_box ? 'center-box-title': ''} ${type === '1' ? 'smmall-text' : ''}`}>
                                        {this.state.title}
                                    </h4>
                                </NavLink>
                                <p className={`card-text ${center_box ? 'center-box-des': ''} ${type === '1' ? 'd-none' : ''}`}>
                                    {this.state.description}
                                </p>
                                <div className={`d-flex block-icon`}>
                                    <div className="like">
                                        <button className="like-btn" onClick={() => this.handleClickLike()}>
                                            <i className={`fa fa-thumbs-up mr-2 ${this.state.like ? 'like--click' : ''}`}></i>
                                        </button>
                                        <span className="like-count">{this.state.like_number}</span>
                                    </div>
                                    <div className="comment">
                                        <a className="comment-link mr-2" href="">
                                            <i className="fa fa-comment-alt"></i>
                                        </a>
                                        <span className="comment-count">{this.state.comment_number}</span>
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : (
                            <NavLink className = "short-card" to="/comming-soon">
                                <div className="row">
                                    <div className="col-4 m-0 pr-0">
                                        <img className="news-img" src={this.state.imgUrl} alt="" />
                                    </div>
                                    <div className="col-8">
                                        <h4 className="news-title title-overflow">{this.state.title}</h4>
                                    </div>
                                </div>
                            </NavLink>
                        )
                }
            </div>
        )
    }
}
