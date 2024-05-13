import React from "react";
import { useMutation } from "@apollo/client";
import { ADDCOUNTRY } from "@/requests/mutations/country.mutations";
import { NewCountryInput } from "@/types";
import { COUNTRIES } from "@/requests/queries/country.queries";
import styles from "./AddCountry.module.css";

const AddCountry = () => {
  const [addCountry] = useMutation(ADDCOUNTRY, {
    refetchQueries: [{ query: COUNTRIES }],
  });
  const [formData, setFormData] = React.useState<NewCountryInput>({
    name: "",
    emoji: "",
    code: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await addCountry({
        variables: {
          data: formData,
        },
      });
      setFormData({ name: "", emoji: "", code: "" });
    } catch (error) {
      console.error("Error adding country:", error);
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label htmlFor="countryName">Name:</label>
        <input
          id="countryName"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleInputChange}
          required
          className={styles.input}
        />
        <label htmlFor="emoji">Emoji:</label>
        <input
          id="emoji"
          name="emoji"
          type="text"
          value={formData.emoji}
          onChange={handleInputChange}
          required
          className={styles.input}
        />
        <label htmlFor="code">Code:</label>
        <input
          id="code"
          name="code"
          type="text"
          value={formData.code}
          onChange={handleInputChange}
          required
          className={styles.input}
        />
        <button type="submit" className={styles.button}>
          Add
        </button>
      </form>
    </div>
  );
};

export default AddCountry;
