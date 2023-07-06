/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import styles from "./Cards.module.css"
import Card from "../oneCards/Card";

export default function Cards(props) {
   return (
      <div className={styles.containerCards}>
         {props.characters.map((data) => {
            return(
               <Card
               id = {data.id}
               name={data.name}
               status={data.status}
               species={data.species}
               gender={data.gender}
               origin={data.origin.name}
               image={data.image}
               onClose={props.onClose} />
            )
         })}
      </div>
   );
}
