const mongoose = require('mongoose');


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


userschema.virtual('friendCount').get(function(){
    return this.friends.length;
});

const User=model('user',userschema);

module.exports=User;