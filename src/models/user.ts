import { Schema, model, Document } from 'mongoose';

// Define an interface for the User document
interface IUser extends Document {
  userID: string;
  username: string;
  email: string;
  thoughts: string[]; // Array of thought IDs
  friends: string[]; // Array of user IDs
}

// Construct a new instance of the schema class
const userSchema = new Schema<IUser>({
  userID: { type: String, required: true },
  username: { type: String, required: true, unique: true, trim: true },
  email: { 
    type: String, 
    required: true, 
    unique: true, 
    match: [/.+@.+\..+/, 'Must match a valid email address'] 
  },
  thoughts: [{ type: String }],
  friends: [{ type: String }],
});

// Compile a model based on the schema
const User = model('User', userSchema);

// Create a new instance of the model, a document
User.create({
  userID: '12345',
  username: 'j2wavy',
  email: 'j2wavy@example.com',
})
  .then(result => console.log('Created new user document', result))
  .catch(err => console.log(err));

export default User;
