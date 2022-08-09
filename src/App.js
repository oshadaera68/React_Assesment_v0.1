import {Route, Routes} from "react-router-dom";
import LogIn from "./Log in/Login"
import NotFound from "./Session/NotFound";
import UserRegister from "./User Register/UserRegister";
import Dashboard from "./Dashboard/Dashboard";
import ProductManage from "./Product/ProductManage";
import CartManage from "./Cart/CartManage";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route exact path='*' element={<NotFound/>}/>
                <Route path='/' element={<LogIn/>}/>
                <Route path='user' element={<UserRegister/>}/>
                <Route path='dashboard' element={<Dashboard/>}/>
                <Route path='product' element={<ProductManage/>}/>
                <Route path='cart' element={<CartManage/>}/>
            </Routes>
        </div>
    );
}

export default App;
