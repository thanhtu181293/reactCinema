import React, { Component } from 'react'
import headerStyle from './Header.module.scss';

export default class Header extends Component {
    render() {
        return (
            <div className={headerStyle.header}>
                <div className="d-none d-sm-block">
                    <div className="container">
                        <div className="row header__content d-flex justify-content-around">
                            <div className="header__logo">
                                <a href="#">
                                    <img src="./img/hero-1.jpg" alt="" />
                                </a>
                            </div>
                            <div className="header__search">
                                <form action="">
                                    <input className="headerSearch_txt" type="text" name="" id="" placeholder="Tìm tên phim, diễn viên..." />
                                    <button className="headerSearch_btn" type="submit">
                                        <i class="fa fa-search"></i>
                                    </button>
                                </form>
                            </div>
                            <div className="header__login">
                                <i className="headerLogin__i fa fa-user" />
                                <a href="">Đăng Nhập</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}