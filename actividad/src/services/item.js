const API_URL = "http://localhost:5000/item"; 


function getToken () {
  let data  = JSON.parse(localStorage.getItem("login")) || {}
  return data.token 

}

const sharedHeaders = {
  "Content-Type": "application/json",
  "authorization": `Bearer ${getToken()}`,
};
export const addItem = async (item) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {...sharedHeaders},
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
  console.log(id)
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      headers: { ...sharedHeaders },
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
    const response = await fetch(API_URL, {
      headers: { ...sharedHeaders },
    });

    if (!response.ok) throw new Error("Error al obtener los items");

    return await response.json();
  } catch (error) {
    console.error("getItems error:", error);
    return { error: error.message };
  }
};



export const getItem = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      headers: { ...sharedHeaders },
    });

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
      headers: { ...sharedHeaders },
      body: JSON.stringify(item),
    });

    if (!response.ok) throw new Error("Error al actualizar el item");

    return await response.json();
  } catch (error) {
    console.error("updateItem error:", error);
    return { error: error.message };
  }
};
