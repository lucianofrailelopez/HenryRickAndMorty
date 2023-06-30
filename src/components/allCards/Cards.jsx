/* eslint-disable react/prop-types */
import styles from "./Cards.module.css"
import Card from "../OneCards";

export default function Cards(props) {
   return (
      <div className={styles.containerCards}>
         {props.characters.map((data) => {
            return(
               <Card
               name={data.name}
               status={data.status}
               species={data.species}
               gender={data.gender}
               origin={data.origin.name}
               image={data.image}
               onClose={() => window.alert('Emulamos que se cierra la card')}
               key={data.id} />
            )
         })}
      </div>
   );
}
