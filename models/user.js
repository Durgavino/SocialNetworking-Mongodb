const mongoose = require('mongoose');
const { type } = require('os');

const userschema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true
            //
        },
        thoughts: [{
            type: Schema.types.objectID,
            ref: 'thought'
        }
        ],
        friends: [
            {
                type: Schema.types.objectID,
                ref: 'user'
            }
        ],
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);


userschema.virtual()