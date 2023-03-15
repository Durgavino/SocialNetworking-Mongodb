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


},
{
    toJSON:{
        virtuals:true,
    },
    id:false,
});

const reactionSchema=new mongoose.Schema({
reactionID:{
    ///
},
reactionBody:{
    type:string,
    required:true,
    maxlength:280
},
username:{
    type:string,
    required:true
},
createdAt:{
    type:date,

}

},
{
    toJson:{
virtuals:true,
    },
    id:false,
});







thoughtschema.virtual('reactioncount').get(function(){
    return this.reactions.length;
});

const Thought =mongoose.model('thougth',thoughtschema);
module.exports= Thought;
