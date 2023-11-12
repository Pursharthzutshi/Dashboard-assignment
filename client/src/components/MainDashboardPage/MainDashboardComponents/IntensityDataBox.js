import React, { useState,useEffect } from "react";
import './IntensityDataBox.css';
import IntensityDataBoxIcon from "../MainDashboardComponents/images/intensity.png";
import axios from "axios";

function IntensityDataBox(){
    
    const [firstIntensityData,setFirstIntensityData] = useState([]);
    const [secondIntensityData,setSecondIntensityData] = useState([]);
    const [thirdIntensityData,setThirdIntensityData] = useState([]);
    const [fourthIntensityData,setFourthIntensityData] = useState("");

    useEffect(()=>{

        
        axios.get("http://localhost:3001/fetchLimitedChartData").then((res)=>{
            console.log(res.data);
     
            setFirstIntensityData(res.data[0].intensity);
            setSecondIntensityData(res.data[12].intensity);
            setThirdIntensityData(res.data[4].intensity);
            setFourthIntensityData(res.data[7].intensity);

            // setYear(res.data[0].end_year)
            // setDashboardApiDataset(res.data);

        })
   
    },[])
    return(
  
            
  <div id="box" className="intensity-box">
<div>
    <h3>Website Analytics</h3>
    
    <span>Total 28.5% Conversion Rate</span>
    {/* <p>intensity</p> */}
        <div className="intensity-data-div">

        <p className="intensity-data-value">{firstIntensityData}</p>
        <p className="intensity-data">intensity</p>
        
        <p className="intensity-data-value">{secondIntensityData}</p>
        <p className="intensity-data">intensity</p>

        <p className="intensity-data-value">{thirdIntensityData}</p>
        <p className="intensity-data">intensity</p>

        <p className="intensity-data-value">{fourthIntensityData}</p>
        <p className="intensity-data">intensity</p>
        </div>

        </div>

    <div>
    <img src={IntensityDataBoxIcon}/>
    </div>

        
</div>

            
    )
}

export default IntensityDataBox;