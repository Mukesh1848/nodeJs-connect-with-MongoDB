import mongoose from 'mongoose';

// const connectdb = ()=>{
//         return mongoose.connect("mongodb://localhost:27017/mongodbdatabase").then(()=>{
//                 console.log('connection successfull...');
//         }).catch((error)=>{ console.log(error); })
      
// }


// const connectdb = (DATABASE_URL)=>{
//         return mongoose.connect(DATABASE_URL).then(()=>{
//                 console.log('connection successfull...');
//         }).catch((error)=>{ console.log(error); })
      
// }


// using async await function 

const connectDB = async(DATABASE_URL)=>{
        try {
              const DB_OPTIONS ={
                dbName:"school"
              }  
              await mongoose.connect(DATABASE_URL,DB_OPTIONS);
              console.log("connection successfully");
        } catch (error) {
         console.log(error)       
        }
}

export default connectdb;