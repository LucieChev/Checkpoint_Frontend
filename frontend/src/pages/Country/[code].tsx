import React from "react";

interface CountryDetailsProps {
  country: {
    id: string;
    name: string;
    code: string;
    continent: {
      id: string;
      name: string;
    };
  };
}

const CountryDetails: React.FC<CountryDetailsProps> = ({ country }) => {
  return (
    <div>
      <h2>{country.name}</h2>
      <h2>{country.code}</h2>
      <h2>{country.continent.name}</h2>
    </div>
  );
};

export default CountryDetails;
