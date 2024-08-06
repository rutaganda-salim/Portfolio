import React, { useState } from 'react';
import "./services.css";

const Services = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  }

  return (
    <section className='services section' id='services'>
      <h2 className='section__title'>Services</h2>
      <span className='section__subtitle'>What I offer</span>

      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">Frontend <br /> Developer</h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(1) }>
            View More <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
            <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal" }>
              <div className="services__modal-content">
                <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                <h3 className="services__modal-title">Frontend Developer</h3>
                <p className="services__modal-description">
                  Service with more than 3 years of experience. Providing quality work to clients and companies.
                </p>
                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className='services__modal-info'>I develop user interfaces for responsive and interactive web applications.</p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className='services__modal-info'>I build and structure web pages using HTML, CSS, and JavaScript frameworks like ReactJS and VueJS.</p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className='services__modal-info'>I ensure cross-browser compatibility and optimize frontend performance.</p>
                  </li>
                </ul>
              </div>
            </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-server services__icon"></i>
            <h3 className="services__title">Backend <br /> Developer</h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(2) }>
            View More <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

            <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal" }>
              <div className="services__modal-content">
                <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)} ></i>

                <h3 className="services__modal-title">Backend Developer</h3>
                <p className="services__modal-description">
                  Service with more than 3 years of experience. Providing quality work to clients and companies.
                </p>
                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className='services__modal-info'>I create and manage backend server logic and APIs.</p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className='services__modal-info'>I integrate and manage databases for data storage and retrieval.</p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className='services__modal-info'>I implement user authentication and security measures.</p>
                  </li>
                </ul>
              </div>
            </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-cloud-upload services__icon"></i>
            <h3 className="services__title">DevOps <br /> Engineer</h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(3) }>
            View More <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

            <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal" }>
              <div className="services__modal-content">
                <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)} ></i>

                <h3 className="services__modal-title">DevOps Engineer</h3>
                <p className="services__modal-description">
                  Service with more than 3 years of experience. Providing quality work to clients and companies.
                </p>
                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className='services__modal-info'>I deploy web applications to servers or cloud platforms.</p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className='services__modal-info'>I set up and manage continuous integration/continuous deployment (CI/CD) pipelines.</p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className='services__modal-info'>I monitor, troubleshoot, and maintain web applications to ensure uptime and performance.</p>
                  </li>
                </ul>
              </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Services;
