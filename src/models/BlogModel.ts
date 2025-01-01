import mongoose from 'mongoose';

export interface IBlog {
    title: string;
    description: string;
    image: string;
    category: string;
    author: string;
    authorImage: string;
    date: Date;
}

const BlogSchema = new mongoose.Schema<IBlog>({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    authorImage: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Blog = mongoose.models.Blog || mongoose.model<IBlog>('Blog', BlogSchema);
export default Blog;
