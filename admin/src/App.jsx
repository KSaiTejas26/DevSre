// import Header from "./Components/Header"
import { BrowserRouter , Route,Routes } from 'react-router-dom';
import AdminHome from "./Components/Admin/AdminHome";
import Requests from './Components/Admin/Requests';
import Vendors from './Components/Admin/Vendors';
import Products from './Components/Admin/Products';
import Home from "./Components/Home";
import ProfileDataEditable from "./Components/ProfileDataEditable";
import Profile from "./Components/Profile";
import 'semantic-ui-css/semantic.min.css'
import VendorProduct from "./Components/Admin/VendorProduct";
// import { ChakraProvider, theme } from '@chakra-ui/react'
import Vendor from "./Components/Vendor/Products";
function App() {
  return (
    // <ChakraProvider theme={theme}>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/requests" element={<AdminHome/>} />
          <Route path="/vendors" element={<Vendors/>} />
          <Route path="/products" element={<Products/>} />
          <Route path="/adminprofile" element={<Profile/>}/>
          <Route path="/vendorproduct" element={<VendorProduct/> }/>
          <Route path="/a" element={<ProfileDataEditable/> }/>
          <Route path="/vendorhome" element={<Vendor/> }/>
        </Routes>
    </BrowserRouter>
    // </ChakraProvider>
  );
}
export default App;
