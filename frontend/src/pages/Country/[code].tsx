import React from "react";
import styles from "../Countries.module.css";

interface CountryDetailsProps {
  country: {
    id: string;
    name: string;
    code: string;
    continent?: {
      id: string;
      name: string;
    };
  };
}

const CountryDetails: React.FC<CountryDetailsProps> = ({ country }) => {
  return (
    <div className={styles.countryDetailsContainer}>
      <div className={styles.countryDetailsCard}>
        <div className={styles.countryDetail}>
          <span className={styles.countryDetailLabel}>Name:</span>{" "}
          {country.name}
        </div>
        <div className={styles.countryDetail}>
          <span className={styles.countryDetailLabel}>Code:</span>{" "}
          {country.code}
        </div>
        {country.continent && (
          <div className={styles.countryDetail}>
            <span className={styles.countryDetailLabel}>Continent:</span>{" "}
            {country.continent.name}
          </div>
        )}
      </div>
    </div>
  );
};

export default CountryDetails;
