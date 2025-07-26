import React from "react";

const EventCards = ({title,description}) => {
    return(
        <div className="event-card">
            <h3 className="event-title">{title}</h3>
            <p className="event-description">
                {description}
            </p>
        </div>
    )
}

export default EventCards;