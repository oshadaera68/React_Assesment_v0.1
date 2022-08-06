import { Routes, Route } from "react-router-dom";
import LogIn from "./Log in/Login"
import NotFound from "./Session/NotFound";
function App() {
  return (
    <div className="App">
      {/* <LogIn /> */}
      <Routes>
        <Route exact path='*' element={<NotFound/>}/>
        <Route path='login' element={<LogIn />}/> 
      </Routes>
    </div>
  );
}

export default App;
