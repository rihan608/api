const mongoose=require("mongoose");
const productSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    imgurl:{
        type:String,
        required:true,
    },
    url:{
        type:String,
        required:true,
    },
    genre:{
        type:String,
        required:true,
    },
});

module.exports=mongoose.model('Movies',productSchema); 