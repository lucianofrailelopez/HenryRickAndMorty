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

   function logout() {
      setAccess(false);
    }

   async function login(userData) {
      try {
         const { email, password } = userData;
         const URL = 'http://localhost:3001/rickandmorty/login/';
         const response = await axios(URL + `?email=${email}&password=${password}`);
         const data = response.data;
         const { access } = data;
         setAccess(access);
         access && navigate('/home');
      } catch (error) {
         window.alert(error.message);
      }
   }
   
   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   async function onSearch(id) {
      try {
         const response = await axios(`http://localhost:3001/rickandmorty/character/${id}`);
         const data = response.data;
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
      } catch (error) {
         window.alert(error.message);
      }
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
