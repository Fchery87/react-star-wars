export async function getAllStarships() {
    const res = await fetch('https://swapi.dev/api/starships/');
    if (res.ok) {
      return res.json();
    } else {
      throw new Error('Failed to fetch starships');
    }
  }
  