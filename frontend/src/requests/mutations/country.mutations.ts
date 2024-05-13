import { gql } from "@apollo/client";

export const ADDCOUNTRY = gql`
  mutation addCountry($data: NewCountryInput!) {
    addCountry(data: $data) {
      id
      code
      name
      emoji
      continent {
        name
        id
      }
    }
  }
`;
