import { Routes, Route } from "react-router-dom";
import { Home, Login } from "./containers/Public";
import { path } from './ultils/constant'
import Signin from "./containers/Public/Signin";

function App() {
  return (
    <div className="h-screen w-screen bg-primary">
     <Routes>
          <Route path={path.HOME} element = {<Home/>}>  
          <Route path={path.LOGIN} element = {<Login/>}/> 
          <Route path={path.SIGNIN} element = {<Signin/>}/> 
      </Route>

      </Routes> 
    </div>
  );
}

export default App;
