const Product =require("../models/products");

const getAllProducts=async(req,res)=>{
    const {title,genre}=req.query;
    const queryObject={};
    if(title){
        queryObject.title={$regex: title, $options: "i"};
    }
    if(genre){
        queryObject.genre={$regex: genre, $options: "i"};
    }
    let apiData=Product.find(queryObject);
    let page=Number(req.query.page) || 1;
    let limit=Number(req.query.limit) || 9;
    let skip= (page-1)*limit;
    apiData=apiData.skip(skip).limit(limit);
    const myData=await apiData;
    res.status(200).json({myData, nbHits:myData.length});
};

module.exports={getAllProducts};