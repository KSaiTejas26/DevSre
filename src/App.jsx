import { Route,Routes } from 'react-router-dom';
//Vendor 
import SoloProductMain from "./Components/Vendor/Products/SoloProductMain"; // solo product page
import VendorsProduct from "./Components/Vendor/VendorsProduct"; // all vendor related products
import AddProduct from "./Components/Vendor/Products/AddProduct"; // add product
import VendorProfile from "./Components/Vendor/VendorProfile"; // vendor profile
//Admin
import AllVendors from './Components/Admin/Vendors/GetAllVendors'; // get all vendors
import ReqTable from './Components/Admin/Requests/Req'; // vendor requests
import AdminAddProduct from "./Components/Admin/Products/AddProduct"; // add product
import GetAllProducts from "./Components/Admin/Products/GetAllProducts"; // get all products
import AdminProfile from './Components/Admin/AdminProfile'; // admin profile
import AddVendors from './Components/Admin/Vendors/AddVendors'; // add vendor
import 'bootstrap/dist/css/bootstrap.min.css';
//Customer
import Land from '../../second/admin/src/Components/Customers/Land';
//Authentication
import Login from '../src/Components/Authentication/Login';
import LandingRegister from '../src/Components/Authentication/LandingRegister';
import CustomerRegister from '../src/Components/Authentication/CustomerRegister';
import VendorRegister from '../src/Components/Authentication/VendorRegister';

export default function App() {
  return (
    <>
      <Routes>
        {/*Vendor Routes*/}
        <Route path="/vendorproducts" Component={VendorsProduct}></Route> 
        <Route path="/soloproduct" Component={SoloProductMain}></Route>
         <Route path="/addproduct" Component={AddProduct}></Route>
        <Route path="/vendorprofile" Component={VendorProfile}></Route>
        {/*Admin Routes*/}
        <Route path="/allvendors" Component={AllVendors}></Route>
        <Route path="/request" Component={ReqTable}></Route>
        <Route path='/getadminaddproducts' Component={AdminAddProduct}></Route>
        <Route path='/getallproducts' Component={GetAllProducts}></Route>
        <Route path='/adminprofile' Component={AdminProfile}></Route>
        <Route path='/addvendor' Component={AddVendors}></Route>
        {/* customer routes */}
        <Route path='/customer' Component={Land}></Route>
        {/* loginroutes */}
        <Route path='/' Component={Login}></Route>
        <Route path='/Register' Component={LandingRegister}></Route>
        <Route path='/Register/CustomerRegister' Component={CustomerRegister}></Route>
        <Route path='/Register/VendorRegister' Component={VendorRegister}></Route>
      </Routes>
      
    </>
  )
}
