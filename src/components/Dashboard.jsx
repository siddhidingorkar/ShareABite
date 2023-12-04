import React from "react";
import "./Dashboard.css";
import { FaTachometerAlt, FaCocktail, FaUtensils, FaPercent, FaHistory } from 'react-icons/fa';

const DashboardContent = () => {
  return (
    <div className="dash-content">
      <div className="overview">
        <div className="title">
        <FaTachometerAlt />
          <span className="text">Category</span>
        </div>

        <div className="boxes">
          <div className="box box1">
            <FaCocktail/>
            <span className="text">Cooked Food</span>
          </div>
          <div className="box box2">
            <FaUtensils />
            <span className="text">Raw Food</span>
          </div>
          <div className="box box3">
            <FaPercent />
            <span className="text">Net Orders</span>
          </div>
        </div>
      </div>

      <div className="activity">
        <div className="title">
          <FaHistory />
          <span className="text">Recent Orders</span>
        </div>

        <div className="activity-data">
          {/* Replace the content below with your dynamic data */}
          <div className="data names">
            <span className="data-title">Name</span>
            <span className="data-list">Prem Shahi</span>
            {/* Add other data-list items here */}
          </div>
          <div className="data email">
            <span className="data-title">Email</span>
            <span className="data-list">premshahi@gmail.com</span>
            {/* Add other data-list items here */}
          </div>
          <div className="data joined">
            <span className="data-title">Joined</span>
            <span className="data-list">2022-02-12</span>
            {/* Add other data-list items here */}
          </div>
          <div className="data type">
            <span className="data-title">Type</span>
            <span className="data-list">Raw</span>
            {/* Add other data-list items here */}
          </div>
          <div className="data status">
            <span className="data-title">Status</span>
            <span className="data-list">Delivered</span>
            {/* Add other data-list items here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;
