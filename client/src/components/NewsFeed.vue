<template>
  <div class="news-feed">
    <v-progress-circular
      v-if="$apollo.queries.posts.loading"
      indeterminate
      size="60" />
    <Post
      v-for="post in posts"
      :post="post"
      :key="post.id" />
  </div>
</template>

<script>
import { getAllPosts } from '../graphql/queries.js'
import Post from './Post'

export default {
  name: 'NewsFeed',
  components: {
    Post
  },
  apollo: {
    posts: getAllPosts
  },
  data () {
    return {
      posts: []
    }
  }
}
</script>

<style scoped>
  .news-feed {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>
