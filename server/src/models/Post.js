import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    default: 'Lorem Ipsum description'
  },
  imageURL: {
    type: String,
    default: 'https://www.google.ro/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiRjI_xg_rdAhUOK1AKHdZuDJYQjRx6BAgBEAU&url=http%3A%2F%2Fhifadhiafrica.org%2Fdefault-placeholder%2F&psig=AOvVaw1UV7AsZVqip7Q4mMPhv3VF&ust=1539197548495149'
  },
  authorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  }
}, { timestamps: true });

export default mongoose.model('post', postSchema);
