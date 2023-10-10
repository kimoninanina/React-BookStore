import React from "react";
import { ReturnBook } from "./ReturnBook";

export const Carousel = () => {
  return (
    <div className="container mt-5" style={{ height: 550 }}>
      <div className="homepage-carousel-title">
        <h3>Find your next "I stayed up too late reading" book.</h3>
      </div>

      <div className="d-none d-lg-block">
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row flex justify-content-center align-items-center">
                <ReturnBook />
                <ReturnBook />
                <ReturnBook />
              </div>
            </div>

            {/* 第二个轮播项 */}
            <div className="carousel-item">
              <div className="row flex justify-content-center align-items-center">
                <ReturnBook />
                <ReturnBook />
                <ReturnBook />
              </div>
            </div>

            {/* 第三个轮播项 */}
            <div className="carousel-item">
              <div className="row flex justify-content-center align-items-center">
                <ReturnBook />
                <ReturnBook />
                <ReturnBook />
              </div>
            </div>

            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="d-lg-none mt-3">
        <div className="row flex justify-content-center align-items-center">
          <ReturnBook />
        </div>
      </div>

      <div className="homepage-carousel-title mt-3">
        <a className="btn btn-outline-secondary btn-lg" href="#">
          View More
        </a>
      </div>
    </div>
  );
};
