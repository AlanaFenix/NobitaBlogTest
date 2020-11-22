import mongoose from 'mongoose';

const databaseURL = 'mongoose url :clown:'

function databaseConnect() {
    mongoose.connect(databaseURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log(`[DATABASE] Succesfully connected.`)
    }).catch((err) => {
        console.log(`[DATABASE] Error while trying to connect.`)
    });
}

export default databaseConnect