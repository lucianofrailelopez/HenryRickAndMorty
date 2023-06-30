/* eslint-disable react/prop-types */
import styles from "./Search.module.css"

export default function SearchBar(props) {
   return (
      <div className={styles.containerSearch}>
         <input type='search' placeholder="Buscardor de Personaje..." />
         <button onClick={props.onSearch}>Agregar</button>
      </div>
   );
}
