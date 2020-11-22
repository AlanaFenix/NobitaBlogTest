import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
    name: String,
    posts: Array,
    description: String
});

export default mongoose.model('categoryDB', categorySchema)