import { promise } from "../utils/mssql.js";
import sql from "mssql";

// Obtener todos los items (GET /items)
export const getItems = async (req, res) => {
  try {
    const pool = await promise;
    const result = await pool.request().query("SELECT * FROM Items");
    res.json(result.recordset);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

//Obtener un item por ID (GET /item/:id)
export const getItem = async (req, res) => {
  try {
    const { id } = req.params;
    const pool = await promise;
    const result = await pool
      .request()
      .input("id", sql.Int, id)
      .query("SELECT * FROM Items WHERE ID = @id");

    if (result.recordset.length === 0) {
      return res.status(404).json({ message: "Item no encontrado" });
    }

    res.json(result.recordset[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// Crear un item (POST /item)
export const postItem = async (req, res) => {
  try {
    const { Nombre, Price } = req.body;

    if (!Nombre || !Price) {
      return res.status(400).json({ message: "Nombre y Price son requeridos" });
    }

    const pool = await promise;
    const result = await pool
      .request()
      .input("Nombre", sql.NVarChar(50), Nombre)
      .input("Price", sql.Money, Price)
      .query(
        "INSERT INTO Items (Nombre, Price) OUTPUT INSERTED.* VALUES (@Nombre, @Price)"
      );

    res.status(201).json(result.recordset[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

//Actualizar un item (PUT /item/:id)
export const putItem = async (req, res) => {
  try {
    const { id } = req.params;
    const { Nombre, Price } = req.body;

    if (!Nombre || !Price) {
      return res.status(400).json({ message: "Nombre y Price son requeridos" });
    }

    const pool = await promise;
    const result = await pool
      .request()
      .input("id", sql.Int, id)
      .input("Nombre", sql.NVarChar(50), Nombre)
      .input("Price", sql.Money, Price)
      .query(
        "UPDATE Items SET Nombre = @Nombre, Price = @Price WHERE ID = @id"
      );

    if (result.rowsAffected[0] === 0) {
      return res.status(404).json({ message: "Item no encontrado" });
    }

    res.json({ message: "Item actualizado correctamente" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// Eliminar un item (DELETE /item/:id)
export const deleteItem = async (req, res) => {
  try {
    const { id } = req.params;

    const pool = await promise;
    const result = await pool
      .request()
      .input("id", sql.Int, id)
      .query("DELETE FROM Items WHERE ID = @id");

    if (result.rowsAffected[0] === 0) {
      return res.status(404).json({ message: "Item no encontrado" });
    }

    res.json({ message: "Item eliminado correctamente" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}