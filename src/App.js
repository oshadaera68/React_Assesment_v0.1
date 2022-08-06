import { Routes, Route } from "react-router-dom";
import LogIn from "./Log in/Login"
function App() {
  return (
    <div className="App">
      {/* <LogIn /> */}
      <Routes>
        <Route path='login' element={<LogIn />}/> 
      </Routes>
    </div>
  );
}

export default App;
