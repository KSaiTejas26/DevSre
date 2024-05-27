// import Header from "./Components/Header"
import { BrowserRouter , Route,Routes } from 'react-router-dom';
import AdminHome from "./Components/Admin/AdminHome";
import Requests from './Components/Admin/Requests';
import Vendors from './Components/Admin/Vendors';
import Products from './Components/Admin/Products';
import Home from "./Components/Home";
import Profile from "./Components/Profile";
import 'semantic-ui-css/semantic.min.css'
import VendorProduct from "./Components/Admin/VendorProduct";
import Category from './Components/Customers/Category/category';
import VendorSpecific from '../src/Components/VendorSpecific/VendorStore'

function App() {
  return (

    <BrowserRouter>
        <Routes>
          <Route path="/Category/plantsandflowers" element={<Category/>} />
          <Route path="/VendorSpecific" element={<VendorSpecific/>} />
          <Route path="/requests" element={<AdminHome/>} />
          <Route path="/vendors" element={<Vendors/>} />
          <Route path="/products" element={<Products/>} />
          <Route path="/AdminProfile" element={<Profile/>}/>
          <Route path="/VendorProduct" element={<VendorProduct/> }/>
        </Routes>
    </BrowserRouter>
    
  );
}
export default App;
