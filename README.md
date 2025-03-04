Social Media API

WALKTHROUGH VIDEO: https://drive.google.com/file/d/1SGivQkh6e3s2WEraMF1DQWRsvKUVEi2k/view

📌 Description
The Social Media API is a backend system that allows users to create accounts, post thoughts, react to thoughts, and add friends. This API is built using Node.js, Express.js, and MongoDB (Mongoose ODM) and follows a RESTful architecture.

🎯 Features
✅ User Management: Create, update, delete users
✅ Thought Management: Users can post, update, and delete thoughts
✅ Reactions: Users can add and remove reactions to thoughts
✅ Friends System: Users can add and remove friends
✅ MongoDB Database: Stores all user data and interactions

🛠️ Technologies Used
Node.js - Backend runtime
Express.js - Web framework for building API routes
MongoDB & Mongoose - Database and ODM
JavaScript (ES6) - Main programming language
Insomnia - API testing
Dotenv - Environment variable management
🚀 Installation & Setup
1️⃣ Clone the Repository
bash
Copy
Edit
git clone https://github.com/jgmaxen/social_media_api.git
cd social_media_api
2️⃣ Install Dependencies
bash
Copy
Edit
npm install
3️⃣ Setup Environment Variables
Create a .env file in the root directory and add:

ini
Copy
Edit
MONGO_URI=mongodb://localhost:27017/socialMediaDB
PORT=3001
4️⃣ Start the Server
bash
Copy
Edit
npm run dev  # Starts the server in development mode (nodemon)
OR

bash
Copy
Edit
npm start  # Starts the server normally
🔥 API Routes
User Routes
Method	Endpoint	Description
GET	/api/users	Get all users
GET	/api/users/:userId	Get a single user by ID
POST	/api/users	Create a new user
PUT	/api/users/:userId	Update a user
DELETE	/api/users/:userId	Delete a user
POST	/api/users/:userId/friends/:friendId	Add a friend
DELETE	/api/users/:userId/friends/:friendId	Remove a friend
Thought Routes
Method	Endpoint	Description
GET	/api/thoughts	Get all thoughts
GET	/api/thoughts/:thoughtId	Get a single thought
POST	/api/thoughts	Create a thought
PUT	/api/thoughts/:thoughtId	Update a thought
DELETE	/api/thoughts/:thoughtId	Delete a thought
POST	/api/thoughts/:thoughtId/reactions	Add a reaction to a thought
DELETE	/api/thoughts/:thoughtId/reactions/:reactionId	Remove a reaction
🔍 Testing the API
You can test the API using Insomnia or Postman:

1️⃣ Start the server:

bash
Copy
Edit
npm run dev
2️⃣ Open Insomnia/Postman and send requests to http://localhost:3001/api/

🗄️ Database Models
User Model
javascript
Copy
Edit
{
  _id: ObjectId,
  username: String,
  email: String,
  thoughts: [ObjectId],  // References Thought model
  friends: [ObjectId]    // References User model
}
Thought Model
javascript
Copy
Edit
{
  _id: ObjectId,
  thoughtText: String,
  createdAt: Date,
  username: String, // References User
  reactions: [ { reactionBody, username, createdAt } ]
}
Reaction Schema (Embedded in Thought)
javascript
Copy
Edit
{
  reactionId: ObjectId,
  reactionBody: String,
  username: String,
  createdAt: Date
}
🎯 Future Enhancements
🚀 Authentication: Implement JWT authentication
🚀 Pagination & Filtering: Improve API efficiency for large datasets
🚀 Frontend Integration: Build a frontend to interact with the API

📝 License
This project is licensed under the MIT License.

🙌 Contributors
👤 @jgmaxen

Contributions are welcome! Feel free to fork the repo and submit pull requests.

💡 Questions?
For any questions or support, please open an issue in the GitHub Repository.

