import mongoose from 'mongoose';

// defining schema
const studentSchema= new mongoose.Schema({
        // _id:Number // setting id personally
        name:{type:String,required:true,trim:true},
        age:{type:Number ,require:true ,min:18 , max:50},
        fees:{type:mongoose.Decimal128,required:true,validate:v=>v>=5500.50},
        hobbies:{type:Array},
        isactive:{type:Boolean},
        comments:[{value:{type:String},publish:{type:Date,default:Date.now}}],
        join:{type:Date,default:Date.now}
})

// compiling schema 
const studentModel = mongoose.model('mongodbdata',studentSchema);


const createDoc = async() =>{
        try{

// creating new Document 
const studentDoc =new studentModel({
        // _id:1234 
        name:'rakesh kumar',
        age:50,
        fees:6000.30,
        hobbies:['cricket','music','cooking'],
        isactive:true,
        comments:[{value:"raj kumar is a good boy"}]
})

// creating multiple document at a time 

// const MukeshDoc =new studentModel({
//         // _id:1234 
//         name:'Mukesh kumar',
//         age:47,
//         fees:6500.30,
//         hobbies:['cricket','music','cooking'],
//         isactive:true,
//         comments:[{value:"raj kumar is a good boy"}]
// })

// const VikkyDoc =new studentModel({
//         // _id:1234 
//         name:'Vikky kumar',
//         age:37,
//         fees:6500.30,
//         hobbies:['cricket','music','cooking'],
//         isactive:true,
//         comments:[{value:"raj kumar is a good boy"}]
// })

// const ArnavDoc =new studentModel({
//         // _id:1234 
//         name:'Arnav kumar',
//         age:47,
//         fees:6500.30,
//         hobbies:['cricket','music','cooking'],
//         isactive:true,
//         comments:[{value:"raj kumar is a good boy"}]
// })


//saving document one at a time 

const result = await studentDoc.save();
console.log(result);
        } catch(error){
        console.log(error);              
        }

//  saving document multiple at a time

// const result = await studentModel.insertMany([MukeshDoc,VikkyDoc,ArnavDoc]);
// console.log(result);
//         }catch(error){
//   console.log(error);
//         }

}

export default createDoc; 
