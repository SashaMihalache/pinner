import * as types from './types'

export const mutations = {
  [types.INCREMENT_COUNTER] (state) {
    state.counter++
  },
  [types.DECREMENT_COUNTER] (state) {
    state.counter--
  }
}
