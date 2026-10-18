require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dns = require('node:dns');
dns.setServers(['8.8.8.8', '1.1.1.1']);

const app = express();

// Middleware
app.use(cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:3000'
}));
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('MongoDB Atlas Connection Successful');
    })
    .catch((err) => {
        console.error('MongoDB Connection Failed:', err.message);
        process.exit(1);
    });

// Define Schema
const blogSchema = new mongoose.Schema({
    newTitle: { type: String, required: true },
    newContent: { type: String, required: true },
    date: { type: String, required: true },
    likes: { type: Number, default: 0 }
});

const Blog = mongoose.model('Blog', blogSchema);

// GET: Fetch all blogs
app.get('/api/blogs', (req, res) => {
    Blog.find({})
        .then((blogs) => {
            res.json(blogs);
        })
        .catch((err) => {
            console.error('Error fetching blogs:', err.message);
            res.status(500).json({ message: 'Failed to fetch blogs' });
        });
});

// PATCH: Increment blog likes
app.patch('/api/blogs/like/:id', (req, res) => {
    Blog.findByIdAndUpdate(
        req.params.id,
        { $inc: { likes: 1 } },
        { new: true, runValidators: true }
    )
        .then((updatedBlog) => {
            if (!updatedBlog) {
                return res.status(404).json({ message: 'Blog not found' });
            }
            res.json(updatedBlog);
        })
        .catch((err) => {
            console.error('Error updating likes:', err.message);
            if (err.name === 'CastError') {
                return res.status(400).json({ message: 'Invalid blog ID' });
            }
            res.status(500).json({ message: 'Failed to update likes' });
        });
});

// POST: Create a blog
app.post('/api/blogs', (req, res) => {
    const blog = new Blog({
        newTitle: req.body.newTitle,
        newContent: req.body.newContent,
        date: req.body.date,
        likes: req.body.likes ?? 0
    });

    blog.save()
        .then((newBlog) => {
            res.status(201).json(newBlog);
        })
        .catch((err) => {
            console.error('Error creating blog:', err.message);
            res.status(400).json({ message: 'Failed to create blog' });
        });
});

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});