import React, { useEffect, useState } from "react";
import {FiTrendingUp,FiTrendingDown} from "react-icons/fi"
import "./Topics.css"

function Topics({DashboardApiDataset}){
    
    const [test,setTest] = useState(false);

    const [likelihoodData,setlikelihoodData] = useState([]);
    
    const [filterTopicValues,setFilterTopicValues] = useState("");

    const [showAllTopicFilter,setShowAllTopicsFilter] = useState(false);


    const FilterTopic = (e)=>{
        setFilterTopicValues(e.target.value)
    }

    return(
  

  <div id="box" className="topics-box">

<div className="">

<div className="boxes-heading-icon-top-row">
        <h4 className="topics-heading">Topics</h4>




<select className="filter-select" onChange={FilterTopic}>
{
       DashboardApiDataset.map((val,index)=>{
        return <option className="filter-options"> { index == 0 ? "Filter Topics" : val.topic }</option> 
           
    })
       }

</select>

        </div>

<div className="drop-down-div">

</div>
</div>


<div className="topics-content-text-icon-column">   
       
       {
       DashboardApiDataset.filter((val)=>{
        if(filterTopicValues == "" || filterTopicValues == "Filter Topics"){
            return val.topic
        }else if(filterTopicValues === val.topic){
            return val.topic
        }
    }).map((val)=>{
        return(
            <div className="all-topics-content-container">
            <div className="topics-div"> 
        <h4>{val.topic}</h4>
        </div>
        
<div className="topic-icon-relevance-value-row">
   
   <FiTrendingDown id="negative-relevance-value"  className="boxes-heading-icon"/>
     </div>

    </div>
        )   

    })
       }


</div>
    

</div>

    )
}

export default Topics;