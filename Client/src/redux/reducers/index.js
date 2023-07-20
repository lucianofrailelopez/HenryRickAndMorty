/* eslint-disable no-case-declarations */
import { ADDFAVORITE, DELETEFAVORITE, FILTER, ORDER } from "../actions/types";

const initialGlobalState = {
  myFavorites: [],
  allCharacters: [],
};

export default function rootReducer(state = initialGlobalState, action) {
  // Nos fijabamos por el TYPE de la accion
  switch (action.type) {
    case ADDFAVORITE:
      return {
        ...state,
        myFavorites: action.payload,
        allCharacters: action.payload,
      };
    case DELETEFAVORITE:
        return {
          ...state,
          myFavorites: action.payload,
          allCharacters: action.payload
        };
    case FILTER:
      const allCharactersFiltered = state.allCharacters.filter(
        (character) => character.gender === action.payload
      );
      return {
        ...state,
        myFavorites:
          action.payload === "allCharacters"
            ? [...state.allCharacters]
            : allCharactersFiltered,
      };
    case ORDER:
      const allCharactersFavCopy = [...state.allCharacters];
      return {
        ...state,
        myFavorites:
          action.payload === "A"
            ? allCharactersFavCopy.sort((a, b) => a.id - b.id)
            : allCharactersFavCopy.sort((a, b) => b.id - a.id),
      };
    default:
      return { ...state };
  }
}
