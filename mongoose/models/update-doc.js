import mongoose from 'mongoose';

// defining schema -----------------------------------------
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

// compiling schema  -----------------------------------------
const studentModel = mongoose.model('mongodbdata',studentSchema);


// update Document  by (findByIdAndUpdate) function ---------------------------------
const updateDocById = async (id)=>{
       try {
        // const result = await studentModel.findByIdAndUpdate(id,{name:'sarad choubey'});
        // const result = await studentModel.findByIdAndUpdate(id,{name:'amit choubey', age:56}, {returnDocument:'after'});
        // console.log(result);
       } catch (error) {
        // console.log(error);
       }
}

// update Document by {updateOne} methods

const updateOneDoc = async (id)=>{
        try {
        //     const result = await studentModel.updateOne({_id:id},{name:'sumit kumar'});
        //     console.log(result);
        } catch (error) {
        //      console.log(error)   
        }
}

const updateOneDocByAge = async (a)=>{
        try {
        //     const result = await studentModel.updateOne({age:a},{name:'sanjya rathor'});
        //     console.log(result);
        } catch (error) {
        //      console.log(error)   
        }
}


const updateManyDoc = async (a)=>{
        try {
const result = await studentModel.updateMany({age:a},{name:"sundar lal lakhera"})    
console.log(result);
        } catch (error) {
                
        }
}

// export {updateDocById};
// export {updateOneDoc};
// export {updateOneDocByAge};
export {updateManyDoc};
