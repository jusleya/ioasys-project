import React from 'react'
import { Consumer } from './index'

const withConsumer = (Component) => class WithConsumer extends React.Component {
  render() {
    return (
      <Consumer>
        {store => <Component {...store} {...this.props} />}
      </Consumer>
    )
  }
}

export default withConsumer;