const mongoose = require('mongoose');

const PropertySchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    district:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    contact:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    marla:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
    imgpath:{
        type:String,
        required:true
    },
    date:{
        type:Date
    }
});


module.exports = mongoose.model('Properties' , PropertySchema);