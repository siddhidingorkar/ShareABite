import React from "react";
import "./Dashboard.css";
import { FaTachometerAlt, FaCocktail, FaUtensils, FaPercent, FaHistory } from 'react-icons/fa';

const DashboardContent = () => {
  return (
    <div className="dash-content">
      <div className="overview">
      <div className="title-container" style={{ textAlign: 'center', marginTop: '5%' }}>
  <FaTachometerAlt />
  <span className="text"><h2>Admin</h2></span>
</div>


        <div className="boxes">
          <div className="box box1">
          <FaUtensils />
          <span className="text">Food</span>
          </div>
          <div className="box box2">
           
            <span className="text">Money</span>
          </div>

        </div>
      </div>

      <div className="activity">
        <div className="title-container" style={{ textAlign: 'center', marginTop: '1%', marginBottom: '3%', }}>
          <FaHistory />
          <span className="text"><h3>Recent Donations</h3></span>
        </div>

        <div className="activity-data">
          {/* Replace the content below with your dynamic data */}
          <div className="data names">
            <span className="data-title">Donor Name</span>
            <span className="data-list">Relax Pure veg </span>
            <span className="data-list">Durga </span>
            <span className="data-list">Anil Mehta </span>
            <span className="data-list">Samudra Pure veg </span>
            <span className="data-list">Ratan Agrawal </span>
            <span className="data-list">Alok Bajoria </span>
            {/* Add other data-list items here */}
          </div>
          <div className="data volunteer">
            <span className="data-title">Volunteer Name</span>
            <span className="data-list">Ankit Dahiya</span>
            <span className="data-list">Yukta Saha</span>
            <span className="data-list">-</span>
            <span className="data-list">Siddhi Dingorkar</span>
            <span className="data-list">Mahi Bohara</span>
            <span className="data-list">-</span>
            {/* Add other data-list items here */}
          </div>
          <div className="data date">
            <span className="data-title">Donation Date</span>
            <span className="data-list">2023-11-12</span>
            <span className="data-list">2023-11-14</span>
            <span className="data-list">2023-11-16</span>
            <span className="data-list">2023-11-20</span>
            <span className="data-list">2023-12-04</span>
            <span className="data-list">2023-12-06</span>
            {/* Add other data-list items here */}
          </div>
          <div className="data category">
            <span className="data-title">Category</span>
            <span className="data-list">Food</span>
            <span className="data-list">Food</span>
            <span className="data-list">Money</span>
            <span className="data-list">Food</span>
            <span className="data-list">Food</span>
            <span className="data-list">Money</span>
            </div>
          <div className="data type">
            <span className="data-title">Type</span>
            <span className="data-list">Cooked</span>
            <span className="data-list">Cooked</span>
            <span className="data-list">-</span>
            <span className="data-list">Cooked</span>
            <span className="data-list">Raw</span>
            <span className="data-list">-</span>
            {/* Add other data-list items here */}
          </div>
          <div className="data status">
            <span className="data-title">Status</span>
            <span className="data-list">Delivered</span>
            <span className="data-list">Delivered</span>
            <span className="data-list">Success</span>
            <span className="data-list">Delivered</span>
            <span className="data-list">Delivered</span>
            <span className="data-list">Success</span>
            {/* Add other data-list items here */}
            </div>


        </div>
      </div>
    </div>
  );
};

export default DashboardContent;
