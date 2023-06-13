import React, { Component } from 'react';
import Seat from '../SeatList/Seat/Seat';
import style from './Description.module.scss'

export default class Description extends Component {
    render() {
        const seat = {
            tenGhe: '',
            inActive: true,
            small: true
        }
        return ( 
            <div className = {style.description}>
                <div className="description__seat">
                    <Seat seat = {{...seat, loaiGhe: 'Thuong'}} inActive = {true}/>
                    <p>Ghế thường</p>
                </div>
                <div className="description__seat">
                    <Seat seat = {{...seat, selectingSeat: true}} inActive = {true}/>
                    <p>Ghế đang chọn</p>
                </div>
                <div className="description__seat">
                    <Seat seat = {{...seat, loaiGhe: 'Vip'}} inActive = {true}/>
                    <p>Ghế Vip</p>
                </div>
                <div className="description__seat">
                    <Seat seat = {{...seat, daDat: true,}} inActive = {true}/>
                    <p>Ghế đã đặt</p>
                </div>
            </div>
        )
    }
}
