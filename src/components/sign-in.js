import React, {useState} from 'react'
import "../presontation/signup.css";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faKey } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';

const Signin = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  let navigate = useNavigate();
 // console.log(name, password);
 
 const check = (e) =>{
   e.preventDefault()
   axios.post('http://localhost:3001/check', {
     userName: name,
     password: password
   }).then((response) => {
    if(response.data.cond === true){
    //setMsg(response.data.msg);
    navigate('/datatable')
    }else{
      setMsg(response.data.msg)
    }
   })
 }
// useEffect(() => {
//     axios.get("http://localhost:3000/login")
//     .then((res => {
//       console.log(res);
//     }))
// },[])
  return (
    <div>
       <div className="signupSubMain">
        <div className="d-flex justify-content-center abc">
          <div className="card">
            <div className="card-header">
              <h3 style={{color: "#FFC312"}}>Sign In</h3>
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
                    type="email"
                    className="form-control"
                    placeholder="username"
                    onChange={(e) => {setName(e.target.value)}}
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
                    onChange={(e) => {setPassword(e.target.value)}}
                  />
                </div>
                {/* <div className="row align-items-center remember">
						<input type="checkbox"/>Remember Me
					</div> */}
                <div className="form-group">
                  <input
                    type="submit"
                    value="Sign In"
                    className="btn float-right login_btn"
                    onClick={check}
                  />
                </div>
                <div className="msg form-group">
                  <h5>{msg}</h5>
                </div>
              </form>
            </div>
            <div className="card-footer">
              <div className="d-flex justify-content-center links" style = {{color:"#FFC312", fontWeight: "bold"}}>
                Don't have an account?<Link to="/signup">Sign Up</Link>
              </div>
              {/* <div className="d-flex justify-content-center">
					<Link to="#">Forgot your password?</Link>
				</div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signin;
