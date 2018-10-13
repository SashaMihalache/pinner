import { MongoClient } from 'mongodb';

export async function connectToDB () {
  try {
    const client = await MongoClient.connect(process.env.DB_URL, { useNewUrlParser: true });
    const db = client.db(process.env.DB_NAME)
    console.log('Connected to MongoDB Server');
    return {
      Posts: db.collection('posts'),
      Users: db.collection('users'),
      Comments: db.collection('comments')
    }
  } catch (e) {
    console.log(e);
  }
}