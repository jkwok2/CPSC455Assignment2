import React from 'react';

export function Card(props) {
    function handleclick(event) {
        alert("fuck!")
    }

    return (
        <div class="cardlistElem">
            <h4>{props.name}</h4>
            <img 
            height="350"
            src={props.url} onClick={handleclick}></img>
        </div>
    );
}