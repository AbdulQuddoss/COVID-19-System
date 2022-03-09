import React, { Component, useEffect } from "react";
import "../presontation/information.css";
import "../presontation/header.css";

// import "datatables.net-dt";
// require("datatables.net");
// import session from "express-session";
// session.set("userName", session);
// session.get("userName");


export class Datatable extends Component {

  constructor(props) {
    super(props);

    this.state = {
      items: [],
      DataisLoaded: false,
    };
  }

  componentDidMount() {
    fetch("https://api.covid19api.com/summary")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json.Countries,
          DataisLoaded: true,
        });
      },[]);
  }

  render() {
    const { DataisLoaded, items } = this.state;
   // console.log(items);
    if (!DataisLoaded)
      return (
        <div>
          <h1 className="warning"> Pleses wait some time.... </h1>{" "}
        </div>
      );

    return (
      <div className="App">
        <Header2 />
        <h1 className="tableHeading"> Data About COVID-19 Of All Countries</h1>
        <table className="table container">
          <thead>
            <tr>
              <th scope="col">Country</th>
              <th scope="col">New Confirmed</th>
              <th scope="col">Total Confirmed</th>
              <th scope="col">New Deaths</th>
              <th scope="col">Total Deaths</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td>{item.Country}</td>
                <td>{item.NewConfirmed}</td>
                <td>{item.TotalConfirmed}</td>
                <td>{item.NewDeaths}</td>
                <td>{item.TotalDeaths}</td>
                {/* <td>{item.NewRecovered}</td>
                    <td>{item.TatalRecovered}</td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
export default Datatable;

const Header2 = () => {
  return (
    <div>
      <div
        id="carouselExampleControls"
        className="carousel slide "
        data-bs-ride="carousel"
      >
        <div className="carousel-inner picSlider">
          <div className="carousel-item active">
            <img
              src="https://source.unsplash.com/1600x900/?covid-19,vaccine"
              className="d-block w-100"
              alt="Loading..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://source.unsplash.com/1600x900/?covid-19,virus"
              className="d-block w-100"
              alt="Loading..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://source.unsplash.com/1600x900/?covid-19,prevention"
              className="d-block w-100"
              alt="Loading..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* <article className="box">
        <div className="headBox">
          <img
            src="https://source.unsplash.com/1600x900/?corona,corona"
            alt="Loading..."
            className="img"
          />
          <h2>Let's Stay Safe & fight Togather Against Corona Virus</h2>
        </div>
      </article> */}
    </div>
  );
};

// const Datatable = (props) => {
//   return (
//     <div>
//       <Header2 />
//       <Table data={props.data} />
//     </div>
//   );
// };
// export default Datatable;

// const Table = (props) => {
//   var { data } = props;
//var newData = data.Countries
//var ddd = newData[3]
//var columns =data[0] && Object.keys(data[0])
//console.log(columns)

//var columns = data.countries[0] && Object.keys(data.countries[0]);
//const dataSet = ['Country', 'NewConfirmed', 'TotalConfirmed', 'NewDeaths', 'TotalDeaths', 'NewRecovered', 'TotalRecovered']
// return (
//   <table cellSpacing={0} cellPadding={0}>
//     <thead>
{
  /* <tr>{columns[0] && columns.map((heading) => <td>{heading}</td>)}</tr> */
}
// </thead>
// <tbody>
{
  /* {columns.map(row => <tr>
                  {
                    columns.map((column, index) => <td key = {index}>{row[column]}</td>)
                  }
           </tr>)} */
}
//       </tbody>
//     </table>
//   );
// };

// export default function Datatable(props) {
//    var {data} = props;

//    var newData = data.Countries
//     var columns =newData[0] && Object.keys(newData[0])
//    console.log(columns)

//    var arr = Object.entries(data)
//    var x = arr[3];
//   var columns = data.countries[0] && Object.keys(data.countries[0]);
//    const dataSet = ['Country', 'NewConfirmed', 'TotalConfirmed', 'NewDeaths', 'TotalDeaths', 'NewRecovered', 'TotalRecovered']
//   return(
//       <table cellSpacing={0} cellPadding={0}>
//         <thead>
//         <tr>{columns && columns.map((heading) => <td>{heading}</td>)}</tr>
//         </thead>
//         <tbody>
//           {columns.map(row => <tr>
//                    {
//                      columns.map((column, index) => <td key = {index}>{row[column]}</td>)
//                    }
//             </tr>)}
//         </tbody>
//       </table>
//   )
// }

// return (
//   <div>
//     <Header1 />
//     <Header2 />
//   </div>
// );

//export class Datatable extends Component {
// async getData(){
//   const res = $.get("https://api.covid19api.com/summary");
//   this.setState({ loading: false, data: res.data });
//   console.log(this.res)
// }

// componentDidMount() {
//     //console.log(data)
//     this.$el = $(this.el);
//     this.$el.DataTable({
//     data: this.props.data,
//       columns: [
//         { title: "Country" },
//         { title: "NewConfirmed" },
//         { title: "TotalConfirmed" },
//         { title: "NewDeaths" },
//         { title: "TotalDeaths" },
//         { title: "NewRecovered" },
//         { title: "TatalRecovered" },
//       ],
//     });
//   }

// async Table(){

// }
// componentWillUnmount() {
//     //  this.$el.DataTable.destroy(true);

// }

// render() {

//   return (
//     <div className = "container table">
//       <Header2 />
//       {" "}
//       <table
//         id="myTable"
//         className="display"
//         width="100%"
//         ref={(el) => (this.el = el)}
//       ></table>{" "}
//     </div>
//   );
// }

// Constructor
//   constructor(props) {
//     super(props);

//     this.state = {
//         items: [],
//         DataisLoaded: false
//     };
// }

// ComponentDidMount is used to
// execute the code
// componentDidMount() {
//     fetch("https://api.covid19api.com/summary")
//         .then((res) => res.json())
//         .then((json) => {
//             this.setState({
//                 items: json.Countries,
//                 DataisLoaded: true
//             });
//         })
// }

// render() {
//     const { DataisLoaded, items } = this.state;
//     console.log( items)
//     if (!DataisLoaded) return <div>
//         <h1> Pleses wait some time.... </h1> </div> ;

//     return (
//     <div className = "App">
//       <Header2 />
//         <h1> Fetch data from an api in react </h1>  {
//             items.map(item => (
//             <ol key = { item.id } className="container">
//                Country :       { item.Country },
//                NewConfirmed:   { item.NewConfirmed },
//                NewDeaths:      { item.NewDeaths },
//                TotalDeaths:    { item.TotalDeaths },
//                NewRecovered:   { item.NewRecovered },
//                TatalRecovered: { item.TatalRecovered }
//                 </ol>
//             ))
//         }
//     </div>
// );
//       }
// }
// export default Datatable;

// columns: [
//   { title: "Country", data: "Country" },
//   { title: "NewConfirmed", data: "NewConfirmed" },
//   { title: "TotalConfirmed", data: "TotalConfirmed" },
//   { title: "NewDeaths", data: "NewDeaths" },
//   { title: "TotalDeaths", data: "TotalDeaths" },
//   { title: "NewRecovered", data: "NewRecovered" },
//   { title: "TatalRecovered", data: "TatalRecovered" },
// ],

// columns: [
//   { title: "Country" },
//   { title: "NewConfirmed" },
//   { title: "TotalConfirmed" },
//   { title: "NewDeaths" },
//   { title: "TotalDeaths" },
//   { title: "NewRecovered" },
//   { title: "TatalRecovered" },
// ],
