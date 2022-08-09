import { Routes, Route } from "react-router-dom";
import LogIn from "./Log in/Login"
import NotFound from "./Session/NotFound";
import UserRegister from "./User Register/UserRegister";
import Dashboard from "./Dashboard/Dashboard";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='*' element={<NotFound />} />
        <Route path='/' element={<LogIn />} />
        <Route path='user' element={<UserRegister/>}/>
        <Route path='dashboard' element={<Dashboard/>}/>
      </Routes>
    </div>
  );
}

export default App;
