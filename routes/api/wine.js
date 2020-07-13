const express = require('express');
const axios = require('axios');
const { headers, objQueryToString } = require('../../helper');
const router = express.Router();

//get list of wines
router.get('/:wine?', async (req, res) => {
    const { wine } = req.params;
    const query = wine ? `&wine=${wine}` : '';
    try {
        //request data from wine API
        const response = await axios.get(
            `https://api.globalwinescore.com/globalwinescores/latest/?limit=100&offset=0&ordering=-score${query}`,
            headers
        );
        res.json(response.data);
    } catch (error) {
        console.log(error);
        res.status(404).json('Server error');
    }
});

router.post('/', async (req, res) => {
    try {
        //check if params is available
        const stringQuery = req.body ? objQueryToString(req.body) : '';
        //request data from wine API
        const response = await axios.get(
            `https://api.globalwinescore.com/globalwinescores/latest/?limit=100&offset=0&ordering=-score${stringQuery}`,
            headers
        );
        res.json(response.data);
    } catch (error) {
        console.log(error);
        res.status(404).json('Server error');
    }
});

//get wine by id and vintage
router.get('/wine/:wine_id/:vintage', async (req, res) => {
    const { wine_id, vintage } = req.params;
    try {
        const response = await axios.get(
            `https://api.globalwinescore.com/globalwinescores/latest/?wine_id=${wine_id}&vintage=${vintage}`,
            headers
        );
        const result =
            response.data.results.length === 0 ? [] : response.data.results[0];
        res.json(result);
    } catch (error) {
        console.log(error);
        res.status(404).json('Server error');
    }
});

router.post('/pagination', async (req, res) => {
    console.log(req.body);
    const nextURILink = req.body ? req.body.nextURILink : null;
    if (nextURILink === null)
        return res.status(404).json({ msg: 'invalid Link' });
    try {
        const response = await axios.get(nextURILink, headers);
        res.json(response.data);
    } catch (error) {
        console.log(error);
        res.status(404).json({ msg: 'invalid Link' });
    }
});

module.exports = router;
