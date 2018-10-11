import mongoose from 'mongoose';

const statSchema = new mongoose.Schema({
  views: {
    type: Number,
    default: 0
  },
  likes: {
    type: Number,
    default: 0
  },
  shares: {
    type: Number,
    default: 0
  },
  comments: {
    type: Number,
    default: 0
  },
  postId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'post'
  }
}, { timestamps: true });

export default mongoose.model('statistics', statSchema);
