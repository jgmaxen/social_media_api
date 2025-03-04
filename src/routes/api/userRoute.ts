import { Router } from 'express';
const router = Router();
import { 
  getSingleUsers, 
  getUsers, 
  createFriend, 
  createUser, 
  deleteFriend, 
  updateUser,
} from '../../controllers/userController.js';

//  Define routes
router.route('/')
  .get(getUsers)   // Get all users
  .post(createUser); // Create new user

//  Route to get & update a single user by ID
router.route('/:userId')
  .get(getSingleUsers)  
  .put(updateUser);     

//  Add and remove a friend
router.route('/:userId/friends/:friendId')
  .post(createFriend)  // Add a friend
  .delete(deleteFriend); // Remove a friend

export default router;
