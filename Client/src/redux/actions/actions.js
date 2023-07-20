import axios from "axios";
import { ADDFAVORITE, DELETEFAVORITE, FILTER, ORDER } from "./types"
// Actions creators

export const addFav = (character) => async (dispatch) => {
   try {
      const endpoint = 'http://localhost:3001/rickandmorty/fav';
      const response = await axios.post(endpoint, character);
      const data = response.data;
      return dispatch({
         type: ADDFAVORITE,
         payload: data,
      });
   } catch (error) {
      console.log(error.message);
   }
}

export const removeFav = (id) => async (dispatch) => {
   try {
      const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
      const response = await axios.delete(endpoint);
      const data = response.data
      return dispatch({
         type: DELETEFAVORITE,
         payload: data,
      });
   } catch (error) {
      console.log(error.message);
   }
}

export function filterCards(gender) {
    return {type: FILTER, payload: gender}
}

export function orderCards(order) {
    return {type: ORDER, payload: order}
}