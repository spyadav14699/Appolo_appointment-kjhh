import React from 'react';
import { Link } from 'react-router-dom';
import classes from '../style/Home.module.css';

const Home = () => (
  <div className={classes.Home}>
    <div className={classes.Overlay}>
      <div className="d-flex justify-content-center flex-column align-items-center h-75">
        <h2> Lookin for Doctor's advice ? </h2>
         
          <h2>Book an Appointment now ! </h2>
        <div className="d-flex mt-3">
          <select className={`${classes.Select} ${classes.Button} mr-4`}>
            <option> Mumbai</option>
            <option> Kolkata</option>
            <option> Chennai</option>
            <option> Bangalore</option>
            <option> Hyderabad</option>
            <option> Ahmedabad</option>
            <option> Pune</option>
            <option> Visakhapatnam</option>
            <option> Surat</option>
            <option> Delhi</option>
            <option> Jodhpur</option>
          </select>
          <Link to="/appointments/new" className={classes.Button}>
            Add Appointment
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
