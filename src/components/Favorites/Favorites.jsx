/* eslint-disable no-unused-vars */
import { useState } from "react";
import style from "./Favorites.module.css";
import { useSelector, useDispatch } from "react-redux";
import {filterCards, orderCards} from '../../redux/actions/actions';
import Card from "../oneCards/Card";

export default function Favorites() {
  const [aux, setAux] = useState(false)

  const favorites = useSelector((state) => state.myFavorites);
  const dispatch = useDispatch();
  const handleOrder = (e) => {
    dispatch(orderCards(e.target.value));
    setAux(!aux);
  }
  const handleFilter = (e) => {
    dispatch(filterCards(e.target.value))
  }
  
  return (
    <div className={style.container}>
      <div className={style.containerOptionsFav}>
        <select onChange={handleOrder}>
          <option value="A">Ascendente</option>
          <option value="D">Desendente</option>
        </select>
        <select onChange={handleFilter}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">unknown</option>
          <option value="allCharacters">All Characters</option>
        </select>
      </div>
      {favorites?.map((char, index) => (
        <Card
          key={index}
          id={char.id}
          name={char.name}
          species={char.species}
          gender={char.gender}
          status={char.status}
          image={char.image}
          origin={char.origin.name}
        />
      ))}
    </div>
  );
}
