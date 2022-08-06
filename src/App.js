import { Routes, Route } from "react-router-dom";
import LogIn from "./Log in/Login"
import NotFound from "./Session/NotFound";
import UserRegister from "./User Register/UserRegister";
function App() {
  return (
    <div className="App">
      {/* <LogIn /> */}
      <Routes>
        <Route exact path='*' element={<NotFound />} />
        <Route path='login' element={<LogIn />} />
        <Route path='user' element={<UserRegister/>}/>
      </Routes>
    </div>
  );
}

export default App;
