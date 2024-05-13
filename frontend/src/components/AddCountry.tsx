// import * as React from "react";
// import { useMutation } from "@apollo/client";
// import {NewCountryInput} from "@/types"
// export function AddCountry() {
//   const [addCountry] = useMutation(addCountry);
//   const [formData, setFormData] = React.useState({
//     name: "",
//     emoji: "",
//     code: "",
//   }); // Fonction pour gérer les changements dans les champs du formulaire
//   const handleInputChange = (event: { target: { name: any; value: any } }) => {
//     const { name, value } = event.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   // Fonction pour gérer la soumission du formulaire
//   const handleSubmit = async (event: { preventDefault: () => void }) => {
//     event.preventDefault();

//     // Appelez la fonction d'ajout de pays avec les données du formulaire
//     try {
//       await addCountry({
//         variables: {
//           data: formData,
//         },
//       });
//       // Réinitialisez les champs du formulaire après l'ajout réussi
//       setFormData({ name: "", emoji: "", code: "" });
//       alert("Country added successfully!");
//     } catch (error) {
//       // Gérez les erreurs d'ajout de pays ici
//       console.error("Error adding country:", error);
//       alert("An error occurred while adding the country. Please try again.");
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="countryName">Name:</label>
//         <input
//           id="countryName"
//           name="name"
//           type="text"
//           value={formData.name}
//           onChange={handleInputChange}
//           required
//         />
//         <label htmlFor="emoji">Emoji:</label>
//         <input></input>
//         <label htmlFor="code">Code:</label>
//         <input></input>
//         <button type="submit">Add</button>
//       </form>
//     </div>
//   );
// }
