import Link from "next/link";
import React from "react";
import Button from "../Button/Button";

const EventCommonCard = ({ id,title, type, date, starts_at, ends_at, summary, thumb,  btnText = "View", slug }) => {
  // convert time from 24hr format to 12 hr format
  const tConvert = (time) => {
    // Check correct time format and split into components
    time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

    if (time.length > 1) {
      // If time format correct
      time = time.slice(1); // Remove full string match value\
      time[5] = +time[0] < 12 ? " AM" : " PM"; // Set AM/PM
      time[3] = "";
      time[0] = +time[0] % 12 || 12; // Adjust hours
    }
    return time.join(""); // return adjusted time or original string
  };

  return (
    <div className="event_common_card">
      <div className="event_common_card_header">
        <img src={thumb} />
      </div>
      <div className={type ? "event_common_card_body_center" : "event_common_card_body"}>
        <div className={type ? "event_common_card_body_center_title" : "event_common_card_body_title"}>
          <h3>{title}</h3>
        </div>
        <div className={type ? "event_common_card_body_center_content" : "event_common_card_body_content"}>
          <p className={type ? "event_common_card_body_center_content_date" : "event_common_card_body_content_date"}>
            {date}
          </p>
          <p className={type ? "event_common_card_body_center_content_time" : "event_common_card_body_content_time"}>
            {
              // Converted time value
              `${starts_at && tConvert(starts_at)} - ${ends_at && tConvert(ends_at)}`
            }
          </p>
          <p className="event_common_card_body_content_summary">{summary}</p>
        </div>
      </div>
      <div className="event_common_card_footer">
        <Link href={`/${slug}/[id]`} as={`/${slug}/${id}`}>
          <a>
            <Button text={btnText} type="secondary" />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default EventCommonCard;
