const API_URL = "http://localhost:5000/item"; 


export const addItem = async (item) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    });

    if (!response.ok) throw new Error("Error al agregar el item");

    return await response.json();
  } catch (error) {
    console.error("addItem error:", error);
    return { error: error.message };
  }
};


export const deleteItem = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) throw new Error("Error al eliminar el item");

    return await response.json();
  } catch (error) {
    console.error("deleteItem error:", error);
    return { error: error.message };
  }
};



export const getItems = async () => {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) throw new Error("Error al obtener los items");

    return await response.json();
  } catch (error) {
    console.error("getItems error:", error);
    return { error: error.message };
  }
};



export const getItem = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`);

    if (!response.ok) throw new Error("Error al obtener el item");

    return await response.json();
  } catch (error) {
    console.error("getItem error:", error);
    return { error: error.message };
  }
};


export const updateItem = async (item) => {
  try {
    const response = await fetch(`${API_URL}/${item.ID}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    });

    if (!response.ok) throw new Error("Error al actualizar el item");

    return await response.json();
  } catch (error) {
    console.error("updateItem error:", error);
    return { error: error.message };
  }
};
