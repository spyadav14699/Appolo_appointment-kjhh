import React, { useEffect, useState } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Carousel from 'react-multi-carousel';

import 'react-multi-carousel/lib/styles.css';
import classes from '../style/Doctors.module.css';
import getDoctors from '../tools/user';

const Doctors = () => {
  const { user: currentUser } = useSelector(state => state.auth);
  const { doctors } = useSelector(state => state.user);
  const { message } = useSelector(state => state.message);
  const [loading, setLoading] = useState(false);
  const [successful, setSuccessful] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (doctors.length === 0 && currentUser) {
      setLoading(true);
      dispatch(getDoctors())
        .then(() => {
          setSuccessful(true);
          setLoading(false);
        })
        .catch(() => {
          setLoading(false);
        });
    }
  }, [doctors, dispatch]);

  if (!currentUser) {
    return <Redirect to="/login" />;
  }

  const doctorsList = doctors.map(doctor => (
    <div key={doctor.id}>
      <Link to={`/doctors/${doctor.id}`} className={classes.Doctors}>
        <div className="doc-box">
          <img src={doctor.image} alt={doctor.name} className={`rounded-circle ${classes.img}`} />
          <h5 className={`text-dark p-4 ${classes.border}`}>{doctor.name}</h5>
          <p className="text-secondary mt-3">
            <strong>Qualification:&nbsp;</strong>
            {doctor.qualification}
          </p>
        </div>
      </Link>

    </div>
  ));
  return (
    <div className="container text-center">
      <div>
        <h3>LIST OF DOCTORS</h3>
        <p className="text-secondary">Please select a doctor to view details</p>
      </div>
      {loading && <span className="spinner-border spinner-border-lg" />}
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite={false}
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 3,
            partialVisibilityGutter: 40,
          },
         
         
        }}
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {doctorsList}
      </Carousel>
      {message && (
        <div className="form-group">
          <div className={successful ? 'alert alert-success' : 'alert alert-danger'} role="alert">
            {message}
          </div>
        </div>
      )}
    </div>
  );
};

export default Doctors;
