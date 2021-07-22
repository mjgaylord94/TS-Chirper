import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <>
            <div id="header-container" className="row">
                <div className="col-md-4"></div>
                <h1 id="header-title" className="col-md-4">
                    Chirper
                </h1>
                <div className="col-md-4"></div>
            <div id="link-container" className="row d-flex justify-content-center">
                <Link to={'/'} id="home-button" className="btn col-md-4 m-2">Home</Link>
                <Link to={'/add'} id="new-button" className="btn col-md-4 m-2">New Chirp</Link>
            </div>
            </div>
        </>
    )
};

export default Header;