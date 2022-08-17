import React from "react";
import "../../resources/templates.css";
function Template1() {
  const user = JSON.parse(localStorage.getItem("Resume-app"));
  return (
    <div className="template-parent">
      <div className="top d-flex justify-content-between">
        <h1>
          {user.firstname.toUpperCase()} {user.lastname.toUpperCase()}
        </h1>
        <div>
          <div className="d-flex">
          <label>Email : </label>
          <p  style={{marginLeft:"5px"}}> {user.email}</p>
          </div>
          <div className="d-flex">
          <label>Address : </label>
          <p  style={{marginLeft:"5px"}}> {user.address}</p>
          </div>
          <div className="d-flex">
          <label>Mobile Number : </label>
          <p style={{marginLeft:"5px"}}> {user.mobile}</p>
          </div>
        </div>
      </div>
      <div className="divider mt-3">
      </div>
      <div className="objective mt-5">
       <h3 ><b>Objective</b></h3>
       <hr/>
       <p>{user.carrier}</p>
      </div>
      <div className="education mt-5">
      <h3 ><b>Education</b></h3>
       <hr/>
       {user.education.map((edu)=>{
        return <div className="d-flex">
          <h6 ><b>{edu.range}  :</b></h6>
          <p ><b>{edu.qualification}</b> with <b>{edu.percentage}</b>% from {edu.institution}</p>
        </div>
       })}
      </div>
      <div className="experience mt-5">
      <h3 ><b>Experience</b></h3>
       <hr/>
       {user.experience.map((exp)=>{
        return <div className="d-flex">
          <h6 ><b>{exp.range}  :  </b></h6>
          <p className="mx-3" ><b>{exp.company}</b> in <b>{exp.place}</b> with <b>{exp.years}</b> of experience</p>
        </div>
       })}
      </div>
      <div className="projects mt-5">
      <h3 ><b>Projects</b></h3>
       <hr/>
       {user.projects.map((pro)=>{
        return <div className="d-flex  flex-column">
          {/* <h6 ><b>{pro.range}  :</b></h6> */}
          <div className="d-flex">
          <h6 ><b>{pro.title}    </b></h6>
          <p><b>[{pro.range}]</b></p>
          </div>
          <p>{pro.description}</p>
          {/* <p >  <b>{exp.company}</b> in <b>{exp.place}</b> with <b>{exp.years}</b> of experience</p> */}
        </div>
       })}
      </div>
      <div className="skills mt-5">
      <h3 ><b>Skills</b></h3>
       <hr/>
       {user.skills.map((skill)=>{
        return <div className="d-flex  flex-column">
         {skill.technology} 
        </div>
       })}
      </div>
    </div>
  );
}

export default Template1;
