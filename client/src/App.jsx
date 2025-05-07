import { useState } from 'react'
import dotenv from 'dotenv'

import './App.css'

function App() {
  const [ artworks, setArtworks ] = useState([])

  dotenv.config()

  useState(async () => {
    const url = `${process.env.API_BASE}/api/artworks`
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
