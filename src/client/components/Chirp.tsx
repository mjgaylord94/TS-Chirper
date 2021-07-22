import React from 'react';
import { Link } from 'react-router-dom';


const Chirp = (props) => {
    return (
        <>
            <div className="chirp">
                <img src={props.chirp.image}
                    alt="egg" width="75px" height="75px"/>
                <h3>@{props.chirp.username}</h3>
                <h6>{props.chirp.chirpText}</h6>
                <br />
                <Link to={`/admin/${props.chirp.id}`} id="edit-button" className="btn btn-secondary">Edit</Link>
            </div>
        </>
    );
};

export default Chirp;