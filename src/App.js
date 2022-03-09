import Datatable from "./components/Datatable";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home, { Tempelate } from "./components/home"
import Video from "./components/video"
import Prediction from "./components/prediction"
import About from "./components/about"
import Contactus from "./components/contactUs"
import Signup from "./components/sign-up";
import Signin from "./components/sign-in";
import Logout from "./components/logout";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
require("es6-promise").polyfill();
require("isomorphic-fetch");

const App = () => { 
    return(
      <>
      <Router>
        <Header />
      <Routes>
          <Route exact path="/" element = {  <Home />} />
          <Route exact path="/datatable" element ={<Datatable />} />
          <Route exact path="/prediction" element = {<Prediction />}/>
          <Route exact path="/video" element = {<Video />} />
          <Route exact path="/about" element = {<About />} />
          <Route exact path="/contactUs" element = {<Contactus />} />
          <Route exact path="/signin" element = {<Signin />} />
          <Route exact path="/signup" element = {<Signup />} />
          <Route exact path="/logout" element = {<Logout />} />
        </Routes>
        <Footer />
    </Router>
      </>
    )
  }
  

export default App;





// const [data, setData] = useState([]);
  // const [Q, setQ] = useState("");

  // const getData = async () => {
  //        const response = await fetch("https://api.covid19api.com/countries")
  //        setData(await response.json())
  // }
   
  // useEffect(() => {
  //   fetch("https://api.covid19api.com/summary")
  //   .then((response) => response.json())
  //   .then((json) => setData(json))
  //   //getData();
  // },[])
  //console.log(data)
  //   const dataSet = [
  //   [ "pakistan", "0", "0", "0", "0", "0","0" ],
  //   [ "pakistan", "0", "0", "0", "0", "0","0" ],
  //   [ "pakistan", "0", "0", "0", "0", "0","0" ],
  //   [ "pakistan", "0", "0", "0", "0", "0","0" ],
  //   [ "pakistan", "0", "0", "0", "0", "0","0" ],
  //   [ "pakistan", "0", "0", "0", "0", "0","0" ],
  //   [ "pakistan", "0", "0", "0", "0", "0","0" ],
  //   [ "pakistan", "0", "0", "0", "0", "0","0" ],
  //   [ "pakistan", "0", "0", "0", "0", "0","0" ],
  //   [ "pakistan", "0", "0", "0", "0", "0","0" ],
  //   [ "pakistan", "0", "0", "0", "0", "0","0" ],
  //   [ "Afghanistan", "0", "0", "0", "0", "0","0" ],
  //   [ "pakistan", "0", "0", "0", "0", "0","0" ],
  //   [ "pakistan", "0", "0", "0", "0", "0","0" ],
  //   [ "pakistan", "0", "0", "0", "0", "0","0" ],
  //   [ "pakistan", "0", "0", "0", "0", "0","0" ],
  //   [ "pakistan", "0", "0", "0", "0", "0","0" ],
  //   [ "pakistan", "0", "0", "0", "0", "0","0" ],
  //   [ "pakistan", "0", "0", "0", "0", "0","0" ]
    
  // ];
  // render () {






  
//   fetch = () => {
//     $.get("https://api.covid19api.com/summary",
//            function (data) {
//              var mytbl = document.getElementById("myTable");
//               for(var i=1; i<data['Countries'].length; i++){
//                   var x = mytbl.insertRow();

//                   x.insertCell(0);
//                  mytbl.rows[i].cells[0].innerHTML = data['Countries'][i-1]['Country'];

//                  x.insertCell(1);
//                  mytbl.rows[i].cells[1].innerHTML = data['Countries'][i-1]['NewConfirmed'];

//                  x.insertCell(2);
//                  mytbl.rows[i].cells[2].innerHTML = data['Countries'][i-1]['TotalConfirmed'];

//                  x.insertCell(3);
//                  mytbl.rows[i].cells[3].innerHTML = data['Countries'][i-1]['NewDeaths'];

//                  x.insertCell(4);
//                  mytbl.rows[i].cells[4].innerHTML = data['Countries'][i-1]['TotalDeaths'];

//                  x.insertCell(5);
//                  mytbl.rows[i].cells[5].innerHTML = data['Countries'][i-1]['NewRecovered'];

//                  x.insertCell(6);
//                  mytbl.rows[i].cells[6].innerHTML = data['Countries'][i-1]['TotalRecovered'];
//                  }
//            }
//     )
// }

//}
// export default function App() {
  
//   const [data, setData] = useState([]);
//   const [Q, setQ] = useState("");

//   const getData = async () => {
//          const response = await fetch("https://api.covid19api.com/summary")
//          setData(await response.json())
//   }
   
//   useEffect(() => {
//     getData();
//   },[])
//   return (
//     <>
    
//     <Datatable data = {data} />
//     </>
//   )
//  }

 