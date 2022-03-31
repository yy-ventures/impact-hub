import Link from 'next/link';
import React from 'react';
import Button from '../Button/Button';

const EventCommonCard = ({ title, type, date, time, summary, thumb, id, btnText }) => {
    return (
        <div className='event_common_card'>
            <div className='event_common_card_header'><img src={thumb}/></div>
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
                <Link href='/stories/[id]' as={`/stories/${id}`}>
                    <a>
                        <Button text={btnText} type='secondary'/>
                    </a>
                </Link>
            </div>
        </div>
    );
};

export default EventCommonCard;