import React from "react";
import "./Topcategory.css";

const TopCategory = () => {
  return (
    <>
      <div className="container">
        <h3 className="text-start pt-4 pb-4">Top categories</h3>
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4 col-xl-3 mb-3">
            <a href="" className="category d-flex">
              <div className="category-font">
                <i className="fas fa-chess"></i>
              </div>
              <div className="cat-textbox text-start">
                <h4 className="cat-title">Online</h4>
                <p className="cat-detail">9 Courses</p>
              </div>
            </a>
          </div>
          <div className="col-md-6 col-lg-4 col-xl-3 mb-3">
            <a href="" className="category d-flex">
              <div className="category-font">
                <i className="fas fa-chess"></i>
              </div>
              <div className="cat-textbox">
                <h4 className="cat-title text-start">Offline</h4>
                <p className="cat-detail">5 Courses</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopCategory;
