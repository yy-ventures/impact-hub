import React from 'react';
import Button from '../Button/Button';

const EventCommonCard = ({ title, type, date, time, summary, thumb }) => {
    return (
        <div className='event_common_card'>
            <div className='event_common_card_header'><img src={thumb.src}/></div>
            <div className={type ? 'event_common_card_body_center' : 'event_common_card_body'}>
                <div className={type ? 'event_common_card_body_center_title' : 'event_common_card_body_title'}>
                    <h3>{title}</h3>
                </div>
                <div className={type ? 'event_common_card_body_center_content' : 'event_common_card_body_content'}>
                    <p className={type ? 'event_common_card_body_center_content_date' : 'event_common_card_body_content_date'}>{date}</p>
                    <p className={type ? 'event_common_card_body_center_content_time' : 'event_common_card_body_content_time'}>{time}</p>
                    <p className='event_common_card_body_content_summary'>{summary}</p>
                </div>
            </div>
            <div className='event_common_card_footer'>
                <Button text='view' type='secondary'/>
            </div>
        </div>
    );
};

export default EventCommonCard;