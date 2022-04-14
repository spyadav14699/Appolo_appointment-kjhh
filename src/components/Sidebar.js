import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { logout } from '../tools/auth';
// import logo from '../assets/images/logo.png';
import classes from '../style/Sidebar.module.css';

const Sidebar = () => {
  const { user: currentUser } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(logout());
  };

 

  return (
    <div className='main-nav'>
     
    

      <nav className={`${classes.sidenav} ${classes.toggle}`}>
      
        {currentUser
            && (
              <NavLink to="/profile" className={classes.navlink} activeClassName={classes.active}>
                {currentUser.user.name}
              </NavLink>
            )}
        {currentUser ? (
          <ul>
             <li>
              <NavLink to="/appointments/new" className={classes.navlink} activeClassName={classes.active}>
                New Appointment
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/appointments" className={classes.navlink} activeClassName={classes.active}>
               Old Appointments
              </NavLink>
            </li>
           
            <li>
              <NavLink to="/doctors" className={classes.navlink} activeClassName={classes.active}>
                Doctors
              </NavLink>
            </li>
            <li>
              <a href="/login" onClick={logOut} className={classes.navlink}>
                Logout
              </a>
            </li>
          </ul>
        ) : (
          <ul>
            <li>
              <NavLink to="/login" className={classes.navlink} activeClassName={classes.active}>
                Login
              </NavLink>
            </li>
            <li>
              <NavLink to="/register" className={classes.navlink} activeClassName={classes.active}>
                Sign Up
              </NavLink>
            </li>
          </ul>
        )}
       
      </nav>
    </div>
  );
};

export default Sidebar;
