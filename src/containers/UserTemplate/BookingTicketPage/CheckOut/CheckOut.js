import { event } from 'jquery';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import style from './CheckOut.module.scss';
import {comfirm} from '../../../../redux/actions/BookingTicketAction'
import $ from 'jquery'

class CheckOut extends Component {
    constructor(props) {
        super(props);
        this.state = {
            radioCheck: '',
            radioValue: '',
            isActiveBtn: false,
            dataRegister: {
                email: '',
                phone: ''
            },
            errorRegister: {
                email: '',
                phone: ''
            }
        }
    }

    onType = (event) => {
        let emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
        let phonePattern = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
        let err = '';
        switch (event.target.name) {
            case 'email': {
                if (!event.target.value.match(emailPattern)) {
                    err = 'Email không hợp lệ'
                }
                this.setState({
                    emailActive: String(event.target.value).length > 0,
                    errorRegister: {
                        ...this.state.errorRegister,
                        email: err
                    },
                    dataRegister: {
                        ...this.state.dataRegister,
                        email: event.target.value
                    },
                })
                break;
            }
            case 'phone': {
                if (!event.target.value.match(phonePattern)) {
                    err = 'Số điện thoại không hợp lệ'
                }
                this.setState({
                    phoneActive: String(event.target.value).length > 0,
                    errorRegister: {
                        ...this.state.errorRegister,
                        phone: err
                    },
                    dataRegister: {
                        ...this.state.dataRegister,
                        phone: event.target.value
                    },
                })
                break;
            }
        }
    }
    renderSeatSelected = () => {
       return this.props.seatSelected.map((item, index) => {
            return (
                <span className="mr-2" key = {index}>{item.seatNameDisplay}</span>
            )
        })
    }
    checkRadioHandle = (value, label) => {
        this.setState({
            radioCheck: value,
            radioValue: label
        })
    }

    checkInActivebtn() {
        if (this.props.seatSelected.length > 0 
            && this.state.errorRegister.email == '' & this.state.errorRegister.phone == ''
            && this.state.dataRegister.email != '' & this.state.dataRegister.phone != ''
            && this.state.radioCheck != '') {
                return true
            }
        return false;
    }

    checkOut = () => {
        window.addEventListener('RESET', this.reset);
        $('body').addClass('modal-checkout-open');
        this.props.dispatch(comfirm({
                ...this.state.dataRegister,
                checkOutMethod: this.state.radioValue
            }
        ));
    }
    reset = () => {
        window.removeEventListener('RESET', this.reset);
        this.setState({
            radioCheck: '',
            radioValue: '',
            isActiveBtn: false,
            dataRegister: {
                email: '',
                phone: ''
            },
            errorRegister: {
                email: '',
                phone: ''
            }
        });
    }
    render() {
        console.log('render');
        const {email, phone} = this.state.dataRegister;
        return (
            <div className={style.checkout}>
                <div className="checkout-area">
                    <div className="checkout-info">
                        <div className="total-price">
                            <h2>{(this.props.total).toLocaleString()} đ</h2>
                        </div>
                        <div className="film-info">
                            <p className="film-title">
                                Greenland: Thảm Hoạ Thiên Thạch
                        </p>
                            <p className="cinema-name mb-0">
                                DDC - Đống Đa
                        </p>
                            <p className="cinema-hour">
                                Hôm nay 20/09/2020 - 21:25 - RẠP 2
                        </p>
                        </div>
                        <div className="seat-info">
                            <div className="seat-name">
                                <span className="mr-2">Ghế</span>
                                {this.renderSeatSelected()}
                            </div>
                            <div className="price">
                            {(this.props.total).toLocaleString()} đ
                        </div>
                        </div>
                        <div className="checkout-form form-group">
                            <div className={`checkout-form-area ${this.state.emailActive ? 'has-text' : ''}`}>
                                <input id="email" name="email" className="checkout-input form-control" type="text" 
                                value = {email}
                                onChange={this.onType}
                                />
                                <label className="checkout-label" htmlFor="email">E-Mail</label>
                            </div>
                            <span className = "error-input">{this.state.errorRegister.email}</span>
                        </div>
                        <div className="checkout-form form-group">
                            <div className={`checkout-form-area ${this.state.phoneActive ? 'has-text' : ''}`}>
                                <input id="phone" name="phone" className="checkout-input form-control" type="text" 
                                value = {phone}
                                onChange={this.onType}
                                />
                                <label className="checkout-label" htmlFor="phone">Số điện thoại</label>
                            </div>
                            <span className = "error-input">{this.state.errorRegister.phone}</span>
                        </div>
                        <div className="checkout-promotion">
                            <div className="promotion-form">
                                <input id="promotion" name="promotion" className="promotion-input form-control"
                                    type="text" placeholder="Nhập tại đây..." />
                                <label className="promotion-label" htmlFor="promotion">Mã giảm giá</label>
                            </div>
                            <div className="promotion-btn">
                                <button className="btn btn-success">Áp dụng</button>
                            </div>
                        </div>
                        <div className="checkout-medthod">
                            <label htmlFor="" className="checkout-medthod--label">Hình thức thanh toán</label>
                            <p className="checkout-medthod-err d-none">Vui lòng chọn ghế để hiển thị phương thức thanh toán phù hợp.</p>
                            <div className={`checkout-medthod__select ${this.props.seatSelected.length == 0 ? 'd-none' : ''}`}>
                                <div className="chooseethod">
                                    <input type="radio" checked = {this.state.radioCheck === 'ZAlOPAY'} value="ZAlOPAY" 
                                    onChange = {() => {this.checkRadioHandle('ZAlOPAY', 'Thanh toán qua ZaloPay')}} />
                                    <img src="./images/zalo.jpg" alt="" />
                                    <div className="d-flex  align-items-center method-title">
                                        <p>Thanh toán qua ZaloPay</p>
                                    </div>
                                </div>
                                <div className="chooseethod">
                                    <input type="radio" checked = {this.state.radioCheck === 'CCPAY'} value="CCPAY" 
                                    onChange = {() => {this.checkRadioHandle('CCPAY', 'Visa, Master, JCP')}}/>
                                    <img src="./images/ccCard.png" alt="" />
                                    <div className="d-flex align-items-center method-title">
                                        <p>Visa, Master, JCP</p>
                                    </div>
                                </div>
                                <div className="chooseethod">
                                    <input type="radio" checked = {this.state.radioCheck === 'ATMPAY'} value="ATMPAY"
                                     onChange = {() => {this.checkRadioHandle('ATMPAY', 'ATM nội địa')}}/>
                                    <img src="./images/ccCard.png" alt="" />
                                    <div className="d-flex align-items-center method-title">
                                        <p>ATM nội địa</p>
                                    </div>
                                </div>
                                <div className="chooseethod">
                                    <input type="radio" checked = {this.state.radioCheck === 'STORES'} value="STORES"
                                    onChange = {() => {this.checkRadioHandle('STORES', 'Thanh toán tại cửa hàng tiện ích')}}/>
                                    <img src="./images/store.png" alt="" />
                                    <div className="d-flex align-items-center method-title">
                                        <p>Thanh toán tại cửa hàng tiện ích</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pay-area">
                        <div className="pay-area--notice">
                            <p>Vé đã mua không thể đổi hoặc hoàn tiền</p>
                            <p>Mã vé sẽ được gửi qua tin nhắn ZMS (tin nhắn Zalo) và Email đã nhập</p>
                        </div>
                        <div className = "pay-display">
                            <div className = "pay-price px-3">
                                {this.renderSeatSelected()}
                            </div>
                            <button className={`pay-btn ${this.checkInActivebtn() ? 'active': ''}`}
                            onClick = {() => this.checkOut()}
                            data-toggle="modal" data-target="#checkOutPopUp"
                            data-backdrop="static" data-keyboard="false"
                            >
                                Đặt vé
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStatetoProps = (state) => {
    return {
        seatSelected : state.BookingTicketReducer.seatSelected,
        total: state.BookingTicketReducer.total
    }
}

export default connect(mapStatetoProps)(CheckOut)