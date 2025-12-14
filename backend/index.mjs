import express from 'express';
import pg from 'pg';
import cors from 'cors';

const { Pool } = pg;
const app = express();
app.use(express.json());
app.use(cors());

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "Student",
    password: "postgres123",
    port: 5432,
});

app.get("/students", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM studentsmarks");
    res.json(result.rows); 
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});
app.listen(3000,()=>{
    console.log("Server running on port 3000")
})