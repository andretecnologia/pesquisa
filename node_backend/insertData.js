const { pool } = require("./db");

async function insertData() {
  const [rua, numero] = process.argv.slice(2);
  try {
    const res = await pool.query(
      "INSERT INTO endereco (rua, numero) VALUES ($1, $2)",
      [rua, numero]
    );
    console.log("Adicionada a rua: " + rua + " com número: " + numero);
  } catch (error) {
    console.error(error)
  }
}
insertData();