import React,{useContext} from 'react'
import Header from '../Navbar'
import RightView from './RightView'
import Footer from "../../Footer"
import prodcontext from '../Context/ProductContext'
function category() {
  const context=useContext(prodcontext);
  const {category}=context;
  console.log(category);
  return (
    <div>
      {window.scrollTo(0, 0)}
      <Header />
      <div className="container-fluid">

        <div className="row">
          <div style={{margin:'20px 0px'}} ><RightView /></div>
        </div>

      </div>
      <Footer/>
    </div>
  )
}

export default category
