<template>
  <v-app id="app">
    <v-app>
      <v-content>
        <v-container class="full-height">
          <v-layout row wrap align-center class="contain-in-full-height">
            <v-flex xs12 md4>
              <Hero />
            </v-flex>
            <v-flex xs12 md5 offset-md2>
              <NewsFeed />
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
    </v-app>
  </v-app>
</template>

<script>
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
      title: 'Your Logo'
    }
  }
}
</script>

<style>
@import "https://fonts.googleapis.com/css?family=Roboto:300,700|Material+Icons";
@import "vuetify/dist/vuetify.min.css";

</style>
