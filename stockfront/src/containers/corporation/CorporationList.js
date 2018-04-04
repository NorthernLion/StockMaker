import React from 'react'
import Select from 'react-select'
import { connect } from 'react-redux'

// This class is more of a selector honestly and should be put in component.
// Local state is not really ideal implementation, should be made global!
class CorporationList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedOption: '',
    }
  }

  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Selected: ${selectedOption.label}`);
  }
  
  render() {
    const { selectedOption } = this.state;
    const value = selectedOption && selectedOption.value;

    //The Following works and is done because of the field names the react-select requires. Could be done better!
    let corporations = this.props.corporations
    corporations = JSON.parse(JSON.stringify(corporations).split('"name":').join('"label":'))
    corporations = JSON.parse(JSON.stringify(corporations).split('"symbol":').join('"value":'))

    return (
      <Select
        name="form-field-name"
        value={value}
        onChange={this.handleChange}
        options={corporations}
      />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    corporations: state.corporations,
  }
}


export default connect(mapStateToProps, null)(CorporationList)
