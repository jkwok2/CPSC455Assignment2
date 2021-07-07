import React, { useState, useEffect } from 'react';
import { Card } from "./Card";
import Grid from '@material-ui/core/Grid';
import { CardDetails } from "./CardDetails"
import axios from 'axios';

export function Body() {
    const [cardToAdd, setCard] = useState({
        imagename: "",
        imageurl: ""
    });

    const [details, setDetails] = useState({
        name: "no picture selected",
        url: "no picture selected",
        height: "n/a"
    });
    
    const [cardID, setCardID] = React.useState(0);
    
    let cardlist = []

    const [list, setList] = React.useState(cardlist);

    useEffect(() => {
        axios.get("http://localhost:5000/cardlist")
            .then((response) => {
                setList(response.data);
            })
    }, []);

    function handleName(event) {
        let tempCard = {
            imagename: event.target.value,
            imageurl: cardToAdd.imageurl,
        }
        setCard(tempCard);
    }

    function handleURL(event) {
        let tempCard = {
            imagename: cardToAdd.imagename,
            imageurl: event.target.value,
        }
        setCard(tempCard);
    }

    function handleSubmit(e) {
        // setList([...list, { name: cardToAdd.imagename, url: cardToAdd.imageurl }])
        let obj = {
            name: cardToAdd.imagename,
            url: cardToAdd.imageurl,
            // _id: cardID,
            cuteness: Math.floor(Math.random() * 10)
        }
        setCardID(cardID + 1)
        console.log(obj)
        e.preventDefault()
        axios.post("http://localhost:5000/cardlist/add", obj)
            .then((response) => {
                console.log(response)
                setList(response.data)
            })
    }

    function handleCallback(childData) {
        setDetails(childData);
    }

    function handleDeleteCallback(idData) {
        axios.delete("http://localhost:5000/cardlist/del/" + idData.toString())
            .then((response) => {
                setList(response.data)
            })
    }

    function handleDeleteAll() {
        // setList([]);
        // let tempDetails = {
        //     name: "no picture selected",
        //     url: "no picture selected",
        //     height: "n/a"
        // };
        // setDetails(tempDetails)
        axios.post("http://localhost:5000/cardlist/reset")
            .then((response) => {
                setList(response.data);
            })
    }

    return (
        <Grid container spacing={2}>
            <Grid item xs>
                <div>
                    <h2>List of Images</h2>
                    <ul id="cardlist">
                        {list.map((item) => (
                            <Card
                                name={item.name}
                                url={item.url}
                                id={item._id}
                                parentCallback={handleCallback}
                                delCallback={handleDeleteCallback}
                            ></Card>
                        ))}
                    </ul>
                </div>
            </Grid>
            <Grid item xs={3}>
                <h2>Delete All Cards</h2>
                <button onClick={handleDeleteAll}>Delete All Cards</button>
                <h2>Add Image</h2>
                <form class="form" onSubmit={handleSubmit}>
                    <label>Name</label><br />
                    <input type="text" onChange={handleName} onPaste={handleName} /><br />
                    <label>Image URL</label> <br />
                    <input type="text" onChange={handleURL} onPaste={handleURL} />
                    <input type="submit" value="Submit" />
                    <input type="reset" value="Clear" />
                </form>
                <h2>Card Details</h2>
                <CardDetails details={details}/>
            </Grid>
        </Grid>
    );
}