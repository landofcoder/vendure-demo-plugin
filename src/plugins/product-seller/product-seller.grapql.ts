import gql from 'graphql-tag';

export const GET_FACETS = gql`query {
  facets(options: {}){
    items {
      id
      name
      code
    }
  }
}`;