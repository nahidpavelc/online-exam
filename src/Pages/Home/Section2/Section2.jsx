import React from "react";
import "./Section2.css";

const Section2 = () => {
  return (
    <div class="row row-cols-1 row-cols-md-3 g-4 p-5">
      <div class="col">
        <div class="card text-bg-success">
          
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              This is a longer card with supporting text below as a natural
              lead-in to additional content.
            </p>
            <button type="button" class="btn btn-light">
              Light
            </button>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card text-bg-danger">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              This is a longer card with supporting text below as a natural
              lead-in to additional content.
            </p>
            <button type="button" class="btn btn-light">
              Light
            </button>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card text-bg-warning">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              This is a longer card with supporting text below as a natural
              lead-in to additional content.
            </p>
            <button type="button" class="btn btn-light">
              Light
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
