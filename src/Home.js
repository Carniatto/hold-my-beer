import React, {Component} from 'react';
import './Home.css';
import RestModelService from "./rest-model";
import PlacesAutocomplete from 'react-places-autocomplete'
import search from './search.svg';
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

    const cssClasses = {
      input: 'input',
      googleLogoContainer: 'brand-container',
      autocompleteItem: 'list-item',
      autocompleteItemActive: 'selected'
    }

    return (
      <div className="Home">
        <div className="welcome">
          <div className="welcome-phrase">
            <div className="welcome-title"><span>PARA TODOS</span></div>          
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>
            Nunc non laoreet nulla, et consequat nunc. Nulla pulvinar elit et pellentesque consequat.<br/>            
            Nam sed aliquet nisi, scelerisque consectetur tortor.<br/>
          </div>
        </div>
        <div className="search-area">
          <form className="search-field" onSubmit={this.handleFormSubmit.bind(this)}>
            <PlacesAutocomplete inputProps={inputProps} classNames={cssClasses}/>
            <button className="search-button" type="submit">
              <img className="search" src={search}/>
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Home;
