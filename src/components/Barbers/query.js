import { gql } from '@apollo/client';

export const ALL_BARBERS = (language = 'RU') => {
    return gql`
        query NewQuery {
            barbers(where: {dateQuery: {}, languages: ${language}}) {
                nodes {
                    barbers {
                        description
                        name
                        about
                    }
                    barberId
                    featuredImage {
                        node {
                            mediaItemUrl
                        }
                    }
                }
            }
        }`
}

export const barbersMapper = (data) => {
    return data.barbers.nodes.map(barber => {
        return {
            id: barber.barberId,
            name: barber.barbers.name,
            description: barber.barbers.description,
            about: barber.barbers.about,
            picture: barber.featuredImage.node.mediaItemUrl
        }
    })
};