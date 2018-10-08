<template>
  <v-app id="app">
    <v-app>
      <v-content>
        <v-container>
          <v-layout row wrap align-center>
            <v-flex xs12 md4>
              <Hero :userProfile="userProfile" />
            </v-flex>
            <v-flex xs12 md5 offset-md2>
              <NewsFeed v-for="post in posts" :key="post.id" :post="post"/>
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
    </v-app>
  </v-app>
</template>

<script>
import * as mockData from './utils/mockData.js'
import Hero from './components/Hero'
import NewsFeed from './components/NewsFeed'

export default {
  name: 'App',
  components: {
    Hero,
    NewsFeed
  },
  data () {
    return {
      title: 'Your Logo',
      userProfile: mockData.userProfile,
      posts: mockData.posts
    }
  }
}
</script>

<style>
@import "https://fonts.googleapis.com/css?family=Roboto:300,700|Material+Icons";
@import "vuetify/dist/vuetify.min.css";
</style>
