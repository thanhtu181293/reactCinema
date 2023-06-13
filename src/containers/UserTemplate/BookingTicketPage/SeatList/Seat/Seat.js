import React, { Component } from 'react';
import { connect } from 'react-redux';
import style from './Seat.module.scss';
import {selectSeat} from '../../../../../redux/actions/BookingTicketAction'
import Swal from 'sweetalert2';
const COLUMN_NUMBER = 12;

class Seat extends Component {
    constructor (props) {
        super(props);
        this.state = {
            value: 1,
            isSelect: false,
            isRemove: false,
        }
    }
    rowSeatName = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', "M", 'N' ];
    handleClick = () => {
        // If seat was selected
        if (this.props.seat.daDat) {
            return;
        }
        const index = this.props.seatSelected.findIndex(ele=> ele.seatInfo.tenGhe == this.props.seat.tenGhe);
        // If count of selected seat > 10
        if (this.props.seatSelected.length >= 10) {
            if (index < 0) {
                Swal.fire('Bạn không thể chọn quá 10 ghế');
                return;
            }
        }
        const tenGhe = this.props.seat.tenGhe;
        const seatNumber = this.convertSeatName(tenGhe);
        if (seatNumber > 0 && seatNumber < COLUMN_NUMBER - 1 
            && this.props.seatSelected.length > 0
            && !this.state.isSelect) {
            let isValid = false;
            const index = this.props.listTicket.findIndex(ele => ele.maGhe === this.props.seat.maGhe);
            const preSeat = index > 0 ? this.props.listTicket[index - 1] : null;
            const nextSeat = index < this.props.listTicket.length ? this.props.listTicket[index + 1] : null;
            const upSeat = index > 0 ? this.props.listTicket[index - 12]: null;
            const downSeat = index < this.props.listTicket.length - 12 ?  this.props.listTicket[index + 12] : null;
            let tempSeat;
            // next
            if (nextSeat != null) {
                if (this.props.seatSelected.findIndex(ele => (ele.seatInfo.maGhe === nextSeat.maGhe)) >= 0) {
                    isValid = true;
                } else if (nextSeat.daDat) {
                    for (let i = index + 2; i < (COLUMN_NUMBER * (Math.floor(index/COLUMN_NUMBER) + 1)); i++) {
                        if (i >= this.props.listTicket.length) {
                            break;
                        }
                        tempSeat = this.props.listTicket[i];
                        if (tempSeat.daDat) {
                            continue;
                        }
                        if (this.props.seatSelected.findIndex(ele => (ele.seatInfo.maGhe === tempSeat.maGhe)) >= 0) {
                            isValid = true;
                            break; 
                        } else {
                            break; 
                        }
                    }
                }
            }
            // pre
            if(preSeat != null) {
                if (this.props.seatSelected.findIndex(ele => (ele.seatInfo.maGhe === preSeat.maGhe)) >= 0) {
                    isValid = true;
                } else if (preSeat.daDat) {
                    for(let i = index - 2; i > Math.floor(index/COLUMN_NUMBER); i--) {
                        tempSeat = this.props.listTicket[i];
                        if (tempSeat.daDat) {
                            continue;
                        }
                        if (this.props.seatSelected.findIndex(ele => (ele.seatInfo.maGhe === tempSeat.maGhe)) >= 0) {
                            isValid = true;
                            break;
                        } else {
                            break;
                        }
                    }
                }
            }
            //up 
            if (upSeat !=null) {
                if (this.props.seatSelected.findIndex(ele => (ele.seatInfo.maGhe === upSeat.maGhe)) >= 0) {
                    isValid = true;
                } else if (upSeat.daDat) {
                    for(let i = index - COLUMN_NUMBER; i >= index % COLUMN_NUMBER ; i -= COLUMN_NUMBER) {
                        tempSeat = this.props.listTicket[i];
                        if (tempSeat.daDat) {
                            continue;
                        }
                        if (this.props.seatSelected.findIndex(ele => (ele.seatInfo.maGhe === tempSeat.maGhe)) >= 0) {
                            isValid = true;
                            break;
                        } else {
                            break;
                        }
                    }
                }
            }

            //down
            if (downSeat !=null) {
                if (this.props.seatSelected.findIndex(ele => (ele.seatInfo.maGhe === downSeat.maGhe)) >= 0) {
                    isValid = true;
                } else if (downSeat.daDat) {
                    const count = index / COLUMN_NUMBER > Math.floor(this.props.listTicket.length / COLUMN_NUMBER) ? Math.floor(index / COLUMN_NUMBER) : (Math.floor(this.props.listTicket.length / COLUMN_NUMBER) - 1);
                    
                    for(let i = index + COLUMN_NUMBER; i < count * (index % COLUMN_NUMBER == 0 ?  COLUMN_NUMBER : index % COLUMN_NUMBER); i += COLUMN_NUMBER) {
                        tempSeat = this.props.listTicket[i];
                        if (tempSeat.daDat) {
                            continue;
                        }
                        if (this.props.seatSelected.findIndex(ele => (ele.seatInfo.maGhe === tempSeat.maGhe)) >= 0) {
                            isValid = true;
                            break;
                        } else {
                            break;
                        }
                    }
                }
            }

            if (!isValid) {
                Swal.fire('Bạn không thể để 1 ghế trống');
                return;
            }
        }
        this.props.dispatch(selectSeat(this.getSeatName(tenGhe), this.props.seat, !this.state.isSelect));
        if (!this.props.seat.daDat) {
            this.setState({
                isSelect: !this.state.isSelect,
                isRemove: (index >= 0)
            })
        }
    }

    handleBlur = () => {
        this.setState({
            isRemove: false
        })
    }

    convertSeatName =(name) => {
        if (name === '') return '';
        return name%COLUMN_NUMBER === 0 ? COLUMN_NUMBER : name%COLUMN_NUMBER;
    }

    getSeatName = (tenGhe) => {
        const seat_number = this.convertSeatName(tenGhe);
        const seat_row =  Math.floor((Number(tenGhe) - 1)/COLUMN_NUMBER);
        return String(this.rowSeatName[seat_row]) + String(seat_number);
    }

    renderSeat = (tenGhe, daDat) => {
        if (!daDat) {
            return (
                <span className ={`seat-value`}>
                    {this.convertSeatName(tenGhe)}
                </span>
            )
        } else {
            return (
                <span>
                    <i className="fa fa-times"></i>
                </span>
            )
        }
    }

    render() {
        const {isSelect, isRemove} = this.state;
        const {loaiGhe, tenGhe, daDat, inActive, selectingSeat, small} = this.props.seat;
        return (
            <div className = {style.seat}>
                <div className={`seat-area ${loaiGhe === 'Vip' ? 'vip-seat' : ''}
                ${isSelect ? 'selecting show-text': ''}
                ${daDat? 'no-click': ''}
                ${inActive ? 'in-active': ''}
                ${selectingSeat ? 'selecting-seat': ''}
                ${small ? 'small': ''}
                `}
                onClick = {() => inActive || this.handleClick()} 
                onMouseLeave = {() => inActive || this.handleBlur()}>
                    <span className = {`box-center ${daDat ? 'booked box-center-booked': ''} ${isRemove? 'is-remove': ''}`}>
                        {
                            this.renderSeat(tenGhe, daDat)
                        }
                    </span>
                    <span className = {`seat-border  ${daDat ? 'booked seat-border-booked': ''}  ${isRemove? 'is-remove': ''}`}></span>
                </div>
            </div>
        )
    }
}

const mapStatetoProps = (state) => {
    return {
        seatSelected : state.BookingTicketReducer.seatSelected,
        listTicket: state.BookingTicketReducer.listTicket,
        
    }
}

export default connect(mapStatetoProps, null)(Seat)
