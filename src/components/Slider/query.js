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
       // const urlParts = slide.featuredImage.node.mediaItemUrl.split('.');
        return {
            id: slide.id,
          //  slide: `${urlParts.join('.')} 1920w, ${urlParts[0]}.${urlParts[1]}-648x1080.${urlParts[2]} 640w`
            slide: slide.featuredImage.node.mediaItemUrl
        }
    })
};
