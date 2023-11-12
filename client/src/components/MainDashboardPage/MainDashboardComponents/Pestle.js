import React, { useEffect, useState } from "react";
import './Pestle.css';
import axios from "axios";
import { FaRegCaretSquareDown } from "react-icons/fa";

function Pestle(){

    const [searchPestleData,setSearchPestleData] = useState("");

    const [pestleData,setPestleData] = useState([]);

        useEffect(()=>{

        axios.get("http://localhost:3001/fetchPestleData").then((res)=>{
            setPestleData(res.data);
        })
   
    },[pestleData])
    
    return(
        
        <div id="box" className="pestle-box">
            <div className="boxes-heading-icon-top-row">
        <h4>Pestle</h4>
 
<FaRegCaretSquareDown  className="boxes-heading-icon"/>

        </div>

            <input onChange={(e)=>{setSearchPestleData(e.target.value)}} type="search"/>
            {
                    pestleData.filter((val)=>{
                        if(searchPestleData === ""){
                            return val.intensity;
                        }
                        else if(val.pestle.toLowerCase().includes(searchPestleData.toLowerCase())){
                            return val.intensity;
                        }
                    }).map((val)=>{
                        return(
                            <div className="pestle-div">
                                <p>{val.pestle}</p>
                            </div>
                        )
    
                    })
            }

            
   
        </div>
        

            
    )
}

export default Pestle;