import React from "react";
import {  UsersIcon } from "@heroicons/react/solid";
import { capstone } from "../data";

export default function Capstone() {
  return (
    <section id="capstone">
        <div className="container px-5 py-5 mx-auto">
        <div className="text-center mb-10">
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-5">
            Capstone Project
            <br className="hidden lg:inline-block"></br>
          </h1>
          <table className="text-center mb-20 mx-auto" style={{border: '1px solid white'}}>
  <thead className="text-center mb-20 mx-auto" style={{border: '1px solid white'}}>
    <tr style={{border: '1px solid white'}}>
      <th style={{border: '1px solid white'}}>Project Name</th>
      <th style={{border: '1px solid white'}}>{capstone.projectName}</th>
    </tr>
    <tr style={{border: '1px solid white'}}>
      <th style={{border: '1px solid white'}}>Project Summary</th>
      <th style={{border: '1px solid white'}}>{capstone.projectSummary}</th>
    </tr>
    <tr style={{border: '1px solid white'}}>
      <th style={{border: '1px solid white'}}>Project Vision</th>
      <th style={{border: '1px solid white'}}>{capstone.projectVision}</th>
    </tr>
    <tr style={{border: '1px solid white'}}>
      <th style={{border: '1px solid white'}}>Business Requirements</th>
      <th style={{border: '1px solid white'}}>{capstone.businessRequirements}</th>
    </tr>
    <tr style={{border: '1px solid white'}}>
      <th style={{border: '1px solid white'}}>Project Plan</th>
      <th style={{border: '1px solid white'}}>{capstone.projectPlan}</th>
    </tr>
    <tr style={{border: '1px solid white'}}>
      <th style={{border: '1px solid white'}}>Requirements Analysis and Design </th>
      <th style={{border: '1px solid white'}}>{capstone.requirementsAnalysisAndDesign}</th>
    </tr>
    <tr style={{border: '1px solid white'}}>
      <th style={{border: '1px solid white'}}>Status Reports</th>
      <th style={{border: '1px solid white'}}>{capstone.statusReports}</th>
    </tr>
    <tr style={{border: '1px solid white'}}>
      <th style={{border: '1px solid white'}}>System Implementation</th>
      <th style={{border: '1px solid white'}}>{capstone.systemImplementation}</th>
    </tr>
    <tr style={{border: '1px solid white'}}>
      <th style={{border: '1px solid white'}}>Wireframes</th>
      <th style={{border: '1px solid white'}}><ul>
        <li><img src="/Client Park Info.png"></img></li>
        <li><img src="/Main Page Park List.png"></img></li>
        <li><img src="/Client View Booking Details.png"/></li>
        <li><img src="/Client Send Request for Park Website.png"/></li>
        <li><img src="/Home Page.png"/></li>
        </ul></th>
    </tr>
  </thead>
</table>

          



          </div>
        
      </div>
    </section>
  );
}
