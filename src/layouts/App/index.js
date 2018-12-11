import React from 'react'
import { Provider } from 'mobx-react'
import { Router } from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory'
import stores from 'stores'
import Routes from 'routes'

import '../../styles/App.scss'

class Core extends React.Component {
  constructor (props) {
    super(props)

    this._history = createBrowserHistory()
  }

  render () {
    return (
      <Provider {...stores}>
        <Router history={this._history}>
          <div>
            <main>
              {this.props.children}
              <Routes />
            </main>
          </div>
        </Router>
      </Provider>
    )
  }
}

export default Core
