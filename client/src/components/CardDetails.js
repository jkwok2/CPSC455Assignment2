import React from 'react';

export function CardDetails(props) {
    const URL = () =>
        <div>
            URL: <a href={props.details.url}>Link to Picture</a>
        </div>

    return (
        <div id="abc">
            <p>Name: {props.details.name}</p>
            {props.details.url === "no picture selected" ? null : <URL/>}
            <p>Original Height: {props.details.height}</p>
        </div>
    );
}