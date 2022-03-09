import React, { Component } from "react";
import Virus from "../img/virus.jfif";
import "../presontation/index.css";

const Home = () => {
  return (
    <div style={{ marginTop: "2rem" }}>
      <Tempelate4 />
      <Tempelate />
    </div>
  );
};

const Tempelate4 = () => {
  return (
    <div>
      <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
        <div className="col-md-5 p-lg-5 mx-auto my-5">
          <h1 className="display-4 font-weight-normal">Wellcome To COVID-19 Information and Prediction System</h1>
          <p className="lead font-weight-normal">
            All information about COVID-19 cases, conditions, veccination etc
          </p>
          {/* <Link className="btn btn-outline-secondary" to="#">Coming soon</Link> */}
        </div>
        <div className="product-device shadow-sm d-none d-md-block"></div>
        <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
      </div>
    </div>
  );
};

export class Tempelate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      dataLoading: false,
    };
  }

  componentDidMount() {
    fetch("")
    //https://api.nhs.uk/conditions/coronavirus-covid-19
      .then((res) => res.json())
      .then((result) => {
         //console.log(result)
        this.setState({
          items: result.hasPart,
          dataLoading: true,
        });
      },[]);
  }

  render() {
    const { dataLoading, items } = this.state;
    //console.log(items);
    if (!dataLoading) {
      return (
        <div>
          <h2 className="worning">Loading...</h2>
        </div>
      );
    }
    return (
      <div>
        {items.map((item) => (
          
          <div className="main" key={item.id}>
            <div className="img">
              <img
                src="https://media.istockphoto.com/photos/blank-covid19-coronavirus-test-picture-id1273212845?b=1&k=20&m=1273212845&s=170667a&w=0&h=NknC3_vGoT1vWu8pCaV1bNj8PramNLOIeGNeu-YTbx8="
                alt="Loading..."
              />
            </div>
            <div className="content">
              <p className="descrption">{item.description}</p>
              <button className="btn">
                <a href={item.url}>learn more</a>
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
export default Home;

const Tempelate1 = () => {
  return (
    <div>
      <div className="">
        <div className="row firstTepelateRow">
          <div className="col-3">
            <div className="package">
              <img src={Virus} alt="Loading..." width="200" height="200" />
              <h6>World Health Assembly agrees to launch process to develop</h6>
            </div>
          </div>

          <div className="col-3">
            <div className="package">
              <img src={Virus} alt="Loading..." width="200" height="200" />
              <h6>World Health Assembly agrees to launch process to develop</h6>
            </div>
          </div>

          <div className="col-3">
            <div className="package">
              <img src={Virus} alt="Loading..." width="200" height="200" />
              <h6>World Health Assembly agrees to launch process to develop</h6>
            </div>
          </div>

          <div className="col-3">
            <div className="package">
              <img src={Virus} alt="Loading..." width="200" height="200" />
              <h6>World Health Assembly agrees to launch process to develop</h6>
            </div>
          </div>
        </div>
        <hr className="hr" />
      </div>
    </div>
  );
};

const Tempelate2 = () => {
  return (
    <div>
      <div className="">
        <div className="row secondTepelateRow">
          <div className="col-6">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5LaAtpScIMoW8nK0cNz712I4LQuL4pg2lvg&usqp=CAU"
              alt=""
              width="546px"
              height="170px"
            />
          </div>
          <div className="col-6">
            <div className="box1">
              <div className="row secondTempalateFirstSubRow">
                <div className="col-6">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuO0BBONeyPli_nshwKeHCoWeST7sGG43fow&usqp=CAU"
                    alt=""
                    width="275"
                    height="80"
                  />
                </div>
                <div className="col-6">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVI655S3jEHHfpsVXwUFfQt1vjL0urQKJRXA&usqp=CAU"
                    alt=""
                    width="275"
                    height="80"
                  />
                </div>
              </div>
              <div className="row secondTempalateSecondSubRow">
                <div className="col-6">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx1FysVAPu_kZyF1wv8ZMIrPgozgWtdM0Q7A&usqp=CAU"
                    alt=""
                    width="275"
                    height="80"
                  />
                </div>
                <div className="col-6">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxsU99GJbOAYYwYmlW0ZKGq5AeokWquwxAXw&usqp=CAU"
                    alt=""
                    width="275"
                    height="80"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="hr1" />
      </div>
    </div>
  );
};

const Tempelate3 = () => {
  return (
    <div>
      <div className="">
        <div className="row thirdTepelateRow">
          <div className="col-6">
            <div className="box2">
              <div className="row thirdTempalateFirstSubRow">
                <div className="col-6">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuO0BBONeyPli_nshwKeHCoWeST7sGG43fow&usqp=CAU"
                    alt=""
                    width="275"
                    height="80"
                  />
                </div>
                <div className="col-6">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVI655S3jEHHfpsVXwUFfQt1vjL0urQKJRXA&usqp=CAU"
                    alt=""
                    width="275"
                    height="80"
                  />
                </div>
              </div>
              <div className="row thirdTempalateSecondSubRow">
                <div className="col-6">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx1FysVAPu_kZyF1wv8ZMIrPgozgWtdM0Q7A&usqp=CAU"
                    alt=""
                    width="275"
                    height="80"
                  />
                </div>
                <div className="col-6">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxsU99GJbOAYYwYmlW0ZKGq5AeokWquwxAXw&usqp=CAU"
                    alt=""
                    width="275"
                    height="80"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5LaAtpScIMoW8nK0cNz712I4LQuL4pg2lvg&usqp=CAU"
              alt=""
              width="546px"
              height="170px"
            />
          </div>
        </div>
        <hr className="hr2" />
      </div>
    </div>
  );
};
