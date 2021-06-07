import React from 'react';
import { Card } from "./Card";

export function Body() {
    let imgname = "";
    let imgurl = "";

    let cardlist = [
        {
            name: "ca122t1",
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
        let imgToAdd = {name: imgname, url: imgurl}
        cardlist.push(imgToAdd)
        setList(cardlist)
        e.preventDefault()
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input type="text" onChange={handleName}/>
                <label>Image URL</label>
                <input type="text" onChange={handleURL}/>
                <input type="submit" value="Submit"/>
            </form>
            <ul>
                {list.map((item) => (
                    <Card name={item.name} url={item.url}></Card>
                ))}
            </ul>
        </div>
    );
}