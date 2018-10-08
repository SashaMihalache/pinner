<template>
  <div class="text-xs-center" style="position: fixed; top: 50px;">
    <v-avatar size="125px">
      <img
        class="img-circle elevation-7 mb-1"
        :src="userProfile.imageURL"
      >
    </v-avatar>
    <div class="headline">
      {{userProfile.firstName}}
      <span style="font-weight:bold">
        {{userProfile.lastName}}
      </span>
    </div>
    <div class="subheading text-xs-center grey--text pt-1 pb-3">
      {{userProfile.description}}
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
export default {
  name: 'Hero',
  props: ['userProfile']
}
</script>
