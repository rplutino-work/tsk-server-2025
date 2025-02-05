import { MedusaRequest, MedusaResponse } from "@medusajs/framework/http";
import { Pool } from "pg";

// Configurar la conexión a PostgreSQL
const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // Asegúrate de definir esta variable en .env
});

async function fetchProductIds(categoryId: string) {
  try {
    const client = await pool.connect();

    const query = `
      SELECT *
      FROM product
      WHERE id IN (
        SELECT product_id
        FROM product_category_product
        WHERE product_category_id = $1
      );
    `;
    const values = [categoryId];
    const result = await client.query(query, values);

    client.release();
    return result.rows;
  } catch (error) {
    console.error("Error al obtener los productos:", error);
    throw error;
  }
}

// Definir la ruta en el nuevo backend de Medusa
export default async function (req: MedusaRequest, res: MedusaResponse) {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ error: "Falta el parámetro 'id' en la URL." });
  }

  try {
    const products = await fetchProductIds(id);
    return res.status(200).json({ products });
  } catch (error) {
    return res.status(500).json({ error: "Error al obtener los productos." });
  }
}
