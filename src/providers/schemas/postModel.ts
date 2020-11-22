import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
    _id: Number,
    title: String,
    description: String,
    author: Object,
    content: String,
    language: String,
    type: String,
    stars: Number,
    category: String
});

export default mongoose.model('postDB', postSchema)