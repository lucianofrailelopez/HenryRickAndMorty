import styles from "./Cards.module.css"

export default function Cards(props) {
   console.log(props.characters);
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
