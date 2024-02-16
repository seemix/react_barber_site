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

export const barbersMapper = (data) => {
    return data.barbers.nodes.map(barber => {
        return {
            id: barber.barberId,
            name: barber.barbers.name,
            description: barber.barbers.description,
            picture: barber.featuredImage.node.mediaItemUrl
        }
    })
}