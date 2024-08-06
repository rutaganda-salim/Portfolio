import React, { useState } from 'react';
import "./qualification.css"

const Qualification = () => {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }
    return (
        <section className="qualification section">
            <h2 className='section__title'>Qualification</h2>
            <span className='section__subtitle'>My personal journey</span>

            <div className="qualificatoin__container container">
                <div className="qualification__tabs">
                    <div
                        className={toggleState === 1
                            ? "qualification__button qualification__active button--flex" :
                            "qualification__button button--flex"
                        }
                        onClick={() => toggleTab(1)}
                    >
                        <i className="uil uil-graduation-cap qualification__icon"></i> Education
                    </div>
                    <div className={toggleState === 2
                        ? "qualification__button qualification__active button--flex" :
                        "qualification__button button--flex"
                    }
                        onClick={() => toggleTab(2)}
                    >
                        <i className="uil uil-briefcase-alt qualification__icon"></i> Experience
                    </div>
                </div>
                <div className="qualification__sections">
                    <div
                        className={toggleState === 1
                            ? "qualification__content qualification__content-active"
                            : "qualification__content"
                        }
                    >
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Software Programming and Embedded Systems</h3>
                                <span className="qualification__subtitle">Rwanda Coding Academy</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2022 - Present
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Full Stack Developer</h3>
                                <span className="qualification__subtitle">Community Tech Hub</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2022 - Present
                                </div>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Software Programming and Embedded Systems</h3>
                                <span className="qualification__subtitle">Rwanda Coding Academy</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2022 - Present
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Full Stack Developer</h3>
                                <span className="qualification__subtitle">Community Tech Hub</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2022 - Present
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={toggleState === 2
                        ? "qualification__content qualification__content-active"
                        : "qualification__content"
                    }>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Product Designer</h3>
                                <span className="qualification__subtitle">Figma Design</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt">2018 - 2021</i>
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Product Designer</h3>
                                <span className="qualification__subtitle">Apple Inc</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt">2022 - 2023</i>
                                </div>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">UI / UX designer</h3>
                                <span className="qualification__subtitle">Microsoft - Rwanda</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt">2019 - 2023</i>
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualification