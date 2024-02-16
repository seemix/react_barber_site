import { gql } from '@apollo/client';

export const ALL_BARBERS = gql`
query NewQuery {
  barbers {
    nodes {
      barbers {
        description
        name
      }
      barberId
      featuredImage {
        node {
          mediaItemUrl
        }
      }
    }
  }
}`;
