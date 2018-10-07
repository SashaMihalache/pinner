import * as types from './types'

export const incrementCounter = (context) => {
  context.commit(types.INCREMENT_COUNTER)
}

export const decrementCounter = (context) => {
  context.commit(types.DECREMENT_COUNTER)
}
