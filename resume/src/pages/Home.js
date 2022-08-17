import React from "react";
import { useNavigate } from "react-router-dom";
import DefaultLayout from "../components/DefaultLayout";
import Template1image from "../resources/templates/template1.jpg"
import Template2image from "../resources/templates/template2.jpg"
function Home() {
  const navigate=useNavigate()
  const templates = [
   { title: "Simple Resume",
   image:Template1image},
   { title: "Highlighted Resume",
   image:Template2image}
  ];
  return (
    <DefaultLayout>
      {/* <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h3><b>Process to Download your Resume</b></h3>
          </div>
          <div className="col-md-8">
               <div className="d-flex">
                <h5>1st Step : </h5>
                <p></p>
               </div>
          </div>
        </div>
      </div> */}
     <div className="row home">
      {templates.map((template,index)=>{
        return  <div className="col-md-4 ">
         <div className="template">
         <img src={template.image} height="400" width="100%" alt="image not found"/>
          <div className="text">
          <p>{template.title}</p>
          <button onClick={()=>{
            navigate(`/templates/${index+1}`)
          }}>Try</button>
          </div>
         </div>
        </div>
      })}
     </div>
    </DefaultLayout>
  );
}

export default Home;
