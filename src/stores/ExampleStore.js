import { observable, computed, action, decorate } from "mobx"
// import api from './api'

class ExampleStore {

  counter = 0

  get elapsedTime() {
    return this.current - this.start + "milliseconds"
  }

  increment() {
    this.counter++
    return this.counter
  }

  decrement() {
    this.counter--
    return this.counter
  }
}

decorate(ExampleStore, {
  counter: observable,
  elapsedTime: computed,
  increment: action.bound,
  decrement: action.bound
})

export default ExampleStore
