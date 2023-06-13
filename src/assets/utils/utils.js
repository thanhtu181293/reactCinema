import React, { Component }  from 'react';
export const setStar = (number) => {
    let imgArr = [];
    for(let i=0; i< Math.floor(number); i++) {
        let img = <img key = {i} className = 'd-inline smallStar' src="./img/Films/star1.png"/>
        imgArr = [...imgArr, img];
    }
    if (Math.floor(number) < number) {
        let img = <img key = {number+1} className = 'd-inline smallStar' src="./img/Films/star1.2.png"/>
        imgArr = [...imgArr, img];
    }
    return imgArr;
}

export const isNullorUnDefined = (value) =>{
    if (value == undefined || value === null) {
        return true;
    }
    return false;
}