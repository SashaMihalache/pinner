export const posts = [
  {
    id: 1,
    title: 'Fusce ullamcorper tellus',
    content: 'Donec vitae suscipit lectus, a luctus diam. Proin vitae felis gravida, lobortis massa sit amet, efficitur erat. Morbi vel ultrices nisi.',
    imageURL: 'https://raw.githubusercontent.com/vuetifyjs/docs/dev/static/doc-images/cards/drop.jpg'
  },
  {
    id: 2,
    title: 'Donec vitae suscipit lectus, a luctus diam.',
    content: 'Donec vitae suscipit lectus, a luctus diam. Proin vitae felis gravida, lobortis massa sit amet, efficitur erat. Morbi vel ultrices nisi.',
    imageURL: 'https://raw.githubusercontent.com/vuetifyjs/docs/dev/static/doc-images/cards/docks.jpg'
  },
  {
    id: 3,
    title: 'Vestibulum condimentum quam',
    content: 'At sagittis sapien vulputate. Vivamus laoreet lacus id magna rutrum dapibus. Donec vel pellentesque arcu. Maecenas mollis odio tempus felis elementum commodo.',
    imageURL: 'https://raw.githubusercontent.com/vuetifyjs/docs/dev/static/doc-images/cards/plane.jpg'
  },
  {
    id: 4,
    title: 'Fusce ullamcorper tellus',
    content: 'Fusce ullamcorper tellus sed maximus rutrum. Donec imperdiet ultrices maximus. Donec non tellus non neque pellentesque fermentum. Aenean in pellentesque urna.',
    imageURL: 'https://raw.githubusercontent.com/vuetifyjs/docs/dev/static/doc-images/cards/drop.jpg'
  },
  {
    id: 5,
    title: 'Donec vitae suscipit lectus, a luctus diam.',
    content: 'Donec vitae suscipit lectus, a luctus diam. Proin vitae felis gravida, lobortis massa sit amet, efficitur erat. Morbi vel ultrices nisi.',
    imageURL: 'https://raw.githubusercontent.com/vuetifyjs/docs/dev/static/doc-images/cards/docks.jpg'
  },
  {
    id: 6,
    title: 'Vestibulum condimentum quam',
    content: 'At sagittis sapien vulputate. Vivamus laoreet lacus id magna rutrum dapibus. Donec vel pellentesque arcu. Maecenas mollis odio tempus felis elementum commodo.',
    imageURL: 'https://raw.githubusercontent.com/vuetifyjs/docs/dev/static/doc-images/cards/plane.jpg'
  }
]

export const users = [{
  id: 1,
  firstName: 'Sasha',
  lastName: 'Mihalache',
  email: 'sasha@mihalache.com',
  description: 'This is a description',
  imageURL: 'https://scontent.fomr1-1.fna.fbcdn.net/v/t1.0-9/42558982_2245148868847679_6866649552267509760_n.jpg?_nc_cat=100&oh=11a456f6ae6d7061603520c1b6a299fb&oe=5C4B8041'
}]


export const resolvers = {
  Query: {
    posts: () => {
      return posts;
    },
    user: (root, { id }) => {
      return users.find(user => user.id === parseInt(id))
    }
  }
}