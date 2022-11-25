import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Header from "./components/Shared/Header";
import NotFound from "./components/Shared/NotFound";
import LogIn from "./components/Shared/LogIn";
import Expart from "./components/Expart/Expart";
import User from "./components/User/User";
import Process from "./components/Request/Process";
import Request from "./components/Request/Request";
import BOneTwo from "./components/Request/BOneTwo";
import BOne from "./components/Request/BOne";
import BTwo from "./components/Request/BTwo";
import Tablet from "./components/Tablet/Tablet";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="expart" element={<Expart />} />
      
        <Route path="logIn" element={<LogIn />} />
        <Route path="user" element={<User />} />
        {/* request page routes */}
        <Route path="process" element={<Process/>} />
        <Route path="request" element={    <Request/> } />
    <Route path="bOneTwo" element={  <BOneTwo/> } />
    <Route path="bOne" element={  <BOne/>} />
    <Route path="bTwo" element={  <BTwo/> } />

    <Route path="tablet" element={<Tablet />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
