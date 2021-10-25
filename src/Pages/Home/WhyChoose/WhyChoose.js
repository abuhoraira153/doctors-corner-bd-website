import React from 'react';
import './WhyChoose.css'

const WhyChoose = () => {
    return (
        <div id = "whyChoose" className = "my-5">
            <h1 className = "text-primary">Why Choose our Doctors Corner?</h1>
            <div className="row my-5 mx-5 my-cards">
                <div className="col-lg-3 col-12 why-card mx-5 my-3">
                    <h2 className = "text-style">More experience</h2>
                    <p className = "text-dark text-muted">Every year, more than a million people come to Doctors for care. Our highly specialized experts are deeply experienced in treating rare and complex conditions.</p>
                </div>
                <div className="col-lg-3 col-12 why-card mx-5 my-3">
                    <h2 className = "text-style">The right answers</h2>
                    <p className = "text-dark text-muted">Successful treatment starts with an accurate diagnosis, and our experts take the time to get it right. A team of specialists will listen to your needs and evaluate your condition from every angle to make the very best plan for you.</p>
                </div>
                <div className="col-lg-3 col-12 why-card mx-5 my-3">
                    <h2 className = "text-style">Seamless care</h2>
                    <p className = "text-dark text-muted">At Mayo Clinic, every aspect of your care is coordinated and teams of experts work together to provide exactly the care you need. What might take months elsewhere can often be done in days here.</p>
                </div>
            </div>
        </div>
    );
};

export default WhyChoose;