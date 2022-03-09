import React from "react";
import "../presontation/about.css";
import User from "../img/default-user.png"

const about = () => {
  return (
    <div>
      <div className="about-section">
        <h1>About Us Page</h1>
        <p>
          This app consists of the development of a contributory web
          application to display and gather information on COVID-19. Prediction
          of the dynamics of infections during the current COVID-19 pandemic is
          critical for public health planning. We describe a new approach that
          forecasts the number of incident cases in the near future given past
          occurrences using only a small number of assumptions. The initial data
          from different APIs(Application Programming Interface) for the
          application is based upon current situation of COVID-19, best selling
          drugs of COVID-19, temperature and following of sop's rate
        </p>
        <p>
          COVID-19 is a disease that has spread around the world in a short
          time, and people all over the world effected. Because the COVID-19 is
          a global problem. So now we need such a web application to informed
          people about COVID-19. So our application will provide the Pakistan
          COVID-19 situation. Our application will tell you the status of
          COVID-19 in the future.
        </p>
      </div>

      <h2 style={{ textAlign: "center" }}>Our Team</h2>
      <div className="row">
        <div className="column">
          <div className="card">
            <img src={User} alt="Jane" />
            <div className="container">
              <h2>Dr:Rub Nawaz</h2>
              <p className="title">Supperviser</p>
              <p>Lead And Guid In Our My Project</p>
              <p>rabnawaz@gmail.com</p>
              <p>
                <button className="button">Contact</button>
              </p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img src={User} alt="Mike"  />
            <div className="container">
              <h2>Abdul Quddus</h2>
              <p className="title">Backend Developer</p>
              <p>Create The Structure And Database Of Application</p>
              <p>abdulquddos937@gmail.com</p>
              <p>
                <button className="button">Contact</button>
              </p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img src={User} alt="John" />
            <div className="container">
              <h2>Sheraz Ahmed</h2>
              <p className="title">Frontend Developer</p>
              <p>Create The Graphical User Interface</p>
              <p>sherazahmed@gmail.com</p>
              <p>
                <button className="button">Contact</button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;
