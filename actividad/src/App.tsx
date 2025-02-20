import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth/Auth";
import Core from "./Core";
import AuthProvider from "./context/AuthContext";


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
