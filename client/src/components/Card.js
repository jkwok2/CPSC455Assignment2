import React from 'react';

export function Card(props) {
    let origHeight = 0;
    let imageID = props.id;

    function handleclick({ target: img }) {
        origHeight = img.naturalHeight;
        props.parentCallback({ name: props.name, url: props.url, height: origHeight, cuteness: props.cuteness})
    }

    // function handleDelete() {
    //     axios.delete("http://localhost:5000/cardlist/del/" + props.id)
    //         .then((response) => {
    //             console.log(response)
    //             window.location.reload();
    //         })
    // }

    function handleDel() {
        props.delCallback(imageID)
    }

    return (
        <div class="cardlistElem">
            <h4>{props.name}</h4>
            <img
                width="350"
                src={props.url} onClick={handleclick}
                alt="invalid image url"></img>
            <div>
                <button onClick={handleDel}>Delete Card</button>
            </div>
        </div>
    );
}