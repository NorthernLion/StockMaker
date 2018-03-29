import React from 'react'
import { connect } from 'react-redux'
import Button from 'material-ui/Button'
import CorporationList from './containers/corporation/CorporationList'
import { getAllCorporations } from './containers/corporation/services/corporationApiActions'

class App extends React.Component {
  componentWillMount() {
    this.props.getAllCorporations()
  }

  render() {
    return (
      <div>
      <Button variant="raised" color="primary">
        Hello World
      </Button>
      <CorporationList />
      </div>
    )
  }
}

export default connect(null, { getAllCorporations })(App)
