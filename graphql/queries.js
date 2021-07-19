import {gql} from '@apollo/client'

const GETS_ALL_JOBS=gql`
query Posts {
    posts{
      id
      title
      content
      cover{
        url
      }
    }
  }`;
export {GETS_ALL_JOBS};