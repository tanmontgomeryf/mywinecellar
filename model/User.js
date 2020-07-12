const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        wineList: [
            {
                wineDetails: {
                    type: Schema.Types.Mixed,
                    default: {},
                },
                stocks: {
                    type: Number,
                    required: true,
                },
                id: {
                    type: Number,
                    required: true,
                },
            },
        ],
    },
    { minimize: false }
);

module.exports = User = mongoose.model('WineUser', UserSchema);
