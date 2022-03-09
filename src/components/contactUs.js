import React, {useState} from "react";
import axios from "axios";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [contact, setContact] = useState("");
  console.log(name, email, subject, message);

  const addContact = (e) => {
    e.preventDefault()
   axios.post("http://localhost:3001/addContact", {
     Name: name,
     Email: email,
     Subject: subject,
     Message: message
   }).then((response) => {
     if(response){
       setContact(response.data.contactMsg)
     }
   })
  }
  return (
    <div>
      <section className="mb-4 container">
        <h2 className="h1-responsive font-weight-bold text-center my-4">
          Contact us
        </h2>

        <p className="text-center w-responsive mx-auto mb-5 text-warning">
          Do you have any questions? Please do not hesitate to contact us
          directly. Our team will come back to you within a matter of hours to
          help you.
        </p>
            <h3 style={{color: "blue"}}>{contact}</h3>
        <div className="row">
          <div className="col-md-9 mb-md-0 mb-5">
            <form
              id="contact-form"
              name="contact-form"
            >
              <div className="row">
                <div className="col-md-6">
                  <div className="md-form mb-0">
                  <label for="name" className="">
                      Your name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control"
                      onChange={(e) => {setName(e.target.value)}}
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="md-form mb-0">
                  <label for="email" className="">
                      Your email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-control"
                      onChange={(e) => {setEmail(e.target.value)}}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="md-form mb-0">
                  <label for="subject" className="">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="form-control"
                      onChange={(e) => {setSubject(e.target.value)}}
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <div className="md-form">
                  <label for="message">Your message</label>
                    <textarea
                      type="text"
                      id="message"
                      name="message"
                      rows="2"
                      className="form-control md-textarea"
                      onChange={(e) => {setMessage(e.target.value)}}
                    ></textarea>
                  </div>
                </div>
              </div>

              <div className="text-center text-md-left" style = {{marginTop: "1rem"}}>
              <button className="btn btn-primary" onClick= {addContact}>Submit</button>
            </div>

            </form>
            <div className="status"></div>
          </div>

          <div className="col-md-3 text-center">
            <ul className="list-unstyled mb-0">
              <li>
                <i className="fas fa-map-marker-alt fa-2x"></i>
                <p>Comsats University Of Islamabad Vehari Campus</p>
              </li>

              <li>
                <i className="fas fa-phone mt-4 fa-2x"></i>
                <p>0306-4343937</p>
                <p>0300-2803735</p>
              </li>

              <li>
                <i className="fas fa-envelope mt-4 fa-2x"></i>
                <p></p>
              </li>
            </ul>comsatsuniversityveharicampus@gmail.com
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
