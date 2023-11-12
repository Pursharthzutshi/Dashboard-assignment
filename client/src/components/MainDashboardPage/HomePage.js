import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import IntensityDataBox from "./MainDashboardComponents/IntensityDataBox";
import Likelihood from "./MainDashboardComponents/Likelihood"
import Topics from "./MainDashboardComponents/Topics";
import Pestle from "./MainDashboardComponents/Pestle";
import "./HomePage.css"
import "../LeftSidebar/leftSidebar.css"
import RegionRelevance from "../MainDashboardPage/MainDashboardComponents/RegionRelevance";
import { FaRegQuestionCircle,FaRegCaretSquareDown } from 'react-icons/fa';
import profileImage from "../MainDashboardPage/MainDashboardComponents/images/profile-image.png"
import {BsSearch} from "react-icons/bs"
import {GoBell} from "react-icons/go"
import {CgLaptop} from "react-icons/cg"
import {HiLanguage} from "react-icons/hi2"

function HomePage({likelihoodCurveImageClass,homePageClass}) {

    const [DashboardApiDataset,setDashboardApiDataset] = useState([]);
    
    useEffect(()=>{

        
        axios.get("http://localhost:3001/fetchLimitedData").then((res)=>{
            
            setDashboardApiDataset(res.data);

        })
   
    },[])




  return (
    <div className={homePageClass?"home-page":"home-page-without-left-sidebar"}>
        

<div className="top-bar-container">
    
    <div className="search-bar-icon-div">
    <BsSearch className="search-bar-icon"/>
    <input placeholder="Search" className="search-bar" type="text"/>
    </div>
    
    <div className="top-bar-rightmost-icons-div">    
    <HiLanguage className="top-bar-rightmost-icons"/>
    <CgLaptop className="top-bar-rightmost-icons"/>
    <FaRegQuestionCircle className="top-bar-rightmost-icons"/>
    <GoBell className="top-bar-rightmost-icons"/>
    <br></br>
    <img className="profile-image" src={profileImage}/>
    </div>
</div>


<div className="home-page-middle-elements-container">

<IntensityDataBox/>

<Likelihood likelihoodCurveImageClass={likelihoodCurveImageClass}/>
<RegionRelevance DashboardApiDataset={DashboardApiDataset}/>
<Topics DashboardApiDataset={DashboardApiDataset}/>
<Pestle/>

</div>

    </div>
  );
}

export default HomePage;
