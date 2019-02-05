var mongodb = require('mongo-mock'),
    fs = require('graceful-fs');

mongodb.max_delay = 0;//you can choose to NOT pretend to be async (default is 400ms)
var MongoClient = mongodb.MongoClient;
//MongoClient.persist = "./common/mongo.js";//persist the data to disk

// Connection URL
var url = 'mongodb://localhost:27017/myproject';

MongoClient.connect(url, {}, function (err, db) {
    // Get the documents collection
    var collection = db.collection('documents');
    // Insert some documents
    var docs = [{ name: 'Andrew' }, { name: '$##!@#!@' }, { name: '拉雅' }];

    collection.insertMany(docs, function (err, result) {
        console.log('inserted documents');

        function cleanup() {
            
            let users, count;
            collection.find({}).toArray(function (err, docs) {
                console.log('found objects');
                users = docs;
                count = users.length;

                var document = {};
                document['users'] = {
                    data: users,
                    count: count
                };

                if (fs.existsSync('test-data/mongo.json')) {
                    fs.truncateSync('test-data/mongo.json');
                }                
                fs.appendFileSync("test-data/mongo.json", JSON.stringify(document));
                console.log('created test data');
            });

            db.close();
        }
        setTimeout(cleanup, 1000);
    });
});


//REFERENCE CODE
/* collection.updateOne({ a: 2 }, { $set: { b: 1 } }, function (err, result) {
    console.log('updated', result);

    collection.findOne({ a: 2 }, { b: 1 }, function (err, doc) {
        console.log('foundOne', doc);

        collection.removeOne({ a: 3 }, function (err, result) {
            console.log('removed', result);

            collection.find({}, { _id: -1 }).toArray(function (err, docs) {
                console.log('found', docs);


            });
        });
    });
}); */
