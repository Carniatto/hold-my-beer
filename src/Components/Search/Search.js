import React, {Component} from 'react';
import './Search.css';
import PlacesAutocomplete from 'react-places-autocomplete'
import search from '../../Assets/search.svg';

class Search extends Component {

  constructor(props) {
    super(props);
    this.state = { address: '' };
  }

  render() {

    const cssClasses = {
      input: 'input',
      googleLogoContainer: 'brand-container',
      autocompleteItem: 'list-item',
      autocompleteItemActive: 'selected'
    };

    const options = {
      country: 'brazil'
    };

    return (
      <div className="search-area">
        <div className="search-field">
          <PlacesAutocomplete inputProps={this.props.inputProps}
                              classNames={cssClasses}
                              onSelect={this.props.onSearch}
                              options={options}
          />
          <div className="search-icon">
            <img className="search" src={search}/>
          </div>
        </div>
      </div>
    )
  }
}

export default Search;