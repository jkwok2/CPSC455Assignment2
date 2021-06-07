import React from 'react';
import { Card } from "./Card";
import Grid from '@material-ui/core/Grid';
import { CardDetails } from "./CardDetails"

export function Body() {
    let imgname = "";
    let imgurl = "";

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
        imgname = event.target.value;
    }

    function handleURL(event) {
        imgurl = event.target.value;
    }

    function handleSubmit(e) {
        setList([...list, { name: imgname, url: imgurl }])
        e.preventDefault()
    }

    return (
        <Grid container spacing={2}>
            <Grid item xs>
                <div>
                    <h2>List of Images</h2>
                    <ul id="cardlist">
                        {list.map((item) => (
                            <Card name={item.name} url={item.url}></Card>
                        ))}
                    </ul>
                </div>
            </Grid>
            <Grid item xs={3}>
                <h2>Add Image</h2>
                <form class="form" onSubmit={handleSubmit}>
                    <label>Name</label><br />
                    <input type="text" onChange={handleName} /><br />
                    <label>Image URL</label> <br />
                    <input type="text" onChange={handleURL} />
                    <input type="submit" value="Submit" />
                    <input type="reset" value="Clear" />
                </form>
                <h2>Card Details</h2>
                <CardDetails/>
            </Grid>
        </Grid>
    );
}