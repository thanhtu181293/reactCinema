import axios from 'axios';
import {GET_TICKET_LIST, SELECT_SEAT, CONFIRM} from '../contants/BookingTicketConstant';

export const getTicketLists = (showTimesCode, booked = false) => {
    return dispatch => {
        axios (
            {
                method: 'GET',
                url: `https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${showTimesCode}`,
            }
        ).then(res => {
            dispatch({
                type: GET_TICKET_LIST,
                data: res.data,
                showTimesCode: showTimesCode,
                booked: booked
            })
        }).catch(err => {
            console.log(err);
        })
    }
}

export const selectSeat = (seatNameDisplay, seat, isSelect) => {
    return {
        type: SELECT_SEAT,
        seatNameDisplay: seatNameDisplay,
        seatInfo: seat,
        isSelect: isSelect
    }
}

export const comfirm = (data) => {
    return {
        type : CONFIRM,
        data: data
    }
}

export const bookSeats = (showTimesCode, data, dispatch) => {
    let danhSachVe = data.map(item => {
        return {
            maGhe: item.seatInfo.maGhe,
            giaVe: item.seatInfo.giaVe
        }
    });

    let params = {
        maLichChieu: showTimesCode,
        danhSachVe: danhSachVe,
        taiKhoanNguoiDung: 'testter'
    }
    axios (
        {
            method: 'POST',
            url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/DatVe',
            data: params,
            headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoidGVzdHRlciIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IktoYWNoSGFuZyIsIm5iZiI6MTYwMTY2MDUwMSwiZXhwIjoxNjAxNjY0MTAxfQ.w6LdR-WjOysUFf3QTtKwsmhBe-ydl4Z0Y3S9l3tXZU4',
            }
        }, 
    ).then(res => {
        dispatch(getTicketLists(showTimesCode, true));
    }).catch(err => {
        console.log(err);
    });
}