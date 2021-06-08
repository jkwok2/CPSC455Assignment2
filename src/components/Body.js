import React, { useState } from 'react';
import { Card } from "./Card";
import Grid from '@material-ui/core/Grid';
import { CardDetails } from "./CardDetails"

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

    let cardlist = [
        {
            name: "cat1",
            url: "https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg"
        },
        {
            name: "cat2",
            url: "https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg"
        }
    ]
    const [list, setList] = React.useState(cardlist);


    function handleName(event) {
        let tempCard = {
            imagename: event.target.value,
            imageurl: cardToAdd.imageurl
        }
        setCard(tempCard);
    }

    function handleURL(event) {
        let tempCard = {
            imagename: cardToAdd.imagename,
            imageurl: event.target.value
        }
        setCard(tempCard);
    }

    function handleSubmit(e) {
        setList([...list, { name: cardToAdd.imagename, url: cardToAdd.imageurl }])
        e.preventDefault()
    }

    function handleCallback(childData) {
        setDetails(childData);
    }

    function handleDeleteAll() {
        setList([]);
        let tempDetails = {
            name: "no picture selected",
            url: "no picture selected",
            height: "n/a"
        };
        setDetails(tempDetails)
    }

    return (
        <Grid container spacing={2}>
            <Grid item xs>
                <div>
                    <h2>List of Images</h2>
                    <button onClick={handleDeleteAll}>Delete All Cards</button>
                    <ul id="cardlist">
                        {list.map((item) => (
                            <Card
                                name={item.name}
                                url={item.url}
                                parentCallback={handleCallback}
                            ></Card>
                        ))}
                    </ul>
                </div>
            </Grid>
            <Grid item xs={3}>
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
                <CardDetails details={details} />
            </Grid>
        </Grid>
    );
}