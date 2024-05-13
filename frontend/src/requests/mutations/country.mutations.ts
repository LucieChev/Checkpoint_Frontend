import { gql } from "@apollo/client";

export const ADDCOUNTRY = gql`
  mutation AddCountry($data: NewCountryInput!) {
    addcountry(data: $data) {
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
