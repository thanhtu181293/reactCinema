import React, { Component } from 'react';
import { connect } from 'react-redux';
import style from './CheckOutPopup.module.scss';
import {bookSeats} from '../../../../redux/actions/BookingTicketAction';
import $ from 'jquery';
import Swal from 'sweetalert2';

class CheckOutPopup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showLoader: false,
            executeFlg: false
        }
    }
    renderSeatSelected = () => {
        return this.props.seatSelected.map((item, index) => {
             return (
                 <span className="mr-2" key = {index}>{item.seatNameDisplay}</span>
             )
         })
    }

    confirm = () => {
        window.addEventListener('CHECKOUT_FINISH', this.checkOutFinished);
        $('body').removeClass('modal-checkout-open');
        this.setState({
            showLoader: true,
            executeFlg: true,
        })
        bookSeats(this.props.showTimesCode, this.props.seatSelected, this.props.dispatch);
    }

    checkOutFinished = () => {
        this.setState({
            showLoader: false,
            executeFlg: false,
        })
        $('#checkOutPopUp').modal('toggle');
        window.removeEventListener('CHECKOUT_FINISH', this.checkOutFinished);
        Swal.fire({
            icon: 'success',
            title: 'Đặt vé thành công',
            showConfirmButton: false,
            timer: 1500
        })
        window.dispatchEvent(new Event('RESET', null));
    }

    onClose = () => {
        $('body').removeClass('modal-checkout-open');
    }

    render() {
        const {tenPhim, tenCumRap, diaChi} = this.props.flimInfo;
        const {email, phone} = this.props.userInfo;
        return (
            <div id="checkOutPopUp" className={`modal fade ${style.checkOutPopup}`} role="dialog">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h2>Xác nhận thông tin</h2>
                            <button type="button" className="close" data-dismiss="modal" onClick = {()=>this.onClose()} disabled = {this.state.executeFlg}>×</button>
                        </div>
                        <div className="modal-body">
                           <div className="checkOutPopUp-area">
                                <div className="film-info">
                                    <div className="row">
                                        <div className="col-4 left-area">
                                            <img src= {this.props.flimInfo.hinhAnh} alt=""/>
                                        </div>
                                        <div className="col-8  right-area">
                                            <p className ="film-name">
                                               {tenPhim}
                                            </p>
                                            <h2 className="cinema-name">
                                                <span>
                                                   {String(tenCumRap).split('-')[0]}
                                                </span>
                                                - {String(tenCumRap).split('-')[1]}
                                            </h2>
                                            <p className = "cinema-address">
                                                {diaChi}
                                            </p>
                                            <p className = "time d-flex">
                                                <span className = "label">Xuất chiếu: </span>
                                                <span>19:20 04/10</span>
                                            </p>
                                            <p className = "room d-flex">
                                                <span  className = "label">Phòng: </span>
                                                <span>RẠP 2</span>
                                            </p>
                                            <div className = "seats d-flex">
                                                <span  className = "label">Ghế: </span>
                                                <div className="d-flex seat-items">
                                                    {this.renderSeatSelected()}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className = "checkout-info mt-3">
                                    <p className = "checkout-label">Thông tin đặt vé</p>
                                    <hr/>
                                    <p className = "items">
                                        <span className = "label">Họ tên</span>
                                        <span>{email}</span>
                                    </p>
                                    <p className = "items">
                                        <span className = "label">Điện thoại:</span>
                                        <span>{phone}</span>
                                    </p>
                                    <p className = "items">
                                        <span className = "label">Email:</span>
                                        <span>{email}</span>
                                    </p>
                                    <p className = "items">
                                        <span className = "label">Hình thức thanh toán:</span>
                                        <span>{this.props.checkOutMethod}</span>
                                    </p>
                                    <p className = "items">
                                        <span className = "label">Tổng tiền:</span>
                                        <span>{this.props.total} đ</span>
                                    </p>
                                    <button className = "confirm-btn" onClick = {() => this.confirm()}>
                                        Xác nhận
                                    </button>
                                </div>
                                <div class={`loader ${!this.state.showLoader ? 'd-none' : ''}`}></div>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStatetoProps = (state) => {
    return {
        flimInfo: state.BookingTicketReducer.flimInfo,
        seatSelected : state.BookingTicketReducer.seatSelected,
        total: state.BookingTicketReducer.total,
        userInfo: state.BookingTicketReducer.userInfo,
        checkOutMethod:  state.BookingTicketReducer.checkOutMethod,
        showTimesCode: state.BookingTicketReducer.showTimesCode,
        executeFlg: state.BookingTicketReducer.executeFlg,
    }
}

export default connect(mapStatetoProps)(CheckOutPopup)