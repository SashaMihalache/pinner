import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: 'Lorem Ipsum description'
  },
  imageURL: {
    type: String,
    default: 'https://www.google.ro/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjEz4aRgvrdAhWKJlAKHbTtBpYQjRx6BAgBEAU&url=http%3A%2F%2Ffuuse.net%2Favatar-placeholder%2F&psig=AOvVaw0CSXs74W_YNvgo7EN1Fcd4&ust=1539197091250969'
  }
}, { timestamps: true });

export default mongoose.model('user', userSchema);
