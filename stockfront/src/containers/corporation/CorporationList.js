import React from 'react'
import Select from 'react-select'


// This class is more of a selector honestly and should be put in component.
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

    return (
      <Select
        name="form-field-name"
        value={value}
        onChange={this.handleChange}
        options={[
          { value: 'one', label: 'One' },
          { value: 'two', label: 'Two' },
        ]}
      />
    )
  }
}

export default CorporationList
