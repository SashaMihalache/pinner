import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
  text: {
    type: String
  },
  authorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  postId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'post'
  }

}, { timestamps: true });

export default mongoose.model('comment', commentSchema);
