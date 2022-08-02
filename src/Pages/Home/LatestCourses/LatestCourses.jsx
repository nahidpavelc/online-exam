import React from 'react';
import image2 from '../../../photos/image2.jpg';

const LatestCourses = () => {
    return (
        <div>
            <div className="container">
        <h3 className="text-start p-3">Latest Courses</h3>

        <div class="row row-cols-1 row-cols-md-4 g-4">

          <div class="col">
            <div class="card h-100">
              <div className="card-img">
                <img src={image2} class="card-img-top" alt="..." />
              </div>
              <div class="card-body card-body-bor">
                <h5 class="card-title text-start">Biology</h5>
                {/* row-1  */}
                <div
                  className="d-flex justify-content-between text-muted"
                  style={{ fontSize: "12px" }}
                >
                  <div className="d-flex justify-content-between">
                    <div className="">
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                    </div>
                    <div>
                      <p>(5)</p>
                    </div>
                  </div>
                  <div>
                    <h6>(0 Review)</h6>
                  </div>
                </div>
                {/* row-2  */}
                <div
                  className="d-flex justify-content-between text-muted"
                  style={{ fontSize: "12px", marginBottom: "10px" }}
                >
                  <div>
                    <i class="fa-solid fa-clock pe-1"></i>
                    <span className="span-inline">00:00:00 Hours</span>
                  </div>
                  <div>
                    <i class="fa-solid fa-table-list pe-1"></i>
                    <span className="">0 Lecture</span>
                  </div>
                </div>
                {/* row-3  */}
                <div
                  className="d-flex justify-content-between card-course"
                  style={{ fontSize: "12px" }}
                >
                  <div className="">
                    <span className="tag-course">Advance</span>
                  </div>
                  <div>
                    <button type="button" class="btn-course">
                      <i className="fa-solid fa-scale-balanced pe-1"></i>
                      Compare
                    </button>
                  </div>
                </div>
              </div>
              <div class="card-footer d-flex justify-content-between ">
                <div className="">
                  <img
                    className="card-footer-img"
                    src="http://bhaters.abrms.com/uploads/user_image/placeholder.png"
                    alt=""
                  />
                </div>
                <div>
                  <h5>$59</h5>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <div className="card-img">
                <img src={image2} class="card-img-top" alt="..." />
              </div>
              <div class="card-body card-body-bor">
                <h5 class="card-title text-start">Biology</h5>
                {/* row-1  */}
                <div
                  className="d-flex justify-content-between text-muted"
                  style={{ fontSize: "12px" }}
                >
                  <div className="d-flex justify-content-between">
                    <div className="">
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                    </div>
                    <div>
                      <p>(5)</p>
                    </div>
                  </div>
                  <div>
                    <h6>(0 Review)</h6>
                  </div>
                </div>
                {/* row-2  */}
                <div
                  className="d-flex justify-content-between text-muted"
                  style={{ fontSize: "12px", marginBottom: "10px" }}
                >
                  <div>
                    <i class="fa-solid fa-clock pe-1"></i>
                    <span className="span-inline">00:00:00 Hours</span>
                  </div>
                  <div>
                    <i class="fa-solid fa-table-list pe-1"></i>
                    <span className="">0 Lecture</span>
                  </div>
                </div>
                {/* row-3  */}
                <div
                  className="d-flex justify-content-between card-course"
                  style={{ fontSize: "12px" }}
                >
                  <div className="">
                    <span className="tag-course">Advance</span>
                  </div>
                  <div>
                    <button type="button" class="btn-course">
                      <i className="fa-solid fa-scale-balanced pe-1"></i>
                      Compare
                    </button>
                  </div>
                </div>
              </div>
              <div class="card-footer d-flex justify-content-between ">
                <div className="">
                  <img
                    className="card-footer-img"
                    src="http://bhaters.abrms.com/uploads/user_image/placeholder.png"
                    alt=""
                  />
                </div>
                <div>
                  <h5>$59</h5>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <div className="card-img">
                <img src={image2} class="card-img-top" alt="..." />
              </div>
              <div class="card-body card-body-bor">
                <h5 class="card-title text-start">Biology</h5>
                {/* row-1  */}
                <div
                  className="d-flex justify-content-between text-muted"
                  style={{ fontSize: "12px" }}
                >
                  <div className="d-flex justify-content-between">
                    <div className="">
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                    </div>
                    <div>
                      <p>(5)</p>
                    </div>
                  </div>
                  <div>
                    <h6>(0 Review)</h6>
                  </div>
                </div>
                {/* row-2  */}
                <div
                  className="d-flex justify-content-between text-muted"
                  style={{ fontSize: "12px", marginBottom: "10px" }}
                >
                  <div>
                    <i class="fa-solid fa-clock pe-1"></i>
                    <span className="span-inline">00:00:00 Hours</span>
                  </div>
                  <div>
                    <i class="fa-solid fa-table-list pe-1"></i>
                    <span className="">0 Lecture</span>
                  </div>
                </div>
                {/* row-3  */}
                <div
                  className="d-flex justify-content-between card-course"
                  style={{ fontSize: "12px" }}
                >
                  <div className="">
                    <span className="tag-course">Advance</span>
                  </div>
                  <div>
                    <button type="button" class="btn-course">
                      <i className="fa-solid fa-scale-balanced pe-1"></i>
                      Compare
                    </button>
                  </div>
                </div>
              </div>
              <div class="card-footer d-flex justify-content-between ">
                <div className="">
                  <img
                    className="card-footer-img"
                    src="http://bhaters.abrms.com/uploads/user_image/placeholder.png"
                    alt=""
                  />
                </div>
                <div>
                  <h5>$59</h5>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <div className="card-img">
                <img src={image2} class="card-img-top" alt="..." />
              </div>
              <div class="card-body card-body-bor">
                <h5 class="card-title text-start">Biology</h5>
                {/* row-1  */}
                <div
                  className="d-flex justify-content-between text-muted"
                  style={{ fontSize: "12px" }}
                >
                  <div className="d-flex justify-content-between">
                    <div className="">
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                    </div>
                    <div>
                      <p>(5)</p>
                    </div>
                  </div>
                  <div>
                    <h6>(0 Review)</h6>
                  </div>
                </div>
                {/* row-2  */}
                <div
                  className="d-flex justify-content-between text-muted"
                  style={{ fontSize: "12px", marginBottom: "10px" }}
                >
                  <div>
                    <i class="fa-solid fa-clock pe-1"></i>
                    <span className="span-inline">00:00:00 Hours</span>
                  </div>
                  <div>
                    <i class="fa-solid fa-table-list pe-1"></i>
                    <span className="">0 Lecture</span>
                  </div>
                </div>
                {/* row-3  */}
                <div
                  className="d-flex justify-content-between card-course"
                  style={{ fontSize: "12px" }}
                >
                  <div className="">
                    <span className="tag-course">Advance</span>
                  </div>
                  <div>
                    <button type="button" class="btn-course">
                      <i className="fa-solid fa-scale-balanced pe-1"></i>
                      Compare
                    </button>
                  </div>
                </div>
              </div>
              <div class="card-footer d-flex justify-content-between ">
                <div className="">
                  <img
                    className="card-footer-img"
                    src="http://bhaters.abrms.com/uploads/user_image/placeholder.png"
                    alt=""
                  />
                </div>
                <div>
                  <h5>$59</h5>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
        </div>
    );
};

export default LatestCourses;