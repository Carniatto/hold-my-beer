const API_KEY = 'AIzaSyCuYMVOJ1Rx3a4Wq8LeaSet5Sx-N1dwKI8';
const GRAPHQL_URL = 'https://803votn6w7.execute-api.us-west-2.amazonaws.com/dev/public/graphql';
const POC_QUERY = `query pocSearchMethod($now: DateTime!, $algorithm: String!, $lat: String!, $long: String!) {
      pocSearch(now: $now, algorithm: $algorithm, lat: $lat, long: $long) {
        id
        status
        tradingName
        deliveryTypes {
          price
          title
          subtitle
          active
        }
        paymentMethods {
          active
          title
        }
        pocWorkDay {
          weekDay
          active
          workingInterval {
            openingTime
            closingTime
          }
        }
        address {
          address1
          address2
          number
          city
          province
          zip
          coordinates
        }
        phone {
          phoneNumber
        }
      }
    }`;

const REST_CONSTANTS = {
  API_KEY,
  GRAPHQL_URL,
  POC_QUERY
};

export default REST_CONSTANTS;