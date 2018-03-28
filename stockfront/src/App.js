import React, { Component } from 'react'
import { connect } from 'react-redux'
import Button from 'material-ui/Button';

class App extends React.Component {
  componentWillMount() {
  }

  render() {
    return (
      <Button variant="raised" color="primary">
        Hello World
      </Button>
    )
  }
}

export default connect(null, null)(App)
