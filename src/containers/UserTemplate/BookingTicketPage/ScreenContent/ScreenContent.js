import React, { Component } from 'react';
import style from './ScreenContent.module.scss';
import CountdownTimer from "react-component-countdown-timer";
import Swal from 'sweetalert2';
import { connect } from 'react-redux';
import {reLoadPage} from '../../../../redux/actions/BookingTicketAction'

class ScreenContent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            settings : {
                count: 5,
                hideDay: true,
                hideHours: true,
                color: 'red',
                onEnd: this.endTime
            }
        }
    }

    endTime = () => {
        Swal.fire({
            text: 'Đã hết thời gian giữ ghế. Vui lòng thực hiện đơn hàng trong thời hạn 5 phút.',
            willClose: this.onClose
    });
    }
    onClose = () => {
       window.location.reload();
    }

    render() {
        const settings = {
            count: 3000,
            hideDay: true,
            hideHours: true,
            color: 'red',
        };
        const {tenCumRap, gioChieu, ngayChieu, tenRap} = this.props.flimInfo;
        return (
            <div className={style.screencContent}>
                <div className="d-flex justify-content-between screencContent_areas">
                    <div className="screencContent__info">
                        <div className="screencContent__logo">
                            <img className="img-fluid" src="https://s3img.vcdn.vn/123phim/2018/09/9b240f96a233bb43203ee514a21a6004.png" />
                        </div>
                        <div className="screencContent__flim">
                            <p className = "flim-text">
                                <span>{tenCumRap != undefined ? String(tenCumRap).split('-')[0] : ''}</span>
                                <span className = "cinena-name">{tenCumRap != undefined ? '- ' + String(tenCumRap).split('-')[1] : ''}</span>
                            </p>
                            <p className = "hour-text">
                            {gioChieu != undefined ? gioChieu + ' - ' + ngayChieu + ' - ' + tenRap : ''}
                            </p>
                        </div>
                    </div>

                    <div className="time-left">
                        <p className = "time-left--text m-0">
                            thời gian giữ ghế
                        </p>
                        <h3 className = "time-left--hour text-center">
                            <CountdownTimer {...settings}  onEnd={() => this.endTime()} />
                        </h3>
                    </div>
                </div>
                <div className = "total">Tổng cộng: {(this.props.total).toLocaleString()} đ</div>
                <div className="sreenImg">
                    <img src="./images/screen.png" alt=""/>
                </div>
            </div>

        )
    }
}

const mapStatetoProps = (state) => {
    return ({
        total: state.BookingTicketReducer.total,
        flimInfo: state.BookingTicketReducer.flimInfo,
    })
}
export default connect(mapStatetoProps, null)(ScreenContent);