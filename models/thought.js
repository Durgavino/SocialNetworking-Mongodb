const mongoose=require('mongoose');

const thoughtschema=new mongoose.Schema({
thoughtText:{
    type:String,
    required:true,
    minlength:1,
    maxlength:280
},
createdAT:{
    type:Date,
    timestamps:true
},
username:{
    type:String,
    required:true
},
reactions:
    [reactionSchema]


});

thoughtschema.virtual('reactioncount').get(function(){
    return this.reactions.length;
});

const Thought =mongoose.model('thougth',thoughtschema);
module.exports= Thought;
