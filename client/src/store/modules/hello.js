import * as types from '../types'

const helloModule = {
  state: {
    message: ''
  },
  getters: {
    getMessage (state) {
      return state.message
    }
  },
  mutations: {
    [types.HANDLE_FETCH_HELLO] (state, payload) {
      state.message = payload
    }
  },
  actions: {
    getHello (context) {
      fetch('http://localhost:3000/api/hello')
        .then(response => response.json())
        .then(data => {
          context.commit(types.HANDLE_FETCH_HELLO, data.message)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}

export default helloModule
