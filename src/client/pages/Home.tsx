import React, { useState, useEffect } from 'react';

import Chirp from '../components/Chirp'
import Header from '../components/Header'

const Home: React.FC<IHome> = () => {
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

interface IHome {}

export interface ChirpState {
    id: string,
    image: string,
    username: string,
    chirpText: string
}

export default Home;