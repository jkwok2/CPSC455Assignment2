import React from 'react';

export function Card(props) {
    return (
        <div>
            <p>{props.name}</p>
            <img 
            height="350"
            src={props.url}></img>
        </div>
    );
}