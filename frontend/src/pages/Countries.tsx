import { useState } from 'react';
import { useQuery } from "@apollo/client";
import { COUNTRIES } from "@/requests/queries/country.queries";
import CountryDetails from "@/pages/Country/[code]"; // Importez le composant CountryDetails

interface Country {
  id: string; 
  name: string;

}

export default function Countries() {
  const { loading, error, data } = useQuery(COUNTRIES);
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);

  console.log({ loading, error, data });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error </p>;

  const handleCountryClick = (country: Country) => {
    setSelectedCountry(country);
  };

  return (
    <div>
      <h1>List of Countries</h1>
      <ul>
        {data.countries.map((country: Country) => (
          <li key={country.id} onClick={() => handleCountryClick(country)}>
            {country.name}
          </li>
        ))}
      </ul>
      {selectedCountry && <CountryDetails country={selectedCountry} />}
    </div>
  );
}
