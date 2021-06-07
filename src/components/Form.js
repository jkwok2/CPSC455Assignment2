import React from 'react';

function Form() {
    return (
        <form class="form">
            <label htmlFor="name">Name</label><br />
            <input id="imgname" type="text" name="name" /><br />
            <label htmlFor="url">Image URL</label><br />
            <input id="imgurl" type="text" name="url" />
            <input id="imgsubmit" type="submit" defaultValue="Submit" />
            <input type="reset" defaultValue="Clear" />
        </form>
    );
}

export default Form;