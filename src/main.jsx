import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      {/* <ChakraProvider> */}
        <App />
      {/* </ChakraProvider> */}
    </Router>
  </React.StrictMode>
)
