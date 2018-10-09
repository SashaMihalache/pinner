<template>
  <div class="text-xs-center sticky-half">
    <v-avatar size="125px">
      <img
        class="img-circle elevation-7 mb-1"
        :src="user.imageURL"
      >
    </v-avatar>
    <div class="headline">
      {{user.firstName}}
      <span style="font-weight:bold">
        {{user.lastName}}
      </span>
    </div>
    <div class="subheading text-xs-center grey--text pt-1 pb-3">
      {{user.description}}
    </div>
    <v-layout justify-space-between>
      <a href="javascript:;" class="body-2">Home</a>
      <a href="javascript:;" class="body-2">About</a>
      <a href="javascript:;" class="body-2">Github</a>
      <a href="javascript:;" class="body-2">Other</a>
    </v-layout>
  </div>
</template>

<script>
import { getUser } from '../graphql/queries.js'

export default {
  name: 'Hero',
  data () {
    return {
      user: {}
    }
  },
  apollo: {
    user: {
      query: getUser,
      variables: {
        id: 1
      }
    }
  }
}
</script>

<style scoped>
  .sticky-half {
    position: fixed;
    top: calc(50% - 60px);
  }
</style>
