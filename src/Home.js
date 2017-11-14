import React, {Component} from 'react';
import {Link} from "react-router-dom";
import './Home.css';

const API_KEY = 'AIzaSyCuYMVOJ1Rx3a4Wq8LeaSet5Sx-N1dwKI8';
const url = 'https://maps.googleapis.com/maps/api/geocode/json?address=';

class Home extends Component {

  constructor (props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.fetch = this.fetch.bind(this);
    this.state = { local: 'Rua Américo Brasiliense, São Paulo' };
  }

  async fetch() {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const query = `query pocSearchMethod($now: DateTime!, $algorithm: String!, $lat: String!, $long: String!) {
      pocSearch(now: $now, algorithm: $algorithm, lat: $lat, long: $long) {
        __typename
        id
        status
        tradingName
        officialName
        deliveryTypes {
          __typename
          pocDeliveryTypeId
          deliveryTypeId
          price
          title
          subtitle
          active
        }
        paymentMethods {
          __typename
          pocPaymentMethodId
          paymentMethodId
          active
          title
          subtitle
        }
        pocWorkDay {
          __typename
          weekDay
          active
          workingInterval {
            __typename
            openingTime
            closingTime
          }
        }
        address {
          __typename
          address1
          address2
          number
          city
          province
          zip
          coordinates
        }
        phone {
          __typename
          phoneNumber
        }
      }
    }`;

    let res = await fetch(`${url}${this.state.local}&key=${API_KEY}`);

    let locale = await (await res.json());

    locale = locale.results.pop().geometry.location;

    const variables = {
      "algorithm": "NEAREST",
      "lat": locale.lat,
      "long": locale.lng,
      "now": new Date().toISOString()
    };

    const options = {
      method: 'POST',
      headers,
      body: JSON.stringify({query, variables})
    };

    const request = new Request('https://803votn6w7.execute-api.us-west-2.amazonaws.com/dev/public/graphql', options);

    fetch(request).then(
      success => success.json(),
      err => console.error(err)
    ).then(
      res => console.log(res.data)
    )
  }

  handleChange(ref) {
    this.state.local = ref.target.value;
  }

  render() {
    return (
      <div className="Home">
        <h1>It's alive! {'Home'} {JSON.stringify(this.props.match)}</h1>
        <input onChange={this.handleChange} type="text" placeholder="Enter your location..."/>
        <button onClick={this.fetch}>Search</button>
        <Link to="/products">products</Link>
      </div>
    );
  }
}

export default Home;
