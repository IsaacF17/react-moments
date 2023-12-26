import gql from 'graphql-tag';

export const ALL_MOMENTS_QUERIES = gql`
  query {
    allMoments {
      data {
        moment
        reaction {
          data {
            reactionType
            quantity
          }
        }
      }
    }
  }
`;

export const CREATE_MOMENT = gql`
  mutation addMoment($creationDate: String!, $moment: String!) {
    createMoment(data: { moment: $moment, creationDate: $creationDate }) {
      _id
    }
  }
`;

export const GET_ONE_MOMENT = gql`
  query {
    oneMoment(limit: 1) {
      data {
        moment
        reaction {
          data {
            reactionType
            quantity
          }
        }
      }
    }
  }
`;
