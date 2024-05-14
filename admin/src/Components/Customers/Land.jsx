import React from "react";
import DarkVariantExample from "./corousel";
import IndividualIntervalsExample from "./corousel";
import PrimarySearchAppBar from "./Navbar";
import img3 from "./Images/img3.webp";
import img1 from "./Images/img1.jpg";
import img7 from "./Images/img7.jpg";
import img4 from "./Images/img4.jpg";
import fridge from "./Images/fridge.jpg";
import sofa from "./Images/sofa.jpg";
import washingmachine from "./Images/washingmachine.jpg";
import table from "./Images/table.jpg";
import clock from "./Images/clock.jpg";
import chair from "./Images/chair.jpg";
import BasicExample from "./Category";
import Horizontal from "./Horizontal";

function Land() {
  return (
    <>
      <PrimarySearchAppBar />
      <DarkVariantExample />
      <div   className="row h-100">
  <div className="col-md-6 my-3" >
    <div className="d-flex justify-content-center h-100 mx-5">
      <div className="ui netboard test ad flex-grow-1">
        <div
          style={{
            width: "100%",
            height: "100%",
            background: `url(${img3})`,
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            transition: "transform 0.3s ease",
            ":hover": {
              transform: "scale(1.1)",
            },
          }}
        ></div>
      </div>
    </div>
  </div>
  <div className="col-md-6">
    <div className="d-flex justify-content-center w-100 my-3">
      <div style={{ width: "95%" }} className="ui medium rectangle test ad">
        <div
          style={{
            width: "100%",
            height: "100%",
            background: `url(${img4})`,
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            transition: "transform 0.3s ease",
            ":hover": {
              transform: "scale(1.1)",
            },
          }}
        ></div>
      </div>
    </div>
    <div className="d-flex justify-content-center w-100 mt-2">
      <div style={{ width: "95%" }} className="ui panorama test ad">
        <div
          style={{
            width: "100%",
            height: "100%",
            background: `url(${img1})`,
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            transition: "transform 0.3s ease",
            ":hover": {
              transform: "scale(1.1)",
            },
          }}
        ></div>
      </div>
    </div>
  </div>
</div>


      <div className="container my-5 d-flex justify-content-center">
        <h1>Explore Different Categories</h1>
      </div>
      <div className="row my-5 mx-3 d-flex justify-content-center">
        <div className="col-md-4 d-flex justify-content-center mb-5">
          <BasicExample img={fridge} title="Fridges" />
        </div>
        <div className="col-md-4  d-flex justify-content-center  mb-5">
          <BasicExample img={sofa} title="Sofas" />
        </div>
        <div className="col-md-4  d-flex justify-content-center  mb-5">
          <BasicExample img={table} title="Tables" />
        </div>
      </div>
      <div className="row my-5 mx-3 disp">
        <div className="col-md-4  d-flex justify-content-center  mb-5">
          <BasicExample img={chair} title="Chairs" />
        </div>
        <div className="col-md-4  d-flex justify-content-center  mb-5">
          <BasicExample img={washingmachine} title="Washing Machines" />
        </div>
        <div className="col-md-4  d-flex justify-content-center  mb-5">
          <BasicExample img={clock} title="Clocks" />
        </div>
      </div>
      <Horizontal />
    </>
  );
}

export default Land;
