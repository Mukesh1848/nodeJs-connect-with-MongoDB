import express from 'express';
const app = express();
const port = process.env.PORT || "3000";
import mongoose from 'mongoose';
import connectdb from './db/connectdb.js'
// All import for Reading Document ----------------------------
// import createDoc from './models/student.js';
// import {getAllDoc} from './models/retreive-read.js';
// import {getAllDocSpecificField} from './models/retreive-read.js';
// import {getSingleDoc} from './models/retreive-read.js';
// import {getSingleDocSpecificField} from './models/retreive-read.js';
// import {getDocField} from './models/retreive-read.js';
// import {getDocByFieldSpecificField} from './models/retreive-read.js';
// import {getLimitDoc} from './models/retreive-read.js';
// import {getSkipDoc} from './models/retreive-read.js';
// import {getCount} from './models/retreive-read.js';
// import {getSort} from './models/retreive-read.js';
// import {getMix} from './models/retreive-read.js';
// import {comDoc} from './models/retreive-read.js';
// import {logDoc} from './models/retreive-read.js';
// import {getMix} from './models/retreive-read.js';

// All Document for Updating Document ------------------------

// import {updateDocById} from './models/update-doc.js';
// import {updateOneDoc} from './models/update-doc.js';
// import { updateOneDocByAge} from './models/update-doc.js'
// import {updateManyDoc} from './models/update-doc.js'

// All deleting import are here ----------------------
// import {deleteDocById} from './models/delete-doc.js';
// import {deleteOneDocByAge} from './models/delete-doc.js';
// import {deleteManyDoc} from './models/delete-doc.js'

//1. using variable for connecting database ----------------------------------

// const DATABASE_URL = "mongodb://localhost:27017/mongodbdatabase";

//2. calling function to connecting databse -------------------------

//3. connectdb(DATABASE_URL);  -------------------
 connectdb();   

//4.  create and save document  ----------------------- 
// createDoc();


//5. Calling all the function for Read Document   ----------------------------

// getAllDoc();
// getAllDocSpecificField();
// getSingleDoc();
// getSingleDocSpecificField();
// getDocField();
// getDocByFieldSpecificField()
// getLimitDoc()

// getSkipDoc()
// getCount();
// getSort()
// getMix()
// comDoc()
// logDoc();


//6. All Calling function for Update Document -----------------------------

// updateDocById('62cf9baa8802361648498f90');
// updateOneDoc('62cf9baa8802361648498f90')
// updateOneDocByAge(47);
// updateManyDoc(47);


//8. All delteing function are called here  -------------------

// deleteDocById('62cfb499888c90cc40353f67');
// deleteOneDocByAge(47);
// deleteManyDoc(47);

//7. connect database first methods -----------------------

// mongoose.connect("mongodb://localhost:27017/mongodbdatabase").then(()=>{
//         console.log('connection successfull...');
// }).catch((error)=>{ console.log(error); })



app.listen(port, ()=>{
        console.log(`server listening at http://localhost:${port}`)
})