export async function index (req, res) {
  console.log('HelloController')

  // const db = req.app.locals.db;
  // const posts = await db.collection('posts').find({}).toArray();

  return res.status(200).send(posts)
}
