const {MongoClient} = require('mongodb');
const url = 'mongodb://0.0.0.0:27017/';
const client = new MongoClient(url);
const database = 'Book';

async function getData(){
    let result =await client.connect();
    let db = result.db(database);
    let collection = db.collection('books');
    let response = await collection.find({}).toArray();
    console.log(response);
}

getData();
