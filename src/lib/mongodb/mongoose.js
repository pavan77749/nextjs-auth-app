import mongoose from 'mongoose'

let initialized = false;

export const connect = async () => {
    mongoose.set('strictQuery',true);
    if(initialized){
        console.log("MongoDb already connected")
        return;
    }
    try {
        await mongoose.connect(process.env.MONGODB_URI,{
            dbName:"next-auth-app",
            useNewUrlParser: true,
            useUnifiedTopology:true
        });
        console.log("MongoDB connnected")
        initialized = true
    } catch (error) {
        console.log("MongoDB connection error",error)
    }
}