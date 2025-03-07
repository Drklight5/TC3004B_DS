import mongoose from "mongoose"

export const connectDB = async () =>{
    try{
        await mongoose.connect(process.env.MONGO_DB_URI)
        console.log("Me conecté")

    }
    catch(e){
        console.log(e)
    }
}