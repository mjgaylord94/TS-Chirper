import React from 'react';
import { Link } from 'react-router-dom';


const Chirp = ({ chirp }) => {
    return (
        <>
            <div className="chirp">
                <img src={chirp.image}
                    alt="egg" width="75px" height="75px"/>
                <h3>@{chirp.username}</h3>
                <h6>{chirp.chirpText}</h6>
                <br />
                <Link to={`/edit/${chirp.id}`} id="edit-button" className="btn btn-secondary">Edit</Link>
            </div>
        </>
    );
};

export default Chirp;