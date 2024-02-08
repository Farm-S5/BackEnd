import './App.css';
import {LoginForm} from "./components/Login";
import Login from "./pages/Login";
import ListPerson from "./pages/AppList"
import Details from "./pages/DetailTerrainP"
import ListeMessage from "./pages/AppMessage"
import {BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" exact element ={<Login />} />
          <Route path="/ListePersonne" exact element ={<ListPerson/>} />
          <Route path="/Details/:idTerrain" element={<Details />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
