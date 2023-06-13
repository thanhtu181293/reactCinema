import axios from 'axios';
import { domainAPI } from '../config/config';

export class MovieManagementService {
    constructor() {

    }

    getMovieDetail = (filmId) => {
        return axios({
            url: `${domainAPI}/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${filmId}`,
            method: 'GET'
        })
    }
}

export const MovieMngService = new MovieManagementService();