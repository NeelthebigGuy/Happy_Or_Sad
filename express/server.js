const express = require('express');
const MongoClient = require('mongodb').MongoClient;

const server = express();
const port = 3000;
const url = 'mongodb://localhost:27017';
const dbName = 'myDatabase';
let db;

// Asynchronous function to connect to MongoDB
async function connectToMongoDB() {
    try {
        const client = await MongoClient.connect(url);
        db = client.db(dbName);
        console.log('Connected successfully to MongoDB');
    } catch (err) {
        console.error('Failed to connect to MongoDB:', err);
    }
}

// Connect to MongoDB
connectToMongoDB();

server.use(express.json()); // Middleware to parse JSON bodies

// Route to handle POST requests to add a new mood entry
server.post('/moods', async (req, res) => {
    try {
        const { mood, ipv4, latN, longW } = req.body;
        const result = await db.collection('moods').insertOne({ mood, ipv4, latN, longW });
        res.status(201).json({ message: 'Mood entry created', id: result.insertedId });
    } catch (err) {
        console.error('Failed to add mood entry:', err);
        res.status(500).json({ message: 'Failed to add mood entry', error: err.message });
    }
});

// Route to handle GET requests to retrieve latitudes and longitudes of all mood entries
server.get('/moods/locations', async (req, res) => {
    try {
        const entries = await db.collection('moods').find({}, { projection: { latN: 1, longW: 1 } }).toArray();
        const locations = entries.map(entry => ({
            latN: entry.latN,
            longW: entry.longW
        }));
        res.status(200).json(locations);
    } catch (err) {
        console.error('Failed to retrieve locations:', err);
        res.status(500).json({ message: 'Failed to retrieve locations', error: err.message });
    }
});

server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
