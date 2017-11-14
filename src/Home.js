import React, {Component} from 'react';
import './Home.css';
import RestModelService from "./rest-model";
import PlacesAutocomplete from 'react-places-autocomplete'

class Home extends Component {

  constructor (props) {
    super(props);
    this.state = { address: '' };
    this.onChange = (address) => this.setState({ address });
  }

  async handleFormSubmit(evt) {
    evt.preventDefault();

    const location = await RestModelService.getLocale(this.state.address);

    const poc = await RestModelService.getPOC(location);
    console.log(poc);
  }

  render() {
    const inputProps = {
      value: this.state.address,
      onChange: this.onChange,
    };

    return (
      <div className="Home">
        <form onSubmit={this.handleFormSubmit.bind(this)}>
          <PlacesAutocomplete inputProps={inputProps}/>
          <button type="submit">Search</button>
        </form>
      </div>
    );
  }
}

export default Home;
