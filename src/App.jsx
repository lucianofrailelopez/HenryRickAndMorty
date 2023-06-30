import './App.css';
import Cards from './components/allCards/Cards';
import Nav from './components/navBar/Nav';
import { useState } from 'react';
import axios from 'axios';

function App() {
   const [characters, setCharacters] = useState([]);

   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            const charactersId = characters.map((data) => data.id);
            if (charactersId.includes(data.id)) {
               window.alert("Ya existe");
            } else {
               setCharacters((oldChars) => [...oldChars, data]);
            }
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   const onClose = (id) => {
      setCharacters(
         characters.filter((char) => char.id !== id)
      );
   }

   return (
      <div className='App'>
         <Nav onSearch={onSearch} />
         <Cards characters={characters} onClose={onClose} />
      </div>
   );
}

export default App;
