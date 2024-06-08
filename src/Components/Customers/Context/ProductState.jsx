
import React,{useState,useEffect} from 'react';
import prodcontext from './ProductContext';
import axios from 'axios';
import Spinner from '../Spinner';




function ProductState(props) {
    const initialproducts=[];
    const [data,setData]=useState(initialproducts);
    let cart = [];
    
    const getProds=async ()=>{
      try{
        const response = await axios.get("http://localhost:3000/api/product/getProducts",{
        headers : {
          "Content-Type": "application/json",
        }});
        const responseData = await response.data;
        //console.log(responseData);
        setData(responseData);
        //console.log(data);
      
      
        
      }
      catch(error)
      {
        console.log("Error in axios");
      }
    
    }
    useEffect(() => {
      getProds();
    }, []);

    if (data.length === 0) {
      return <div className="container"><Spinner/></div>; // You can display a loading indicator or any other UI while waiting for the data
    }
  return (
    <prodcontext.Provider value={{data,getProds,cart}}>
        {props.children }
    </prodcontext.Provider>
  )
}

export default ProductState;
