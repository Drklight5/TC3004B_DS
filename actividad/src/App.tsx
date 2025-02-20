import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth/Auth";
import Main from "./pages/Main/Main";


function App() {

  return (
    <>  
    
      <BrowserRouter>
        <Routes>
          <Route path = "/home" element= {<Main/>}/>
          <Route path="/" element={<Auth/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
