import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";

export function Dashboard() {
  const [details, setDetails] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/Data.json")
      .then((data) => data.json())
      .then((response) => {
        setDetails(response);
      });
  }, []);
  var cart = [];
  function add(id) {
    details.map((value, index) => {
      let sno = value.id;
      if (id === sno) {
        let check = cart.some((item) => item.id === id);
        if (check) {
          alert("Item already added");
        } else {
          let divElement = document.createElement("div");
          divElement.innerHTML = `<div class = "bg-info"><div class = "container"><div class = "card w-25 m-3">
            <img src=${value.image}  className="card-img-top" alt="image"/>
            <div class="card-body">
            <h3 class = "card-title">${value.title}</h3>
            <h4>${value.id}</h4>
            <p>${value.price}</p><p>${value.category}</p>
            <input type="button" class="btn btn-danger m-2" value="-"/>
            <input type="button" class="btn btn-success m-2" value="+"/>
            <input type="button" class="btn btn-danger" value ="Remove" />
            </div></div></div></div>
            `;
          document.body.appendChild(divElement);
          let addItem = {
            id: value.id,
            title: value.title,
            price: value.price,
            category: value.category,
            image: value.image,
            count: value.rating.count,
            quantity: 1,
          };
          cart.push(addItem);
          alert("Item added successfully!");
        }
      }
    });
  }
  function increment(id) {
    alert("Item incremented successfully!");
  }
  function decrement(id) {
    alert("Item decremented successfully!");
  }

  return (
    <>
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Realiti Fashion
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse">
            <div class="navbar-nav d-flex float-right">
              <Link to={`/view`}>
                <input
                  type="button"
                  class=" btn btn-primary text-white"
                  aria-current="page"
                  value="View details"
                />
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <div className="container-fluid bg-dark-subtle">
        <div className="row gap-2 justify-content-center">
          {details.map((value, index) => (
            <>
              <div className="col-lg-4 col-md- col-xl-3">
                <div className="card bg-light">
                  <div className="w-75">
                    <img
                      src={value.image}
                      className="card-img-top w-75"
                      id="imageId"
                    />
                  </div>
                  <div className="card-body ">
                    <h5 className="card-title" id="titleId">
                      Name : {value.title}
                    </h5>
                    <h6 id="categoryId"> Category : {value.category}</h6>
                    <p id="priceId">Price : ${value.price}</p>
                    <StarRatings
                      rating={value.rating.rate}
                      starDimension="20px"
                      starSpacing="2px"
                      starRatedColor="gold"
                    />
                    <h6 id="countId">count : {value.rating.count}</h6>
                  </div>
                  <div className="d-flex p-2">
                    <input
                      type="button"
                      value="-"
                      className="btn btn-danger m-1"
                      onClick={() => {
                        decrement(value.id);
                      }}
                      id="subId"
                    />
                    <input
                      type="button"
                      value="+"
                      className="btn btn-primary m-1"
                      onClick={() => {
                        increment(value.id);
                      }}
                      id="addId"
                    />
                    <input
                      type="submit"
                      value="Add to cart"
                      className="btn btn-primary ms-5"
                      onClick={() => {
                        add(value.id);
                      }}
                    />
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}

