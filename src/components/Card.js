import React from 'react';

export function Card(props) {
    function handleclick(event) {
        alert(new Date())
    }

    return (
        <div class="cardlistElem">
            <h4>{props.name}</h4>
            <img 
            width="350"
            src={props.url} onClick={handleclick}
            alt="invalid image url"></img>
        </div>
    );
}