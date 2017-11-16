import REST_CONSTANTS from './rest-constants'
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete'



class RestModelService {

  static async getLocale(addr) {
    return await geocodeByAddress(addr)
      .then(results => getLatLng(results[0]))
      .catch(error => console.error('Error', error));
  }

  static async getPOC(location, date = new Date().toISOString()) {

    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const variables = {
      "algorithm": "NEAREST",
      "lat": location.lat,
      "long": location.lng,
      "now": date
    };

    const options = {
      method: 'POST',
      headers,
      body: JSON.stringify({
        query: REST_CONSTANTS.POC_QUERY,
        variables
      })
    };

    const response = await fetch(REST_CONSTANTS.GRAPHQL_URL, options);

    return await (
      await response.json()
    ).data;

  }

  static async getProducts(id) {

    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const variables = {
      "id": id,
      "search": "",
      "categoryId": 0
    };

    const options = {
      method: 'POST',
      headers,
      body: JSON.stringify({
        query: REST_CONSTANTS.PRODUCTS_QUERY,
        variables
      })
    };

    const response = await fetch(REST_CONSTANTS.GRAPHQL_URL, options);

    return await (
      await response.json()
    ).data
     .poc
     .products
     .map( p => p.productVariants.pop());


  }


}

export default RestModelService;