import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const url = `${import.meta.env.VITE_API_BASE}/api/artworks`;
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data[0].preview_url);
        setArtworks(data.slice(0, 101));
      } catch (error) {
        console.error(error.message);
      }
    }
    fetchData()
  }, []);

  return (
    <div className="main">
      <div className="gallery">
        {artworks.map((artwork, index) => 
          <img src={artwork.preview_url} alt="" key={index}/>
        )}
      </div>
    </div>
  );
}

export default App;
