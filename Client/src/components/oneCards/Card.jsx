/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions/actions";

import styles from "./Card.module.css";

export default function Card({
  name,
  species,
  onClose,
  gender,
  status,
  origin,
  image,
  id,
  key
}) {
  const [isFav, setIsFav] = useState(false);

  const dispatch = useDispatch(); // CREO UN DISPATCH
  const favorites = useSelector((state) => state.myFavorites);

  function handleClick() {
    //despachar el objeto de la accion
    if (isFav) {
      setIsFav(false);
      dispatch(removeFav(id));
    } else {
      setIsFav(true);
      dispatch(
        addFav({
          name,
          species,
          onClose,
          gender,
          status,
          origin,
          image,
          id,
        })
      );
    }
  }

  useEffect(() => {
    favorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [favorites]);

  return (
    <div className={styles.containerCard}>
      <div className={styles.containerButton}>
        {isFav ? (
          <button className={styles.buttonFav} onClick={handleClick}>❤️</button>
        ) : (
          <button className={styles.buttonFav} onClick={handleClick}>🤍</button>
        )}
        {onClose ? <button className={styles.buttonClose} onClick={() => onClose(id)}>X</button> : null}
        <img src={image} alt="No se encontro" key={key} />
      </div>
      <div className={styles.containerDescription}>
        <Link to={`/deatil/${id}`}>
          <h2 key={key}>Name: {name}</h2>
        </Link>
        <h2 key={key}>Status: {status}</h2>
        <h2 key={key}>Species: {species}</h2>
        <h2 key={key}>Gender: {gender}</h2>
        <h2 key={key}>Origin: {origin}</h2>
      </div>
    </div>
  );
}
