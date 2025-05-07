import dotenv from 'dotenv'
import pgPromise from 'pg-promise'
import express from 'express'
import cors from 'cors'

dotenv.config()

const app = express()
app.use(cors())

const port = process.env.port 
app.listen(port, console.log(`Server starting. Listening on port ${port}`))

const pgp = pgPromise()
const db = pgp(process.env.DATABASE_URL)

app.get('/api/artworks', async (req, res) => {
  try {
    const data = await db.one(`
      SELECT permalink, preview_url 
      FROM artworks   
    `)

    console.log('DATA!!', data)
    res.json(data)
  } catch (error) {
    console.log('Failed to fetch artworks.', error)
    res.status(500).send('Database error while fetching artworks')
  }
})