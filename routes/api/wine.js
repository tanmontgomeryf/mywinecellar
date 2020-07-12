const express = require('express');
const axios = require('axios');
const { headers, objQueryToString } = require('../../helper');
const router = express.Router();

//get list of wines
router.get('/:query?', async (req, res) => {
    try {
        const stringQuery = req.params.query
            ? objQueryToString(req.params.query)
            : '';
        const response = await axios.get(
            `https://api.globalwinescore.com/globalwinescores/latest/?limit=50&offset=0&ordering=-score${stringQuery}`,
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

module.exports = router;
