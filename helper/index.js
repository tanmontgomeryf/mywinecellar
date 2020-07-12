require('dotenv').config();

module.exports.headers = {
    headers: {
        Authorization: `Token ${process.env.WINE_API_TOKEN}`,
    },
};

module.exports.objQueryToString = (objQuery) => {
    if (objQuery) {
        let arrQuery = [];
        for (let key in objQuery) {
            if (objQuery.hasOwnProperty(key)) {
                arrQuery.push(`&${key}=${objQuery[key]}`);
            }
        }
        return arrQuery.join('');
    }
};
