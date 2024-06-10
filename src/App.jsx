import { useState, useEffect } from 'react';
import { getAllStarships } from './services/sw-api';
import StarshipCard from './components/StarshipCard';
import './App.css'; // grabbin' the styles
import banner from './assets/starwars-starships.png'; // got the banner image

function App() {
  // keepin' track of starships and next URL
  const [starships, setStarships] = useState([]);
  const [nextUrl, setNextUrl] = useState(null);

  // runs when the component shows up
  useEffect(() => {
    async function fetchStarships() {
      const data = await getAllStarships(); // get starships from the API
      setStarships(data.results); // put the starships in state
      setNextUrl(data.next); // save the next URL for more starships
    }
    fetchStarships(); // call the function to fetch starships
  }, []);

  // function to get more starships when "Load More" button is hit
  const fetchMoreStarships = async () => {
    if (nextUrl) {
      const response = await fetch(nextUrl); // get next set of starships
      const data = await response.json();
      setStarships((prevStarships) => [...prevStarships, ...data.results]); // add new starships to the list
      setNextUrl(data.next); // update the next URL for more fetches
    }
  };

  return (
    <div>
      {/* Header with the banner and title */}
      <header className='app-header'>
        <img src={banner} alt='Star Wars Starships' className='header-banner' />
        {/* <h1>Star Wars Starships</h1> */}
      </header>
      <main>
        {/* Where the starship cards are shown */}
        <div className='starship-container'>
          {starships.map((starship) => (
            <StarshipCard key={starship.name} starship={starship} />
          ))}
        </div>
        {/* Button to get more starships */}
        {nextUrl && (
          <button className='load-more' onClick={fetchMoreStarships}>
            Load More
          </button>
        )}
      </main>
    </div>
  );
}

export default App;
