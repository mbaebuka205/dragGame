import mongoose from "mongoose"

const URL:string = 'mongodb://127.0.0.1:27017/nurseryDB'

export const dbConnect = async() =>{
    await mongoose.connect(URL).then(() =>{
        console.log();
        console.log('connected.....✌✌✌');
        
    })
}
