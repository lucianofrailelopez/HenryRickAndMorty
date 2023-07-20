/* eslint-disable react/prop-types */
import { useState } from "react";
import styles from "./Search.module.css"

export default function SearchBar({ onSearch }) {
   const [id, setId] = useState("");

   const handleChange = (event) => {
      setId(event.target.value)
   }

   return (
      <div className={styles.containerSearch}>
         <input type='search' onChange={handleChange} placeholder="Buscardor de Personaje..." />
         <button onClick={() => onSearch(id)}>Agregar</button>
      </div>
   );
}
