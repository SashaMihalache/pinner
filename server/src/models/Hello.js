import mongoose from 'mongoose'

const helloSchema = new mongoose.Schema({
  message: String,
})

export default mongoose.model('hello', helloSchema)
