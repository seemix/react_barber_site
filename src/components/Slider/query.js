import { gql } from '@apollo/client';

export const ALL_SLIDES = gql`query NewQuery {
  slides {
    nodes {
      featuredImage {
        node {
          mediaItemUrl
        }
      }
      id
    }
  }
}`;

export const slideMapper = (data) => {
    return data.slides.nodes.map(slide => {
        return {
            id: slide.id,
            slide: slide.featuredImage.node.mediaItemUrl
        }
    })
};
