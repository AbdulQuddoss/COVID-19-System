import React, {useState, useEffect} from 'react'
import "../presontation/prediction.css";
import axios from 'axios';
axios.defaults.withCredentials = true;

const Prediction = (props) => {
  console.log(props.data);
  const [data, setData] = useState({});
  const [sData, setSdata] = useState("");
 
    useEffect(() => {
     // axios.get("http://localhost:3001/check")
      //.then((res) => {
     
    })

  return (
    <div className='container'>
      <div className="head">
        <h1>Prediction About <span className='name'>{data.k} {data.val}</span> Chances Of COVID-19 In Future</h1>
      </div>
      <div className="map">
       <img src="https://www.worldatlas.com/upload/c0/aa/3e/provinces-of-pakistan-map.png" alt="" width={"100%"}/>
       {/* punjab */}
       <div className="multan point" style={{margin: "460px 632px"}} onClick={() => {setData({k: "Multan", val: "17%", cond: true})}}></div>
       <div className="bahawalpur point" style={{margin: "502px 652px"}} onClick={() => {setData({k: "Bahawalpur", val: "15%", cond: true})}}></div>
       <div className="rahimyarKhan point" style={{margin: "570px 578px"}} onClick={() => {setData({k: "Rahimyar Khan", val: "12%", cond: true})}}></div>
       <div className="lahor point" style={{margin: "370px 736px"}} onClick={() => {setData({k: "Lahor", val: "20%", cond: true})}}></div>
       <div className="sargodha point" style={{margin: "335px 645px"}} onClick={() => {setData({k: "Sargodha", val: "10%", cond: true})}}></div>
       <div className="sialkot point" style={{margin: "306px 742px"}} onClick={() => {setData({k: "Sialkot", val: "9%", cond: true})}}></div>
       <div className="rawalpindi point" style={{margin: "259px 670px"}} onClick={() => {setData({k: "Rawalpindi", val: "11%", cond: true})}}></div>
       <div className="faslabad point" style={{margin: "380px 651px"}} onClick={() => {setData({k: "Faslabad", val: "13%", cond: true})}}></div>
       {/* sindh */}
       <div className="sukkur point" style={{margin: "621px 482px"}} onClick={() => {setData({k: "Sukkur", val: "8%", cond: true})}}></div>
       <div className="larkana point" style={{margin: "649px 426px"}} onClick={() => {setData({k: "Larkana", val: "7%", cond: true})}}></div>
       <div className="nawabshah point" style={{margin: "716px 463px"}} onClick={() => {setData({k: "Nawabshah", val: "7%", cond: true})}}></div>
       <div className="mirpurKhas point" style={{margin: "760px 509px"}} onClick={() => {setData({k: "MirpurKhas", val: "10%", cond: true})}}></div>
       <div className="hyderabad point" style={{margin: "785px 448px"}} onClick={() => {setData({k: "Hyderabad", val: "12%", cond: true})}}></div>
       <div className="karachi point" style={{margin: "802px 365px"}} onClick={() => {setData({k: "Karachi", val: "21%", cond: true})}}></div>
       {/* balochistan */}
       <div className="zhob point" style={{margin: "399px 491px"}} onClick={() => {setData({k: "Zhob", val: "8%", cond: true})}}></div>       
       <div className="chamman point" style={{margin: "423px 365px"}} onClick={() => {setData({k: "Chamman", val: "15%", cond: true})}}></div>      
       <div className="quetta point" style={{margin: "466px 372px"}} onClick={() => {setData({k: "Quetta", val: "11%", cond: true})}}></div>      
       <div className="deraMurad point" style={{margin: "558px 403px"}} onClick={() => {setData({k: "Dera Murad", val: "9%", cond: true})}}></div>      
       <div className="khuzdar point" style={{margin: "604px 342px"}} onClick={() => {setData({k: "Khuzdar", val: "7%", cond: true})}}></div>      
       <div className="turbat point" style={{margin: "722px 159px"}} onClick={() => {setData({k: "Turbat", val: "8%", cond: true})}}></div>      
       <div className="gawadar point" style={{margin: "762px 87px"}} onClick={() => {setData({k: "Gawadar", val: "9%", cond: true})}}></div> 
       {/* khyber pukhtunkhwa */}
       <div className="mingaora point" style={{margin: "174px 670px"}} onClick={() => {setData({k: "Mingaora", val: "7%", cond: true})}}></div>
       <div className="mardan point" style={{margin: "201px 657px"}} onClick={() => {setData({k: "Mardan", val: "16%", cond: true})}}></div>
       <div className="peshawar point" style={{margin: "225px 646px"}} onClick={() => {setData({k: "Peshawar", val: "19%", cond: true})}}></div>
       {/* islamabad */}
       <div className="islamabad point" style={{margin: "230px 737px"}} onClick={() => {setData({k: "Islamabad", val: "15%", cond: true})}}></div>
       {/* AK */}
       <div className="mozafferabad point" style={{margin: "191px 755px"}} onClick={() => {setData({k: "Mozafferabad", val: "10%", cond: true})}}></div>
       <div className="gilgit point" style={{margin: "90px 761px"}} onClick={() => {setData({k: "Gilgit", val: "9%", cond: true})}}></div>
       <div className="fata point" style={{margin: "308px 513px"}} onClick={() => {setData({k: "Fata", val: "12%", cond: true})}}></div>
       </div>
       
     </div>
  )
}

export default Prediction
