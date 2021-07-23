import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import Header from '../components/Header';

const EditForm = () => {
    const history = useHistory();
    const { id }: {id: string} = useParams()
    const [image, setImage] = useState("");
    const [user, setUser] = useState("");
    const [chirpText, setChirpText] = useState("");

    const getChirp = async () => {
        let r = await fetch(`/api/chirps/${id}`);
        let chirp = await r.json();
        setImage(chirp.image)
        setUser(chirp.username);
        setChirpText(chirp.chirpText)
    }

    useEffect(() => {getChirp();}, [])

    async function submit(e: { preventDefault: () => void; }) {
        e.preventDefault();
        let newChirp: {image: string, username: string, chirpText: string} = {
            image: image,
            username: user,
            chirpText: chirpText,
        }

        await fetch(`/api/chirps/${id}`, {
            method: "PUT",
            headers: {'Content-type': 'application/json'},
            body:JSON.stringify(newChirp)
        });

        history.goBack()
    }

    async function remove(e: { preventDefault: () => void; }) {
        e.preventDefault();

        await fetch(`/api/chirps/${id}`, {
            method: "DELETE",
            headers: {'Content-type': 'application/json'},
        });

        history.goBack()
    }

    return (
        <>
            <div>
                <Header></Header>
                <div className="row d-flex justify-content-center">
                    <div className="col-md-8">
                        <div id="form-container">
                            <form id="chirp-form" action="">
                                <h3 id="form-title">
                                    Edit Chirp
                                </h3>
                                <input id="username-input" value={user} onChange={e => { setUser(e.target.value) }} />
                                <textarea id="chirp-textarea" value={chirpText} rows={5} onChange={e => { setChirpText(e.target.value) }}></textarea>
                                <button id="delete-button" className="btn btn-danger m-2" onClick={remove}>
                                    Delete Chirp
                                </button>
                                <button id="chirp-button" className="btn m-2" onClick={submit}>
                                    Edit Chirp
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EditForm;