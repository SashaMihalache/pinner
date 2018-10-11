
import { Types } from 'mongoose';
import Post from '../models/Post';
import User from '../models/User';
import Comment from '../models/Comment';
import Stat from '../models/Stat';

export const resolvers = {
    Query: {
        posts: () => Post.find({}),
        post: (root, { id }) => Post.findById(id),
        users: () => User.find({}),
        user: (root, { id }) => User.findById(id),
        comments: () => Comment.find({}),
        comment: (root, { id }) => Comment.findById(id)
    },
    Post: {
        Author: (post) => User.findById(post.authorId),
        Stats: async (post) => Stat.findOne({ postId: post.id }),
        Comments: (post) => Comment.find({ postId: post.id })
    },
    User: {
        fullName: (user) => `${user.firstName} ${user.lastName}`
    },
    Comment: {
        Author: (comment) => User.findById(comment.authorId),
        Post: (comment) => Post.findById(comment.postId)
    },
    Mutation: {
        createPost: async (root, { title, content, imageURL }) => {
            const payload = {
                authorId: "5bbd0a72da1eb94f3ea0f37c",
                title,
                content,
                imageURL
            };
            const newPost = await Post.create(payload);

            const postId = newPost.id;

            const stat = await Stat.create({ postId });
            return newPost;
        },
        createUser: async (root, args) => {
            const user = await User.create(args);
            return user;
        },
        updateUser: async (root, args) => {
            const { id } = args;
            const user = await User.findByIdAndUpdate(id, args);
            return user;
        },
        deleteUser: async (root, { id }) => {
            const user = await User.findByIdAndDelete(id);
            return user;
        },
        createComment: async (root, args) => {
            const comment = await Comment.create(args);
            return comment;
        }
    }
}

export const posts = [
    {
        id: 1,
        title: 'Fusce ullamcorper tellus',
        content: 'Donec vitae suscipit lectus, a luctus diam. Proin vitae felis gravida, lobortis massa sit amet, efficitur erat. Morbi vel ultrices nisi.',
        imageURL: 'https://raw.githubusercontent.com/vuetifyjs/docs/dev/static/doc-images/cards/drop.jpg',
        authorId: 1
    },
    {
        id: 2,
        title: 'Donec vitae suscipit lectus, a luctus diam.',
        content: 'Donec vitae suscipit lectus, a luctus diam. Proin vitae felis gravida, lobortis massa sit amet, efficitur erat. Morbi vel ultrices nisi.',
        imageURL: 'https://raw.githubusercontent.com/vuetifyjs/docs/dev/static/doc-images/cards/docks.jpg',
        authorId: 2
    },
    {
        id: 3,
        title: 'Vestibulum condimentum quam',
        content: 'At sagittis sapien vulputate. Vivamus laoreet lacus id magna rutrum dapibus. Donec vel pellentesque arcu. Maecenas mollis odio tempus felis elementum commodo.',
        imageURL: 'https://raw.githubusercontent.com/vuetifyjs/docs/dev/static/doc-images/cards/plane.jpg',
        authorId: 1
    },
    {
        id: 4,
        title: 'Fusce ullamcorper tellus',
        content: 'Fusce ullamcorper tellus sed maximus rutrum. Donec imperdiet ultrices maximus. Donec non tellus non neque pellentesque fermentum. Aenean in pellentesque urna.',
        imageURL: 'https://raw.githubusercontent.com/vuetifyjs/docs/dev/static/doc-images/cards/drop.jpg',
        authorId: 1
    }
]

export const users = [{
    id: 1,
    firstName: 'Sasha',
    lastName: 'Mihalache',
    email: 'sasha@mihalache.com',
    description: 'This is a description',
    imageURL: 'https://scontent.fomr1-1.fna.fbcdn.net/v/t1.0-9/42558982_2245148868847679_6866649552267509760_n.jpg?_nc_cat=100&oh=11a456f6ae6d7061603520c1b6a299fb&oe=5C4B8041'
},
{
    id: 2,
    firstName: 'jojo',
    lastName: 'cocoocco',
    email: 'ca@ca.com',
    description: 'This is a description 22222',
    imageURL: 'https://www.google.ro/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjEz4aRgvrdAhWKJlAKHbTtBpYQjRx6BAgBEAU&url=http%3A%2F%2Ffuuse.net%2Favatar-placeholder%2F&psig=AOvVaw0CSXs74W_YNvgo7EN1Fcd4&ust=1539197091250969'
}]

export const stats = [
    { postId: 1, views: 2122, likes: 4, shares: 21, comments: 1 },
    { postId: 2, views: 11111, likes: 1, shares: 11, comments: 2 },
    { postId: 3, views: 2222, likes: 2, shares: 22, comments: 0 },
    { postId: 4, views: 33333, likes: 3, shares: 33, comments: 0 },
]

export const comments = [
    { id: 1, text: 'Wtf', authorId: 1, postId: 1 },
    { id: 2, text: 'Wow', authorId: 2, postId: 2 },
    { id: 3, text: 'Ce tare', authorId: 1, postId: 2 },
]

function getMaxId(arr) {
    const nextId = arr.reduce((id, item) => {
        return Math.max(id, item.id);
    }, -1) + 1;
    return nextId
}