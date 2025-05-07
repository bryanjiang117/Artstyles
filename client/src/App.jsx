import { useState } from 'react'

import './App.css'

function App() {
  const [ artworks, setArtworks ] = useState([])

  useState(async () => {
    const url = `${import.meta.env.VITE_API_BASE}/api/artworks`
    try { 
      const response = await fetch(url)

      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`)
      }

      const data = await response.json()
      console.log(data)
      setArtworks(data)
    } catch (error) {
      console.error(error.message)
    }
  }, [])

  return (
    <>
      <div className='gallery'>

      </div>
    </>
  )
}

export default App
