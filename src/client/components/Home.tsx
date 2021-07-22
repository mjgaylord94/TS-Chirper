import React, { useState, useEffect } from 'react';

import Chirp from './Chirp'
import Header from './Header'

export interface ChirpState {
    id: string,
    image: string,
    username: string,
    chirpText: string
}

const Home = () => {
    const [chirps, setChirps] = useState<ChirpState[]>([]);

    const getChirps = async () => {
        let r = await fetch('/api/chirps');
        let chirps = await r.json();
        setChirps(chirps);
    }

    useEffect(() => {getChirps();}, [])

    return (
        <div>
            <Header></Header>

            <div className="row d-flex justify-content-center">
                <div id="timeline" className="col-md-8">
                    {chirps.map(chirp => <Chirp chirp={chirp} key={`chirp-${chirp.id}`} />)}
                </div>
            </div>

        </div>
    );
};

export default Home;