import React from "react";
import { ReturnBook } from "./ReturnBook";
import BookModel from "../../../models/BookModel";
import { useEffect, useState } from "react";
import { SpinnerLoading } from "../../Utils/SpinnerLoading";
import { Link } from "react-router-dom";

export const Carousel = () => {
  const [books, setBooks] = useState<BookModel[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);

  //perform side effects，fetching data from an API, updating the DOM, or setting up event listener
  useEffect(() => {
    const fetchBooks = async () => {
      const baseUrl: string = "http://localhost:8080/api/books";

      const url: string = `${baseUrl}?page=0&size=9`;

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const responseJson = await response.json();

      //object of embedded books
      const responseData = responseJson._embedded.books;

      const loadedBooks: BookModel[] = [];

      for (const key in responseData) {
        loadedBooks.push({
          id: responseData[key].id,
          title: responseData[key].title,
          author: responseData[key].author,
          description: responseData[key].description,
          copies: responseData[key].copies,
          copiesAvailable: responseData[key].copiesAvailable,
          category: responseData[key].category,
          img: responseData[key].img,
        });
      }

      setBooks(loadedBooks);
      setIsLoading(false);
    };
    fetchBooks().catch((error: any) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  if (isLoading) {
    return <SpinnerLoading />;
  }

  if (httpError) {
    return (
      <div className="container m-5">
        <p>{httpError}</p>
      </div>
    );
  }

  return (
    <div className="container mt-5" style={{ height: 550 }}>
      <div className="homepage-carousel-title">
        <h3>Find your next "I stayed up too late reading" book.</h3>
      </div>

      <div className="d-none d-lg-block">
        <div
          id="carouselExampleDark"
          className="carousel carousel-dark slide slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row flex justify-content-center align-items-center">
                {books.slice(0, 3).map((book) => (
                  <ReturnBook book={book} key={book.id} />
                ))}
              </div>
            </div>

            {/* 第二个轮播项 */}
            <div className="carousel-item">
              <div className="row flex justify-content-center align-items-center">
                {books.slice(3, 6).map((book) => (
                  <ReturnBook book={book} key={book.id} />
                ))}
              </div>
            </div>

            {/* 第三个轮播项 */}
            <div className="carousel-item">
              <div className="row flex justify-content-center align-items-center">
                {books.slice(6, 9).map((book) => (
                  <ReturnBook book={book} key={book.id} />
                ))}
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleDark"
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

      {/* Mobile */}
      <div className="d-lg-none mt-3">
        <div className="row flex justify-content-center align-items-center">
          {/* <ReturnBook book={books[0]} key={books[0].id} /> */}
          {books.slice(0, 1).map((book) => (
            <ReturnBook book={book} key={book.id} />
          ))}
        </div>
      </div>

      <div className="homepage-carousel-title mt-3">
      <Link className='btn btn-outline-secondary btn-lg' to='/search'>View More</Link>
      </div>
    </div>
  );
};
