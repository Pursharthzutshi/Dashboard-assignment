import React, { useEffect, useState } from "react";
import {Bar, Line, Pie} from "react-chartjs-2"
import { Chart as ChartJS } from "chart.js/auto";
import "../MainDashboardComponents/RegionRelevance.css"
import axios from "axios";
import { PiTrainRegionalLight } from 'react-icons/pi';

function RegionRelevance(){

    const [chartDataset,setChartDataset] = useState([]);

    const [filterChartDataIndex,setFilterChartDataIndex] = useState(0);

    useEffect(()=>{
        axios.get("http://localhost:3001/fetchLimitedChartData").then((res)=>{
            setChartDataset(res.data);
        })
   
    },[chartDataset])

    const test = (e)=>{
        console.log(e.target.parentElement.value)
        if(e.target.parentElement.value === "Region"){
            setFilterChartDataIndex(0)
        }else{
            setFilterChartDataIndex(1)
        }
    }
    
 

    
    const barChartData = 
 [   
 
    {
        labels:chartDataset.map((val)=>{
        return val.region 
    }),
datasets:[
    {
        label:"region and relevance",
        data:chartDataset.map((val)=>{
            return val.relevance 
    }),
    data:chartDataset.map((val)=>{
            return val.end_year 
    }),
backgroundColor:[
    "#7464f4",
    "#7564f835",

],

options: {

scales: {
    x: {
      grid: {
        drawOnChartArea: false
      }
    },
    y: {
      
        beginAtZero: true
      
    }
  }
}
},
           
],

},
   {
        labels:chartDataset.map((val)=>{
                return val.country 
        }),
        datasets:[
            {
                data:chartDataset.map((val)=>{
                    return val.end_year 
            }),
            backgroundColor:[
                "#7464f4",
                "#7564f835",
            
            ],
            
            label:"Country and End year",

            },           
    ],
    
}
]




    return(
        <div className="bar-chart-container">
        <div id="box" className="bar-chart-div">
<div className="filter-bar-chart-buttons-boxes-container">


<button value="Region" className="button" onClick={test}>
     <div className="filter-bar-chart-buttons-boxes" >
       <PiTrainRegionalLight onClick={test} value="Region" className="filter-bar-chart-buttons" />
                <p>Region</p>
          
            </div>
            </button>
            
            
            <button value="Country" className="button"  onClick={test}>
            <div className="filter-bar-chart-buttons-boxes">
            <PiTrainRegionalLight className="filter-bar-chart-buttons" />
            <p>Country</p>
            
            </div>
            </button>

</div>
            <Bar data={barChartData[filterChartDataIndex]} className="bar-chart" />
        
        </div>
        </div>
    )
}

export default RegionRelevance;