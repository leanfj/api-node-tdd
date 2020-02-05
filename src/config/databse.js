import mongoose from 'mongoose'

const mongoAtlas_URL = "mongodb+srv://leanfj:leanfj@cluster0-ozb1p.gcp.mongodb.net/test?retryWrites=true&w=majority/test"

const mongoURL = process.env.MONGODEB_URL || mongoAtlas_URL

const connect = () => mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const close = () => mongoose.connection.close()

export default {
    connect,
    connection: mongoose.connection
}