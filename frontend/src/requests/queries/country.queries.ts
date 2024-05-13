import { gql } from "@apollo/client";

export const COUNTRIES = gql`
  query countries {
    countries {
      id
      code
      name
      emoji
      continent {
        id
        name
      }
    }
  }
`;
export const COUNTRY = gql`
  query country($code: String!) {
    country(code: $code) {
      code
      continent {
        id
        name
      }
    }
  }
`;
