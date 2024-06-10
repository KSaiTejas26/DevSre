
import React,{useState,useEffect} from 'react';
import prodcontext from './ProductContext';
import axios from 'axios';
import Spinner from '../Spinner';




function ProductState(props) {
    const initialproducts=[];
    const initialcategory=[];
    const [data,setData]=useState(initialproducts);
    const [category,setCat]=useState(initialcategory);
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
        console.log("Error in axios getProds");
      }
    
    }
    const getCategory=async ()=>{
      try{
        const response = await axios.get("http://localhost:3000/api/customer/getCategory",{
        headers : {
          "Content-Type": "application/json",
        }});
        const responseData = await response.data;
        //console.log(responseData);
        setCat(responseData);
        //console.log(data);
      
      
        
      }
      catch(error)
      {
        console.log("Error in axios category");
      }
    
    }

    useEffect(() => {
      getProds();
      getCategory();
    }, []);

    if (data.length === 0) {
      return <div className="container"><Spinner/></div>; // You can display a loading indicator or any other UI while waiting for the data
    }
  return (
    <prodcontext.Provider value={{data,getProds,cart,category}}>
        {props.children }
    </prodcontext.Provider>
  )
}

export default ProductState;
