import itemModel from "../models/item.model.js";

// Obtener todos los items (GET /items)
export const getItems = async (req, res) => {
  try {
    const items = await itemModel.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

//Obtener un item por ID (GET /item/:id)
export const getItem = async (req, res) => {
  try {
    const { id } = req.params;
    const item = await itemModel.findById(id);
    res.json(item);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Crear un item (POST /item)
export const postItem = async (req, res) => {
  try {
    const item = new itemModel(req.body);
    await item.save();
    res.json(item)
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

//Actualizar un item (PUT /item/:id)
export const putItem = async (req, res) => {
  try {
    const { id } = req.params;
    const item = await itemModel.findByIdAndUpdate(id, req.body, { new: true });
    res.json(item);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Eliminar un item (DELETE /item/:id)
export const deleteItem = async (req, res) => {
  try {
    const { id } = req.params;
    const item = await itemModel.findByIdAndDelete(id, req.body, { new: true });
    res.json(item);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
