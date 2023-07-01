/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import styles from './Card.module.css'

export default function Card(props, key) {
   const onClose = props.onClose;
   return (
      <div className={styles.containerCard}>
         <div className={styles.containerButton}>
            <button onClick={() => onClose(props.id)}>X</button>
            <img src={props.image} alt='No se encontro' key={key} />
         </div>
         <div className={styles.containerDescription}>
            <Link to={`/deatil/${props.id}`} >
               <h2 key={key}>Name: {props.name}</h2>
            </Link>
            <h2 key={key}>Status: {props.status}</h2>
            <h2 key={key}>Species: {props.species}</h2>
            <h2 key={key}>Gender: {props.gender}</h2>
            <h2 key={key}>Origin: {props.origin}</h2>
         </div>
      </div>
   );
}
