import * as express from "express";
import chirpStore from "../utilities/chirpstore"

let router = express.Router();

router.get('/:id?', (req, res) => {
    let id: string = req.params.id

    if (id) {
        res.json(chirpStore.GetChirp(id));
    } else {
        const chirps = chirpStore.GetChirps()
        let chirpArr: chirp[] = []

        Object.keys(chirps).map(key => chirpArr.push({ id: key, image: chirps[key].image, username: chirps[key].username, chirpText: chirps[key].chirpText }))

        chirpArr.pop()
        res.json(chirpArr);
    }
}
);

router.post('/', (req, res) => {
    let chirpObj: chirp = req.body

    chirpStore.CreateChirp(chirpObj);
    res.sendStatus(200);
});

router.put('/:id', (req, res) => {
    let id: string = req.params.id;
    let chirpObj: chirp = req.body

    chirpStore.UpdateChirp(id, chirpObj);
    res.sendStatus(200);
});

router.delete('/:id', (req, res) => {
    let id: string = req.params.id

    chirpStore.DeleteChirp(id);
    res.sendStatus(200);
})

interface chirp {
    id?: string,
    image: string,
    username: string,
    chirpText: string
}

export default router;