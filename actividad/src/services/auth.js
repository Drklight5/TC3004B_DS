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
  return data;
};
