const express = require('express');
const app = express();
const port = 3000;

const mongoose = require('mongoose');

// MongoDB connection
const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://sahil:shikha11@cluster0.20riyqg.mongodb.net/mydbs', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1);
    }
};

connectDB();

app.get('/', async (req, res) => {
    const Cat = mongoose.model('Cat', { name: String });
    
    try {
        const cat = new Cat({ name: "juli" });
        const data = await cat.save();
        res.send(data);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
