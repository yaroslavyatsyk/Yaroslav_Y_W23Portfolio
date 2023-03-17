import React from "react";
import {  UsersIcon } from "@heroicons/react/solid";
import { capstone } from "../data";

export default function Capstone() {
  return (
    <section id="capstone">
        <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Capstone Project
            <br className="hidden lg:inline-block"></br>
          </h1>
          <table className="text-center mb-20 mx-auto" >
  <thead className="text-center mb-20 mx-auto">
    <tr>
      <th>Project Name</th>
      <th>{capstone.projectName}</th>
    </tr>
    <tr>
      <th>Project Summary</th>
      <th>{capstone.projectSummary}</th>
    </tr>
    <tr>
      <th>Project Vision</th>
      <th>{capstone.projectVision}</th>
    </tr>
    <tr>
      <th>Business Requirements</th>
      <th>{capstone.businessRequirements}</th>
    </tr>
    <tr>
      <th>Project Plan</th>
      <th>{capstone.projectPlan}</th>
    </tr>
    <tr>
      <th>Requirements Analysis and Design </th>
      <th>{capstone.requirementsAnalysisAndDesign}</th>
    </tr>
    <tr>
      <th>Status Reports</th>
      <th>{capstone.statusReports}</th>
    </tr>
    <tr>
      <th>System Implementation</th>
      <th>{capstone.systemImplementation}</th>
    </tr>
    <tr>
      <th>Wireframs</th>
      <th><a href={capstone.wireFrams}>Mock Ups</a></th>
    </tr>
  </thead>
</table>

          



          </div>
        
      </div>
    </section>
  );
}
