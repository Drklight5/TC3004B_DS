const API_URL = import.meta.env.VITE_API_URL;

export const login = async (user, password) => {
  const response = await fetch(`${API_URL}login`, {
    method: "POST",
    body: JSON.stringify({
      Username: user,
      Password: password,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();
  console.log("as", data);

  //SE GUARDA LA INFORMACION DE INICIO
  localStorage.setItem("login", JSON.stringify(data));
  return data;
};


// services/auth.js
export async function signup(nombre, username, password) {
  const res = await fetch(`${API_URL}signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ Nombre: nombre, Username: username, Password: password }),
  });
  return await res.json();
}
