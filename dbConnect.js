

    require('dotenv').config()

    //mongoDb connection...
    const MongoClient = require('mongodb').MongoClient;
    
    //add DB connection...
 const uri = 'mongodb+srv://SharonMongoDB:yGWKm5jSJ36QXR2@cluster1.106x6eb.mongodb.net/?retryWrites=true&w=majority'
 const client = new MongoClient(uri, {useNewUrlParser: true})

    client.connect((err,db) => {
        //projectCollection = client.db().collection(collectionName);
        if(!err) {
            console.log('MongoDB Connected')
        }
        else {
            console.log("DB Error: ", err);
            process.exit(1);
        }
    })
    
    module.exports = client;
    