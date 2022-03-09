import React, {useState} from "react";
import "../presontation/signup.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faKey } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [signupFirstName, setsignupFirstName] = useState("");
  const [signupLastName, setsignupLastName] = useState("");
  const [signupUserName, setsignupUserName] = useState("");
  const [signupPassword, setsignupPassword] = useState("");
  const [msg, setMsg] = useState("");
  let navigate = useNavigate();
 //console.log(signupFirstName, signupLastName, signupUserName, signupPassword)

  const register = (e) => {
    e.preventDefault()
    if(signupFirstName === "" || signupLastName === "" || signupUserName === "" || signupPassword === ""){
      window.alert("first name, last name, user name and password are empty!")
    }
    else{
    axios.post('http://localhost:3001/register', {
      Fname: signupFirstName,
      Lname: signupLastName,
      Uname: signupUserName,
      password: signupPassword
    }).then(response => {
      if(response.data.cond === true){
      //setMsg(response.data.message);
      navigate('/datatable')
      }else{
        setMsg(response.data.message)
      }
    });
  }
  }

  return (
    <div>
      <div className="signupSubMain">
        <div className="d-flex justify-content-center abc">
          <div className="card">
            <div className="card-header">
              <h3 style={{color: "#FFC312"}}>Sign Up</h3>
              {/* <div className="d-flex justify-content-end social_icon">
					<span></span>
					<span><i className="fab fa-google-plus-square"></i></span>
					<span><i className="fab fa-twitter-square"></i></span>
				</div> */}
            </div>
            <div className="card-body">
              <form>
              <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <FontAwesomeIcon icon={faUser} />
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First Name"
                    onChange={(e) => {setsignupFirstName(e.target.value)}}
                  />
                </div>
                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <FontAwesomeIcon icon={faUser} />
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last Name"
                    onChange={(e) => {setsignupLastName(e.target.value)}}
                  />
                </div>
                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <FontAwesomeIcon icon={faUser} />
                    </span>
                  </div>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="username"
                    onChange={(e) => {setsignupUserName(e.target.value)}}
                  />
                </div>
                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <FontAwesomeIcon icon={faKey} />
                    </span>
                  </div>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="password"
                    onChange={(e) => {setsignupPassword(e.target.value)}}
                  />
                </div>
                {/* <div className="row align-items-center remember">
						<input type="checkbox"/>Remember Me
					</div> */}
                <div className="form-group">
                  <input
                    type="submit"
                    value="Sign Up"
                    className="btn float-right login_btn"
                    onClick={register}
                  />
                </div>
                <div className="msg">
                  <h5>{msg}</h5>
                </div>
              </form>
            </div>
            <div className="card-footer">
              {/* <div className="d-flex justify-content-center links" style = {{color:"#FFC312", fontWeight: "bold"}}>
                Don't have an account?<Link to="/signup">Sign Up</Link>
              </div> */}
              {/* <div className="d-flex justify-content-center">
					<Link to="#">Forgot your password?</Link>
				</div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
