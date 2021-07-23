import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Header from '../components/Header';

const AddForm = () => {
    const history = useHistory();
    const [user, setUser] = useState('');
    const [chirpText, setChirpText] = useState('');

    function submit(e: { preventDefault: () => void; }) {
        e.preventDefault();
        let newChirp: {image: string, username: string, chirpText: string} = {
            image: "https://merriam-webster.com/assets/mw/images/article/art-wap-article-main/egg-3442-e1f6463624338504cd021bf23aef8441@1x.jpg",
            username: user,
            chirpText: chirpText,
        }

        var xhr = new XMLHttpRequest();
        xhr.open("POST", '/api/chirps', true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify(newChirp))

        history.goBack();
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
                                    New Chirp
                                </h3>
                                <input id="username-input" value={user} placeholder="Username" onChange={e => { setUser(e.target.value) }} />
                                <textarea id="chirp-textarea" value={chirpText} placeholder="What's on your mind?" rows={5} onChange={e => { setChirpText(e.target.value) }}></textarea>
                                <button id="chirp-button" className="btn" onClick={submit}>
                                    Chirp It
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddForm;