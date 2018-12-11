import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'

const Sample = observer(class Sample extends Component {
  render () {
    const { exampleStore: { counter } } = this.props
    return (
      <div>
        Hello World: Component Counter {counter}
      </div>
    )
  }
})

export default
inject('exampleStore')(Sample)
