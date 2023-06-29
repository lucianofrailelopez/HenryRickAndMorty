import styles from './Card.module.css'

export default function Card(props, key) {
   return (
      <div className={styles.containerCard}>
         <div className={styles.containerButton}>
            <button onClick={props.onClose}>X</button>
            <img src={props.image} alt='No se encontro' key={key} />
         </div>
         <div className={styles.containerDescription}>
            <h2 key={key}>Name: {props.name}</h2>
            <h2 key={key}>Status: {props.status}</h2>
            <h2 key={key}>Species: {props.species}</h2>
            <h2 key={key}>Gender: {props.gender}</h2>
            <h2 key={key}>Origin: {props.origin}</h2>
         </div>
      </div>
   );
}
