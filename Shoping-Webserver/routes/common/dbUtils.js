
const { MongoClient } = require('mongodb');
//const { get } = require('../validateUserCredentials');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
var dbUtils = {
    getMongoDbCommunication: async function(collectionName, operation, userData={}) {
        await client.connect();
        const db = client.db("ShoppingDB");
        const collection = db.collection(collectionName);
        if (operation === 'findOne') {
            console.log(userData)
            return  collection.find(userData).toArray();
        } else if (operation === 'find') {
            if (userData.productIds) {
                var uerSelectedIds = userData.productIds.map((id) => {
                    return parseInt(id);
                });
                console.log('uerSelectedIds')
                console.log(uerSelectedIds)
                return collection.find({id: {$in: uerSelectedIds}}).toArray();
            } else {
                return collection.find({}).toArray();
            }
        } else if (operation == 'insert') {
            return collection.insertOne(userData);
        }
    }
}

module.exports = dbUtils;
//const { MongoClient } = require('mongodb');
//const url = 'mongodb://localhost:27017';
//const client = new MongoClient(url);

//let isConnected = false;

//async function connectToDb() {
    //if (!isConnected) {
       // await client.connect();
        //isConnected = true;
        //console.log("MongoDB connected");
   // }
//}

//var dbUtils = {
    //getMongoDbCommunication: async function(collectionName, operation, userData = {}) {

       // await connectToDb();

       // const db = client.db("Shoppingdb");
       // const collection = db.collection(collectionName);

        //if (operation === 'findOne') {
            //return collection.findOne(userData);
        //}

        //if (operation === 'find') {
           // if (userData.productIds) {
               // const userSelectedIds = userData.productIds.map(id => parseInt(id));
                //return collection.find({ id: { $in: userSelectedIds } }).toArray();
           // }
           // return collection.find({}).toArray();
       // }

       // if (operation === 'insert') {
            //return collection.insertOne(userData);
     //   }

       // throw new Error("Invalid operation: " + operation);
   // }
//};

//module.exports = dbUtils;
