import * as express from "express";
import chirpsStore from "./chirpstore"

let router = express.Router();

router.get('/:id?', (req, res) => {
    let id = req.params.id
    if (id) {
        res.json(chirpsStore.GetChirp(id));
    } else {
        const chirps = chirpsStore.GetChirps()
        let chirpArr: any[] = []

        Object.keys(chirps).map(key => chirpArr.push({ id: key, image: chirps[key].image, username: chirps[key].username, chirpText: chirps[key].chirpText }))

        chirpArr.pop()
        res.send(chirpArr);
    }
}
);

router.post('/', (req, res) => {
    chirpsStore.CreateChirp(req.body);
    res.sendStatus(200);
});

router.put('/:id', (req, res) => {
    chirpsStore.UpdateChirp(req.params.id, req.body);
    res.sendStatus(200);
});

router.delete('/:id', (req, res) => {
    chirpsStore.DeleteChirp(req.params.id);
    res.sendStatus(200);
})

export default router;