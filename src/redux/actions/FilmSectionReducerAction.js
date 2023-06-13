import axios from 'axios';
import {GET_FILM_LIST} from '../contants/FilmSectionReducerConstant'

export const getFilmLists = () => {
    return dispatch => {
        axios (
            {
                method: 'GET',
                url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP04',
            }
        ).then(res => {
            dispatch({
                type: GET_FILM_LIST,
                data: res.data
            })
        }).catch(err => {
            console.log(err);
        })
    }
}