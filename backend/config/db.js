import mongoose  from "mongoose";

 export const connectDB = async () => {
    await mongoose .connect('mongodb+srv://anepali818:LLYPL610@cluster0.8fxgn.mongodb.net/food-delivery-web-app').then(()=>console.log("Db Connected"));
}