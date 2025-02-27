import express from 'express';
import { MongoClient } from 'mongodb';

const app = express();
const PORT = process.env.PORT || 3001;

// Connection string to local instance of MongoDB
const connectionStringURI = `mongodb://127.0.0.1:27017`;

// Initialize a new instance of MongoClient
const client = new MongoClient(connectionStringURI);

// Create variable to hold our database name
const dbName = 'socialNetwork';

// Function to connect to MongoDB and start the server
const startServer = async () => {
    try {
        await client.connect();
        console.log('✅ Connected to MongoDB successfully!');
        
        const db = client.db(dbName);

        // Built-in Express middleware to parse incoming JSON requests
        app.use(express.json());

        // ✅ **POST /users** → Add a new user
        app.post('/users', async (req, res) => {
            try {
                const results = await db.collection('users').insertOne({
                    username: req.body.username,
                    email: req.body.email,
                    thoughts: req.body.thoughts || [],
                    friends: req.body.friends || [],
                });
                res.status(201).json(results);
            } catch (error) {
                res.status(500).json({ error: error.message });
            }
        });

        // ✅ **GET /users** → Retrieve all users
        app.get('/users', async (_req, res) => {
            try {
                const results = await db.collection('users').find().toArray();
                res.status(200).json(results);
            } catch (error) {
                res.status(500).json({ error: error.message });
            }
        });

        // ✅ **POST /thoughts** → Add a new thought (post)
        app.post('/thoughts', async (req, res) => {
            try {
                const results = await db.collection('thoughts').insertOne({
                    userId: req.body.userId,
                    content: req.body.content,
                    reactions: req.body.reactions || [],
                });
                res.status(201).json(results);
            } catch (error) {
                res.status(500).json({ error: error.message });
            }
        });

        // ✅ **GET /thoughts** → Retrieve all thoughts (posts)
        app.get('/thoughts', async (_req, res) => {
            try {
                const results = await db.collection('thoughts').find().toArray();
                res.status(200).json(results);
            } catch (error) {
                res.status(500).json({ error: error.message });
            }
        });

        // Start the server **only after MongoDB is connected**
        app.listen(PORT, () => {
            console.log(`🚀 Server running at http://localhost:${PORT}`);
        });

    } catch (err) {
        console.error('❌ Error connecting to MongoDB:', err);
    }
};

// **Start the server**
startServer();
