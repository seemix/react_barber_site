import { gql } from '@apollo/client';

export const ABOUT_US = (language = 'RU') => {
    return gql`query NewQuery {
        pages(where: {languages: ${language}}) {
            nodes {
                content
            }
        }
    }`
};

export const aboutMapper = (data) => {
    return data.pages.nodes[0].content;
}