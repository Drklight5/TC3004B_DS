import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth/Auth.jsx";
import Core from "./Core.jsx";
import AuthProvider from "./context/AuthContext.jsx";


function App() {

  return (
    <>  
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/auth" element={<Auth/>}/>
            <Route path = "/*" element= {<Core/>}/>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
