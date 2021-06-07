import React, {useState} from 'react';

export function Form() {
    return (
        <form class="form">
            <label>Name</label><br />
            <input id="imgname" type="text" name="name" /><br />
            <label>Image URL</label><br />
            <input id="imgurl" type="text" name="url" />
            <input id="imgsubmit" type="submit" defaultValue="Submit" />
            <input type="reset" defaultValue="Clear" />
        </form>
    );
}