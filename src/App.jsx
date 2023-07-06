import { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Nav from './components/navBar/Nav';
import Cards from './components/allCards/Cards';
import About from './components/About/About';
import Deatil from './components/Deatil/Deatil';
import Error from './components/Error/Error';
import Form from './components/Form/Form'
import Favorites from './components/Favorites/Favorites';
import './App.css';

function App() {
   const [characters, setCharacters] = useState([]);
   const location = useLocation();

   const navigate = useNavigate();
   const [access, setAccess] = useState(false);
   const EMAIL = 'ejemplo@gmail.com';
   const PASSWORD = 'unaPass1';

   function logout() {
      setAccess(false);
    }

   function login(userData) {
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/Home');
      }
   }
   
   useEffect(() => {
      !access && navigate('/');
   }, [access]);

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
         {
            location.pathname !== '/' && <Nav onSearch={onSearch} out={logout} />
         }
         
         <Routes>
            <Route path='/' element={<Form login={login} />} />
            <Route path="/Home" element={<Cards characters={characters} onClose={onClose} />} />
            <Route path='/About' element={<About />} />
            <Route path="/Deatil/:id" element={<Deatil />} />
            <Route path="/favorite" element={<Favorites />} />
            <Route path="*" element={<Error />} />
         </Routes>
      </div>
   );
}

export default App;
