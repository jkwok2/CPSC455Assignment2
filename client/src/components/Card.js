import React from 'react';

export function Card(props) {
    let origHeight = 0;
    
    function handleclick({target:img}) {
        origHeight = img.naturalHeight;
        props.parentCallback({name: props.name, url: props.url, height: origHeight})
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