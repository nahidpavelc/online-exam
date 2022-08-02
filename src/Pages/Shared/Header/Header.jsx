import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="bg-warning">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center sm-12 md-12">
            <div className="sm-12 md-6">
              <div className="">মেডিকেল কোর্স শুরু হচ্ছে: ১৩ এপ্রিল ২০২৩</div>
            </div>

            <div className="he-button-top m-1 sm-12 md-6">
              <button
                type="button"
                style={{ padding: "1px", margin: "0px 5px" }}
                class="btn btn-outline-secondary p-1px"
              >
                টিফিন বুক সিরিজ
              </button>
              <button
                type="button"
                style={{ padding: "1px" }}
                class="btn btn-outline-secondary"
              >
                অ্যাডমিশন অ্যাসিষ্ট্যান্ট
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* navbar */}
      <div className="bg-light">
        <div className="container">
          <nav class="navbar navbar-expand-lg p-0">
            <div class="container-fluid">
              <img
                style={{ width: "135px" }}
                src="http://bhaters.abrms.com/uploads/system/1a3e991f1270d1299d7f25f2519bac72.png"
                alt=""
              />
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-center">
                  <li
                    style={{ padding: "10px" }}
                    class="nav-item dropdown d-inline-flex justify-content-center align-items-center"
                  >
                    <div class="dropdown">
                      <button class="dropbtn">
                        <i className="fas fa-th d-inline text-20px"></i>
                        Categories
                      </button>
                      <div class="dropdown-content">
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                      </div>
                    </div>
                  </li>
                  <li class="nav-item d-flex align-items-center">
                    <input
                      class="form-control me-2"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    ></input>
                    <i class="fa-solid fa-magnifying-glass" />
                  </li>
                </ul>
                <form class="d-flex align-items-center" role="search">
                  <div className="cart-box menu-icon-box">
                    <div className="icon">
                      <a href="">
                        <i class="fa-solid fa-cart-shopping p-2"></i>
                      </a>
                      <span className="cart-number">0</span>
                    </div>
                  </div>
                  <button
                    class="btn btn-outline-success px-3 mx-2"
                    type="submit"
                  >
                    Log in
                  </button>
                  <button class="btn btn-outline-success px-3" type="submit">
                    Sign up
                  </button>
                </form>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
