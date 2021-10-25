import React from 'react';
import './AboutUs.css';
import aboutPic from '../../../images/AboutUs/about.jpeg'

const AboutUs = () => {
    return (
        <div id = "aboutUs" className = "container my-5">
            <h1 className = "text-primary my-4">About Us</h1>
            <div className="row">
                <div className="col-lg-7 col-12">
                    <img className ="image-style" src={aboutPic} alt="" />
                </div>
                <div className="col-lg-5 col-12 p-4 about-desc">
                    <p className = "text-dark">This article is about those outpatient clinics that are not connected with hospitals. For outpatient clinics of hospitals, see Outpatient clinic (hospital department). For inpatient healthcare facilities, see general hospital. For the British political term, see Surgery (politics). For other uses, see Clinic (disambiguation).Military Policlinic in Legionowo, Poland.A clinic (or outpatient clinic or ambulatory care clinic) is a health facility that is primarily focused on the care of outpatients. Clinics can be privately operated or publicly managed and funded. They typically cover the primary care needs of populations in local communities, in contrast to larger hospitals which offer more specialised treatments and admit inpatients for overnight stays. Most commonly, the English word clinic refers to a general practice, run by one or more general practitioners offering small therapeutic treatments, but it can also mean a specialist clinic. Some clinics retain the name "clinic" even while growing into institutions as large as major hospitals or becoming associated with a hospital or medical school.</p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;