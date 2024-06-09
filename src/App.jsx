import './App.css'
import { useState, useEffect } from 'react';
import { getAllStarships } from './services/sw-api';
import StarshipCard from './components/StarshipCard';

function App() {
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    async function fetchStarships() {
      const data = await getAllStarships();
      setStarships(data.results);
    }
    fetchStarships();
  }, []);

  return (
    <div>
      <header>
        <h1>Star Wars Starships</h1>
      </header>
      <main>
        <div className="starship-container">
          {starships.map((starship) => (
            <StarshipCard key={starship.name} starship={starship} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;

