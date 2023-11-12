import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./leftSidebar.css"
import { PiDotOutlineThin } from "react-icons/pi";
import {TbCommand} from "react-icons/tb"
import {GoSidebarCollapse,GoSidebarExpand} from "react-icons/go"

import {LiaFileInvoiceDollarSolid} from "react-icons/lia"
import {FiUsers} from "react-icons/fi"
import {BsCalendarCheck} from "react-icons/bs"
import {BsChat} from "react-icons/bs"
import {AiOutlineMail} from "react-icons/ai"
import {RiHome6Line} from "react-icons/ri"

function LeftSidebar({homePageClass,setHomePageClass,likelihoodCurveImageClass,setLikelihoodCurveImageClass}){

    const [leftSidebarAnimtaion,setLeftSidebarAnimation] = useState(true);
    const [leftSidebarButtonAnimtaion,setLeftSidebarButtonAnimtaion] = useState(true);


    const sidebarAnimation =()=>{
        console.log(!likelihoodCurveImageClass);
        setHomePageClass(!homePageClass)
        setLeftSidebarAnimation(!leftSidebarAnimtaion);
        setLeftSidebarButtonAnimtaion(!leftSidebarButtonAnimtaion);
     setLikelihoodCurveImageClass(!likelihoodCurveImageClass)
       }

    return(
        <div className="left-sidebar">
<GoSidebarExpand id="left-sidebar-icon" onClick={sidebarAnimation} className={leftSidebarButtonAnimtaion ? "left-sidebar-toggle-button-prev":"left-sidebar-toggle-button-after"}/>
{/* 
{
leftSidebarAnimtaion ?
:
<GoSidebarCollapse id="left-sidebar-icon" onClick={sidebarAnimation} className={leftSidebarButtonAnimtaion ? "left-sidebar-button":"left-sidebar-button-after-toggle"}/>


} */}
{/*             
            <button  >sidebar</button>  */}

            <div className={leftSidebarAnimtaion ? "left-sidebar-div":"left-sidebar-div-after-toggle"}>
            
            <div className="left-sidebar-top-heading-icon-row">
         
            <div className="left-sidebar-top-heading-icon-div">
         
            <TbCommand className="left-sidebar-top-logo-icon"/>
            <h3 className="left-sidebar-top-heading">Vuexy</h3>
            </div>

            <div className="left-sidebar-top-dot-icon-div">
            <PiDotOutlineThin className="left-sidebar-top-dot-icon"/>
            </div>

            </div>
            <div className="dashboard-heading-div">

                
            <RiHome6Line className="dashboard-heading-div-icon"/>                
                <h4 className="left-sidebar-categories-heading">Dashboards</h4>
            </div>

            <Link className="left-sidebar-links" to ="/h">
            
            <div className="left-sidebar-icon-text-row">            
            <PiDotOutlineThin className="left-sidebar-dashboard-dot-icon"/>
            <p className="left-sidebar-text">Home</p>    
            </div>

            </Link>

            <Link className="left-sidebar-links" to ="/h">
            
            <div className="left-sidebar-icon-text-row">            
            <PiDotOutlineThin className="left-sidebar-dashboard-dot-icon"/>
            <p className="left-sidebar-text">Home</p>    
            </div>

            </Link>
            
            <p className="left-sidebar-categories-heading">APPS AND PAGES</p>

            <Link className="left-sidebar-links" to ="/h">
            
            <div className="left-sidebar-icon-text-row">            
            <AiOutlineMail className="apps-and-pages-icons"/>
            <p className="left-sidebar-text">Home</p>    
            </div>

            </Link>
            
            <Link className="left-sidebar-links" to ="/h">
            
            <div className="left-sidebar-icon-text-row">            
            <BsChat className="apps-and-pages-icons"/>
            <p className="left-sidebar-text">Home</p>    
            </div>

            </Link>
            <Link className="left-sidebar-links" to ="/h">
            
            <div className="left-sidebar-icon-text-row">            
            <BsCalendarCheck className="apps-and-pages-icons"/>
            <p className="left-sidebar-text">Home</p>    
            </div>

            </Link>
            <Link className="left-sidebar-links" to ="/h">
            
            <div className="left-sidebar-icon-text-row">            
            <LiaFileInvoiceDollarSolid className="apps-and-pages-icons"/>
            <p className="left-sidebar-text">Home</p>    
            </div>

            <div className="left-sidebar-icon-text-row">            
            <FiUsers className="apps-and-pages-icons"/>
            <p className="left-sidebar-text">Home</p>    
            </div>

            </Link>



            <Link className="left-sidebar-links" to ="/h">
            
            <div className="left-sidebar-icon-text-row">            
            <AiOutlineMail className="apps-and-pages-icons"/>
            <p className="left-sidebar-text">Home</p>    
            </div>

            </Link>
            
            <Link className="left-sidebar-links" to ="/h">
            
            <div className="left-sidebar-icon-text-row">            
            <BsChat className="apps-and-pages-icons"/>
            <p className="left-sidebar-text">Home</p>    
            </div>

            </Link>
            <Link className="left-sidebar-links" to ="/h">
            
            <div className="left-sidebar-icon-text-row">            
            <BsCalendarCheck className="apps-and-pages-icons"/>
            <p className="left-sidebar-text">Home</p>    
            </div>

            </Link>
            <Link className="left-sidebar-links" to ="/h">
            
            <div className="left-sidebar-icon-text-row">            
            <LiaFileInvoiceDollarSolid className="apps-and-pages-icons"/>
            <p className="left-sidebar-text">Home</p>    
            </div>

            <div className="left-sidebar-icon-text-row">            
            <FiUsers className="apps-and-pages-icons"/>
            <p className="left-sidebar-text">Home</p>    
            </div>

            </Link>


            <Link className="left-sidebar-links" to ="/h">
            
            <div className="left-sidebar-icon-text-row">            
            <AiOutlineMail className="apps-and-pages-icons"/>
            <p className="left-sidebar-text">Home</p>    
            </div>

            </Link>
            
            <Link className="left-sidebar-links" to ="/h">
            
            <div className="left-sidebar-icon-text-row">            
            <BsChat className="apps-and-pages-icons"/>
            <p className="left-sidebar-text">Home</p>    
            </div>

            </Link>
            <Link className="left-sidebar-links" to ="/h">
            
            <div className="left-sidebar-icon-text-row">            
            <BsCalendarCheck className="apps-and-pages-icons"/>
            <p className="left-sidebar-text">Home</p>    
            </div>

            </Link>
            <Link className="left-sidebar-links" to ="/h">
            
            <div className="left-sidebar-icon-text-row">            
            <LiaFileInvoiceDollarSolid className="apps-and-pages-icons"/>
            <p className="left-sidebar-text">Home</p>    
            </div>

            <div className="left-sidebar-icon-text-row">            
            <FiUsers className="apps-and-pages-icons"/>
            <p className="left-sidebar-text">Home</p>    
            </div>

            </Link>


</div>

        </div>
    )
}

export default LeftSidebar;