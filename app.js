require("dotenv").config();
const cors=require("cors");
const express=require("express");
const app=express();
const connectDB=require("./db/connect");
const PORT=process.env.PORT || 3000;
app.use(cors());

const products_routes=require("./routes/products");

app.get("/",(req,res)=>{
    res.send("Hii");
});

app.use("/api/products", products_routes);

const start=async()=>{
    try {
        await connectDB(process.env.MONGODB_URL);
        app.listen(PORT,()=>{
        console.log(`${PORT} YES`);
        });
    } catch (error) {
        console.log(error);
    }
}

start();