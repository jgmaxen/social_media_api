import { Schema, model, Document } from 'mongoose';

// Define an interface for the Thought document
interface IThought extends Document {
  thoughtID: string;
  thoughtText: string;
  username: string;
  createdAt: Date;
  reactions: string[]; // Array of reaction IDs
}

// Construct a new instance of the schema class
const thoughtSchema = new Schema<IThought>({
  thoughtID: { type: String, required: true },
  thoughtText: { type: String, required: true, minlength: 1, maxlength: 280 },
  username: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  reactions: [{ type: String }],
});

// Compile a model based on the schema
const Thought = model('Thought', thoughtSchema);

// Create a new instance of the model, a document
Thought.create({
  thoughtID: 't1',
  thoughtText: 'Here’s a cool thought...',
  username: 'j2wavy',
})
  .then(result => console.log('Created new thought document', result))
  .catch(err => console.log(err));

export default Thought;
