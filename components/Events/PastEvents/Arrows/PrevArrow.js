import React from 'react';
import prevIcon from '../../../../public/icons/prev_icon.png'

const PrevArrow = ({onClick}) => {
    return (
        <button type="button" class="card_prev_arrow" onClick={onClick}><img src={prevIcon.src} /></button>
    );
};

export default PrevArrow;