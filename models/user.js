const mongoose = require('mongoose');
require('mongoose-type-email');

const { Schema, model } = require('mongoose');


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
            unique: true,
           // Email:mongoose.SchemaTypes.Email
           match: [/.+@.+\..+/, 'Must match an email address!'],
        },
        thoughts: [{
            type: Schema.Types.ObjectID,
            ref: 'thought'
        }
        ],
        friends: [
            {
                type: Schema.Types.ObjectID,
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


userschema.virtual('friendCount').get(function(){
    return this.friends.length;
});

const User=model('user',userschema);

module.exports=User;