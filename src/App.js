import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Profile from "./components/Profile";
import Forgot from "./components/Forgot"
import Auth from "./components/Auth";
import Checkout from "./components/Checkout";
import Thankyou from "./components/Thankyou";
import PaymentForm from "./customComponents/Cards";
import Catalog from "./components/Catalog"

import Details from "./components/Details";

import AdminAuth from "./components/AdminAuth";
import ForgotAdmin from "./components/ForgotAdmin";
import HomeDashboard from "./pages/HomeDashboard";
import CategoryList from "./pages/CategoryList";
import CustomerList from "./pages/CustomerList";
import ProductList from "./pages/ProductList";
import InventoryList from "./pages/InventoryList";
import LocationList from "./pages/LocationList";
import OrderList from "./pages/OrderList";
import OrdersByHD from "./pages/OrdersByHD";
import OrdersByCC from "./pages/OrdersByCC"
import UserList from "./pages/UserList";

function App() {
  console.log("heyyy");
  console.log("App file changes")
  return (

      <div className="App">
          <BrowserRouter>
              <Routes>
                <Route exact path="/" Component={Auth} />
                <Route path="/cart" Component={Cart} />
                <Route path="/profile" Component={Profile} />
                <Route path="/checkout" Component={Checkout} />
                <Route path="/home" Component={Home} />
                <Route path="/forgot" Component={Forgot} />
                <Route path='*' Component={Auth}></Route>

                <Route path="/admin" Component={AdminAuth} />
                <Route path="/forgotAdmin" Component={ForgotAdmin}/>

                <Route path="/details" Component={Details}></Route>
                <Route path="/catalog" Component={Catalog} />
                <Route path="/thankyou" Component={Thankyou} />
                <Route path="/card" Component={PaymentForm} />

                
                <Route exact path='/dashboard' Component={HomeDashboard}/>
                <Route path='/category' Component={CategoryList}/>
                <Route path='/customer' Component={CustomerList}/>
                <Route path='/product' Component={ProductList}/>
                <Route path='/inventory' Component={InventoryList}/>
                <Route path='/location' Component={LocationList}/>
                <Route path='/order' Component={OrderList}/>
                <Route path='/HD' Component={OrdersByHD}/>
                <Route path='/CC' Component={OrdersByCC}/>\
                <Route path='/user' Component={UserList}/>
                <Route path="/details" Component={Details}></Route>
              </Routes>
          </BrowserRouter>
      </div>
  );
}

export default App;
