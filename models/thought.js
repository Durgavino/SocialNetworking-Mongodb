const mongoose = require('mongoose');
const { Schema,Types, model } = require('mongoose');

//const Schema = mongoose.Schema; 
const timestamp = require('../utils/timestamp');



const reactionSchema = new mongoose.Schema({
    reactionID: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
    },
    reactionBody: {
        type: String,
        required: true,
        maxlength: 280
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: tstamp => timestamp(tstamp)
    }

},
    {
        toJson: {
            virtuals: true,
            getters: true,
        },
        id: false,
    });


const thoughtschema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280
    },
    createdAT: {
        type: Date,
        default: Date.now,
        get: stamp => timestamp(stamp)
    },
    username: {
        type: String,
        required: true
    },
    reactions:
        [reactionSchema]


},
    {
        toJSON: {
                     getters: true,
        },
        id: false,
    });



thoughtschema.virtual('reactioncount').get(function () {
    return this.reactions.length;
});

const thought = mongoose.model('thought', thoughtschema);
module.exports = thought;
