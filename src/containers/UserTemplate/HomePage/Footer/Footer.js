import React, { Component } from 'react'
import footerStyle from './Footer.module.scss'

export default class Footer extends Component {
    render() {
        return (
            <div className={footerStyle.footer}>
                <div className="footer__main">
                    <div className="container">
                        <div className="row">
                            <div className="col-6 col-md-3">
                                <h3>GIỚI THIỆU</h3>
                                <p><a href="#">FAQs</a></p>
                                <p><a href="#">Give us feedback</a></p>
                                <p><a href="#">Contact us</a></p>
                            </div>
                            <div className="col-6 col-md-3">
                                <h3>GÓC ĐIỆN ẢNH</h3>
                                <p><a href="#">About us</a></p>
                                <p><a href="#">Find us</a></p>
                                <p><a href="#">Schedule</a></p>
                                <p><a href="#">News</a></p>
                            </div>
                            <div className="col-6 col-md-3">
                                <h3>HỖ TRỢ</h3>
                                <p><a href="#">Terms &amp; Conditions</a></p>
                                <p><a href="#">Privacy policy</a></p>
                                <p><a href="#">Cookie policy</a></p>
                            </div>
                            <div className="col-6 col-md-3">
                                <h3>KẾT NỐI GP04 CINEMA</h3>
                                <button><i className="fab fa-facebook-f" /></button>
                                <button><i className="fab fa-twitter" /></button>
                                <button><i className="fab fa-google-plus-g" /></button> 
                                <h3>DOWNLOAD</h3>
                                <button><i class="fab fa-apple"></i></button>
                                <button><i class="fab fa-android"></i></button>
                                <button><i class="fab fa-google-play"></i></button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 text-muted py-3">
                                <p>2017 © Movie Star / Web design by Klever media</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
