import React, { useEffect, useState } from "react";
import '../MainDashboardComponents/Likelihood.css';
import { FaRegCaretSquareDown } from 'react-icons/fa';
import axios from "axios";
import {  Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import curveImage from "../MainDashboardComponents/images/magicpattern-svg-chart-1696849276922.png"

function Likelihood({likelihoodCurveImageClass}){
    
    const [test,setTest] = useState(false);

    const [likelihoodData,setlikelihoodData] = useState([]);
    const [likelihoodEndData,setlikelihoodEndData] = useState([]);


    const [firstsector,setFirstsector] = useState([]);
    const [secondSector,setSeocndsector] = useState([]);

    const [chartDataset,setChartDataset] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:3001/fetchLimitedChartData").then((res)=>{
            setChartDataset(res.data);
        
            setlikelihoodData(res.data[0].likelihood)
            setlikelihoodEndData(res.data[3].likelihood)
        
            setFirstsector(res.data[0].sector)
            setSeocndsector(res.data[1].sector)

        })
   
    },[chartDataset])



    
    const regionData = 
 [   
 
    {
        labels:chartDataset.map((val)=>{
                return val.source 
        }),
datasets:[
{  
    data:chartDataset.map((val)=>{
    return val.start_year 
}),
    label:"start year and source",
backgroundColor:[
    "rgba(128, 0, 128, 0.474)",
    "rgba(250, 71, 232, 0.619)",

],
borderColor:"purple",
borderWidth:2,



},           
],

},
   {
        labels:[20,10,30],
        datasets:[
            {
                data:[10,10,20,40,50],
            backgroundColor:[
                "#2dc872",
                "#2dc872",
 
            ],
            borderColor:"#2dc872",
            borderWidth:2,
            label:"Country and End year",

            },           
    ],
    
}
]

    const showDropDown=()=>{
        setTest(!test)
        console.log("Yo");
    }

    return(
  <div className="likelihood-box-container">
  <div id="box" className="likelihood-box">

<div className="boxes-heading-icon-top-row">
    
    <div className="">
    <h3>likelihood</h3>
        <p>Trends</p>
        </div>

        </div>

        <div className="likelihood-image-trends-heading-div">


            <img className={likelihoodCurveImageClass?"curve-image":"curve-image-without-sidebar"} src={curveImage}/>

            <div className="likelihood-trends-value-div">

            <h3 className="likelihood-trends-value">{likelihoodData}k</h3>        
            <span>+16.2%</span>

            </div>
     </div>
      
</div>

<div id="box" className="likelihood-box">

<div className="boxes-heading-icon-top-row">
    
    <div className="">
    <h3>likelihood</h3>
        <p>Trends</p>
        </div>

        

        </div>



        <div className="likelihood-image-trends-heading-div">


            <img className={likelihoodCurveImageClass? "curve-image":"curve-image-without-sidebar"} src={curveImage}/>
            <div className="likelihood-trends-value-div">

<h3 className="likelihood-trends-value">{likelihoodEndData}k</h3>        
<span>+16.2%</span>

</div>

     </div>
      
</div>

<div id="box" className="likelihood-box">

<div className="likelihood-top-icon-div">
        <FaRegCaretSquareDown  onClick={showDropDown} className="likelihood-top-icon-buttons"/>
</div>

<div className="boxes-heading-icon-top-row">
    
    <div className="">
        <h3>{firstsector}</h3>
        <p className="trends">sector</p>
        </div>

        </div>

<div>
            
        <p className="price">$4,673</p>
        </div>   

        <div className="profit">+25.2%</div>
</div>


<div id="box" className="likelihood-box">

<div className="likelihood-top-icon-div">
        <FaRegCaretSquareDown  onClick={showDropDown} className="likelihood-top-icon-buttons"/>
</div>

<div className="boxes-heading-icon-top-row">
    
    <div className="">
        <h3>{secondSector}</h3>
        <p className="trends">sector</p>
        </div>

        </div>

<div>
            
        <p className="price">$4,673</p>
        </div>   

        <div className="profit">+25.2%</div>
</div>



<div id="box" className="start-year-source-box">

<div className="">
<div className="boxes-heading-icon-top-row">
    
    <div className="start-year-source-box-row">
       
       <div>
        <h3 className="start-year-heading">Start Year</h3>
        <p className="source">Source</p>
        
        </div>
        
        <div className="start-year-source-line-chart-div">
        <Line className="start-year-source-line-chart" data ={regionData[0]}/>
{/* 
        <p className="price">$4,673</p>
        <div className="profit">+25.2%</div> */}

                </div>

        </div>

        

        </div>


</div>

      
</div>
</div>
    )
}

export default Likelihood;