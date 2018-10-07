<template>
  <div class='hello-world'>
    <img src="../assets/logo.png" alt="no img found" />

    <h1>Pinner App</h1>

    <div>
    <h2>Vuex</h2>
    <h3>{{ getCounter }}</h3>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    </div>
    <hr>
    <div>
    <h2>BE Vuex</h2>
    <button @click="getHello">Fetch</button>
    <h3 v-if="getMessage"> {{ getMessage }}</h3>
    <h3 v-else>Fetch data</h3>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters(['getCounter', 'getMessage'])
  },
  methods: {
    ...mapActions({
      increment: 'incrementCounter',
      decrement: 'decrementCounter',
      getHello: 'getHello'
    })
  }
}
</script>

<style>
  .hello-world {
    width: 400px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid grey;
  }

  img {
    margin: 0 auto;
    height: 80px;
  }
</style>
