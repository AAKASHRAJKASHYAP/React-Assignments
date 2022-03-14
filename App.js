import React from 'react';
import logo from './logo.svg';
import './App.css';


var arrow = "<";
var rightarrow = ">";
var status = {
  1: "suspended",
  2: "completed",
  3: "cancelled",
};
var Appointments = {
  name: "Allen Ford",
  employeeid: 1234567890,
  appoinmenton: new Date().toLocaleString(),
  email: "person@example.com",
  phone: 123456789,
  orderInfo: {
    status: status[1],
    Door: "Mark",
    Time: new Date().toLocaleString(),
  },
  person: {
    avatar: "https://www.w3schools.com/howto/img_avatar.png",
    title: "Hey this is title text",
    description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."
  },
};
const App = () => {
  return (
    <div className="site-container">
      <div className="order-details">
        <div className="nav">
          <div className="nav-container">
            <a className="nav-arrow arrow" href="#">{arrow}</a>
            <h1>
              {Appointments.name}
            </h1>
            <span className="nav-text">
              {Appointments.employeeid}
            </span>
            <button className="btn nav-btn">
              Print
            </button>
          </div>
        </div>
        <div className="container">
          <div className="customer-info block">
            <p className="text">
              <span>
                <strong>Appointment </strong>
              </span>
              {
                Appointments.appoinmenton
              }
            </p>
            <p className="text">
              <span>
                <strong>Email:</strong>
              </span>
              {
                Appointments.email
              }
            </p>
            <p className="text">
              <span>
                <strong>phone</strong> +
              </span>
              {
                Appointments.phone
              }
            </p>
          </div>
          <div className="order-info grid block">
            <div className="unit one-third ">
              <p className="text text-label">
                <b>Status</b>
              </p>
              <p className="text order-status">{Appointments.orderInfo.status}</p>
            </div>
            <div className="unit one-third ">
              <p className="text text-label">
                <b>Door</b>
              
              </p>
              <p className="text order-status">{Appointments.orderInfo.Door}</p>
            </div>
            <div className="unit one-third ">
              <p className="text text-label">
               <b>Time</b>
              </p>
              <p className="text order-status">{Appointments.orderInfo.Time}</p>
            </div>
          </div>
          <ul className="product-list"> 
            <li className="product">
              <label className="img custom-cheakbox">
                <input type="checkbox" className="product-input" value=""></input>
                <span className="custom-cheakbox-indicator"></span>

                <img className="avatar" src={Appointments.person.avatar} width="100" height="100" />
              </label>
            </li>
            <li>
              <a href="#" className="product-desc">
              
                <div className="product-info">
                  <h3 className="product-title text">{Appointments.person.title} </h3>
                  <span className="product-arrow arrow">
                  {rightarrow}
                </span>
                  <p className="text-help text">{Appointments.person.description} </p>
                </div>
              </a>
            </li>
            <li>

            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
export default App;