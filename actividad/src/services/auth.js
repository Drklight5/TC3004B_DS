export const login = async (user, password) => {
  const response = await fetch("http://localhost:5000/login", {
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
  console.log("as",data)

  //SE GUARDA LA INFORMACION DE INICIO
  localStorage.setItem("login", JSON.stringify(data))
  return data;
};
