import { useState, useEffect } from 'react';
import { getAllStarships } from './services/sw-api';
import StarshipCard from './components/StarshipCard';
import './App.css'; 
import banner from './assets/Starwars-starships.png'; 

function App() {
  const [starships, setStarships] = useState([]);
  const [nextUrl, setNextUrl] = useState(null);

  useEffect(() => {
    async function fetchStarships() {
      const data = await getAllStarships();
      setStarships(data.results);
      setNextUrl(data.next);
    }
    fetchStarships();
  }, []);

  const fetchMoreStarships = async () => {
    if (nextUrl) {
      const response = await fetch(nextUrl);
      const data = await response.json();
      setStarships((prevStarships) => [...prevStarships, ...data.results]);
      setNextUrl(data.next);
    }
  };

  return (
    <div>
      <header className="app-header">
        <img src={banner} alt="Star Wars Starships" className="header-banner" />
        {/* <h1>Star Wars Starships</h1> */}
      </header>
      <main>
        <div className="starship-container">
          {starships.map((starship) => (
            <StarshipCard key={starship.name} starship={starship} />
          ))}
        </div>
        {nextUrl && (
          <button className="load-more" onClick={fetchMoreStarships}>
            Load More
          </button>
        )}
      </main>
    </div>
  );
}

export default App;
