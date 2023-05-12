import React from "react";
import {  UsersIcon } from "@heroicons/react/solid";
import { capstone } from "../data";

export default function Capstone() {
  return (
    <section id="capstone">
        <div className="container px-5 py-5 mx-auto">
        <div className="text-center mb-5">
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-5">
            Capstone Project
            <br className="hidden lg:inline-block"></br>
          </h1>
        <ul className="text-center mb-5">
          <li><strong>Project Name</strong></li>
          <li>{capstone.projectName}</li>
          <br/>
          <li><strong>Project Summary</strong></li>
          <li>{capstone.projectSummary}</li>
          <br/>
          <li><strong>Project Plan</strong></li>
          <li>{capstone.projectPlan}</li>
          <br/>
          <li><strong>Business Requirements</strong></li>
          <li>{capstone.businessRequirements}</li>
          <br/>
          <li><strong>Project Vision</strong></li>
          <li>{capstone.projectVision}</li>
          <br/>
          <li><strong>Status Reports</strong></li>
          <li>{capstone.statusReports}</li>
          <br/>
          <li><strong>Design & Analysis Requirements</strong></li>
          <li>{capstone.requirementsAnalysisAndDesign}</li>
          <br/>
          <li><strong>System Implementation</strong></li>
          <li>{capstone.statusReports}</li>
          <br/>
          <ul className="text-center mb-5"> <strong>WireFrames</strong>
            <br/>
            <br/>
        <li><img src="/Client Park Info.png" style={{height: '50%', width: '50%'}}></img></li>
        <li><img src="/Main Page Park List.png" style={{height: '50%',width: '50%'}}></img></li>
        <li><img src="/Client View Booking Details.png" style={{height: '50%',width: '50%'}}/></li>
        <li><img src="/Client Send Request for Park Website.png" style={{height: '50%',width: '50%'}}/></li>
        <li><img src="/Home Page.png" style={{height: '50%',width: '50%'}}/></li>
        </ul>
        </ul>

          



          </div>
        
      </div>
    </section>
  );
}
