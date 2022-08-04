import React from "react";
import "./Section1.css";

const Section1 = () => {
  return (
    <div className=" container" >
      <div className=" section1">
      <div className="d-flex" style={{margin:'20px'}}>
        <div className=" col-sm-12 col-md-6 sec1-text">
          <h1>Want to Attend in your Quiz</h1>
        </div>
        <div className="col-sm-12 col-md-6 d-flex align-items-center justify-content-center">
          <button className="btn btn-success"> Login <i class="fa-solid fa-right-to-bracket"></i></button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Section1;
