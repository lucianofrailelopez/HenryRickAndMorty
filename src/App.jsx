import { useState } from 'react';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import Nav from './components/navBar/Nav';
import Cards from './components/allCards/Cards';
import About from './components/About/About';
import Deatil from './components/Deatil/Deatil';
import Error from './components/Error/Error';
import './App.css';

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
         <Routes>
            <Route path="/Home" element={<Cards characters={characters} onClose={onClose} />} />
            <Route path='/About' element={<About />} />
            <Route path="/Deatil/:id" element={<Deatil />} />
            <Route path="*" element={<Error />} />
         </Routes>
      </div>
   );
}

export default App;
