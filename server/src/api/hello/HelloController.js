export function index (req, res) {
  console.log('HelloController')
  return res.status(200).json({ message: 'Hello world from Express BE' })
}
