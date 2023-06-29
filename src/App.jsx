import './App.css';
import Cards from './components/allCards/Cards';
import SearchBar from './components/search/SearchBar.jsx';
import characters from './data.jsx';

function App() {
   return (
      <div className='App'>
         <div className='containerHeader'>
            <h1>Rick And Morty V2.0</h1>
            <SearchBar onSearch={(characterID) => window.alert(characterID)} />
         </div>
         <Cards characters={characters} />
      </div>
   );
}

export default App;
