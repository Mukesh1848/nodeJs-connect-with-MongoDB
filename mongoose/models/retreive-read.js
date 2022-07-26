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


// retreiving All Document  -----------------------------------------

// const getAllDoc = async ()=>{
//           const result = await studentModel.find();
//           console.log(result);
// }

// retreiving All Document with forEach loop  -----------------------------------------

const getAllDoc = async ()=>{
//         const result = await studentModel.find();
//         // console.log(result);
//        result.forEach((item)=>{
//         console.log(item.name),
//         console.log(item.age),
//         console.log(item.fees.toString()),
//         console.log(item.hobbies[1]),
//         console.log(item.isactive),
//         console.log(item.comments[0].value),
//         console.log(item.comments[0].publish),
//         console.log(item.join)
//        })
}

// Retreive All document With specific feilds -----------------------------------------

const getAllDocSpecificField = async ()=>{
        // const result =await studentModel.find().select('name age');  // include
        // const result =await studentModel.find().select(['name', 'age','isactive']);  // include
        // const result =await studentModel.find().select({name:1, age:1});   // include

        // const result =await studentModel.find().select('-name -age');   // exclude
        // const result =await studentModel.find().select(['-name', '-age','-isactive']);  // exclude
        // const result =await studentModel.find().select({name:0, age:0});   // exclude
        // const result = await studentModel.find({}, 'name , age')

        // console.log(result);
}


// retreive single document by _id  -----------------------------------------

const getSingleDoc = async()=>{
//         const result = await studentModel.findById('62cf9baa8802361648498f90');
        // console.log(result);
        // console.log(result.name , result.age ,result.fees.toString());
        // console.log(result._id.getTimestamp(),result.name , result.age ,result.fees.toString());
}


// Retreive Single Document with Specific field  -----------------------------------------
const getSingleDocSpecificField = async()=>{
//                 const result = await studentModel.findById('62cf9baa8802361648498f90','name age');
//                 console.log(result);
                // console.log(result.name , result.age ,result.fees.toString());
                // console.log(result._id.getTimestamp(),result.name , result.age ,result.fees.toString());
        }


 // Retreive Document by field  -----------------------------------------

const getDocField = async ()=>{
        // const result = await studentModel.find({name:'gaytri kumari'})
        // console.log(result);
        // console.log(result[0].name)
//         const result = await studentModel.find({age:47})
//         console.log(result);
}


// Retreive Document by field with specific field  -----------------------------------------

const getDocByFieldSpecificField = async()=>{
        // const result =await studentModel.find({name:'Raj kumar'}).select('age name');
//         const result =await studentModel.find({name:'Raj kumar'}, 'age name')
//         console.log(result);
}

// Retrieve Limited Document  -----------------------------------------

const getLimitDoc = async ()=>{
        // const result = await studentModel.find().limit(4);
//         const result = await studentModel.find({},null , {limit:4});
//         console.log(result)
}


// Retrieve skip Document  -----------------------------------------

const getSkipDoc = async ()=>{
//         const result = await studentModel.find().skip(4);
        // const result = await studentModel.find({},null , {skip:4});
//         console.log(result)
}


// // count Document  -----------------------------------------

const getCount = async()=>{
//         const result = await studentModel.find().countDocuments();
//         console.log(result);
}

// sort Document  -----------------------------------------

const getSort = async()=>{
//         const result = await studentModel.find().sort({age:1});
//         const result = await studentModel.find().sort({age:-1});
//         console.log(result);
}


// Mix Document  -----------------------------------------

const getMix = async()=>{
//                 const result = await studentModel.find({}, {name:1 , age:1}, {limit:4,skip:1})
//                 console.log(result);
}


// comparison document -----------------------------------------

const comDoc = async()=>{
        // const result = await studentModel.find({age:{$gt:40}});
        // const result = await studentModel.find({age:{$lt:40}});
        // const result = await studentModel.find({age:{$gte:40}});
        // const result = await studentModel.find({age:{$lte:40}});
        // const result = await studentModel.find({age:{$ne:40}});
        // const result = await studentModel.find({age:{$eq:47}});
        // const result = await studentModel.find({age:{$in:[37,47]}});
        // const result = await studentModel.find({age:{$nin:[37,47]}});
        // console.log(result);
}

// logical comparison Document  -----------------------------------------

  const logDoc = async()=>{
        // const result = await studentModel.find({$and : [{age:47} , {fees:6500.3}]});
        // const result = await studentModel.find({$or : [{age:34} , {fees:6500.3}]});
        // const result = await studentModel.find({$nor : [{age:47} , {fees:6500.3}]});
        // const result = await studentModel.find({$not : [{age:47} , {fees:6500.3}]});
        // console.log(result);
  }

// export {getAllDoc};
// export {getAllDocSpecificField};
// export {getSingleDoc}
// export {getSingleDocSpecificField}
// export {getDocField}
// export {getDocByFieldSpecificField}
// export {getLimitDoc}
// export {getSkipDoc}
// export {getCount}
// export {getSort}
// export {getMix}
// export {comDoc};
// export {logDoc};
