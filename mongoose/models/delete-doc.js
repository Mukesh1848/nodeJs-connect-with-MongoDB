import mongoose from 'mongoose';

// defining schema ----------------------------
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

// compiling schema ---------------------------
const studentModel = mongoose.model('mongodbdata',studentSchema);


// deleting Single Document by {findByIdAndDelet} methods ---------------------------

const deleteDocById = async (id)=>{
        try {
                // const result = await studentModel.findByIdAndDelete(id);
                // console.log(result);
        } catch (error) {
        //        console.log(error);
        }
        
}
// deleting Single Document by age field -----------------------------

const deleteOneDocByAge = async (a)=>{
        try {
                // const result = await studentModel.deleteOne({age:a});
                // console.log(result);
        } catch (error) {
        //        console.log(error);
        }
        
}

const deleteManyDoc = async (a)=>{
        try {
                // const result = await studentModel.deleteMany({age:a});
                // console.log(result);
        } catch (error) {
        //        console.log(error);
        }
        
}

// export {deleteDocById};
// export {deleteOneDocByAge}
// export {deleteManyDoc}