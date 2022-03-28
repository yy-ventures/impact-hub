import React from 'react';
import nextIcon from '../../../../public/icons/next_icon.png'
import Slider from "react-slick";

const NextArrow = ({onClick}) => {
    return (
        <button type="button" class="card_next_arrow" onClick={onClick}><img src={nextIcon.src} /></button>
    );
};

export default NextArrow;