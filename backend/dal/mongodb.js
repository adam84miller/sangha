require('dotenv').config()
const { localsName } = require('ejs')
const {MongoClient} = require('mongodb')
const ObjectID = require('mongodb').ObjectID

let client

function connect(locals) {

    const uri =`mongodb+srv://adam84miller:${process.env.DB_PASSWORD}@cluster0.g4qc0.mongodb.net/sangha?retryWrites=true&w=majority`

    client = new MongoClient(uri, {useUnifiedTopology: true})

    return client.connect()
    .then((connection) => {
        locals.collectionusers = connection.db('sangha').collection('users')
    })
    .catch(err => {
        console.log(err)
        process.exit()
    })

}

function close() {
    client.close()
}

function readAll(info) {

    return info.collection.find(info.query).toArray()

}

function readOne(info) {

    return info.collection.findOne(info.query)

}

function createOne(info) {

    return info.collection.insertOne(info.doc)

}

function changeOne(info) {

    return info.collection.changeOne(info.doc)

}

function deleteOne(info) {

    return info.collection.deleteOne(info.query) 

}


module.exports.connect = connect
module.exports.close = close
module.exports.readAll = readAll
module.exports.readOne = readOne
module.exports.createOne = createOne
module.exports.changeOne = changeOne
module.exports.deleteOne = deleteOne
