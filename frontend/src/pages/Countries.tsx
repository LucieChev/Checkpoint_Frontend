import { useState } from "react";
import { useQuery } from "@apollo/client";
import { COUNTRIES } from "@/requests/queries/country.queries";
import CountryDetails from "@/pages/Country/[code]";
import styles from "./Countries.module.css";

interface Country {
  id: string;
  name: string;
  emoji: string;
}

export default function Countries() {
  const { loading, error, data } = useQuery(COUNTRIES);
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error </p>;

  const handleCountryClick = (country: Country) => {
    setSelectedCountry(country);
  };

  return (
    <div>
      <h1>List of Countries</h1>
      <div className={styles.countryList}>
        {data.countries.map((country: Country) => (
          <div
            key={country.id}
            className={styles.countryCard}
            onClick={() => handleCountryClick(country)}
          >
            <span className={styles.countryName}>{country.name}</span> <br />
            <span className={styles.countryEmoji}>{country.emoji}</span>
          </div>
        ))}
      </div>
      {selectedCountry && <CountryDetails country={selectedCountry} />}
    </div>
  );
}
