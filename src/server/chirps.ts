import * as express from "express";
import chirpsStore from "./chirpstore"

let router = express.Router();

router.get('/', (req, res) => {
    const chirps = chirpsStore.GetChirps()
    let chirpArr: any[] = []

    Object.keys(chirps).map(key => chirpArr.push({id: key, name: chirps[key].name, msg: chirps[key].msg}))

    chirpArr.pop()
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