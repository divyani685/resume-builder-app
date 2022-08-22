import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

import { useParams,useNavigate } from "react-router-dom";
import DefaultLayout from "../../components/DefaultLayout";
import Template1 from "./Template1";
import Template2 from "./Template2"
import { Button } from 'antd';
// import "../../index.css"
function Templates() {
  const navigate=useNavigate()
  const router = useParams();
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  const gettemplate = () => {
    // eslint-disable-next-line
    switch (router.id) {
      case "1":
        {
          return <Template1 />;
        }
        case "2":
          {
            return <Template2/>;
          }
    }
  };
  return (
      <DefaultLayout >   
      <div className="d-flex justify-content-end my-5 mx-5">
      <Button className='back-btn' onClick={()=>{navigate('/home')}}>Back</Button>
      <Button className="mx-5" onClick={handlePrint }>Download</Button>
      </div>
      <div ref={componentRef }>{gettemplate()}</div>
      </DefaultLayout>
 
  );
}

export default Templates;
