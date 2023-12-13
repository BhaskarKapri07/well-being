import React from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios"
import "./ConditionDetailPage.css"
import banner from  "../../assets/images/banner.jpg"

function ConditionDetailPage() {
  const { conditionId } = useParams();

  const [resourceData,setResourceData] = React.useState([])

  React.useEffect(()=> {
    axios.get("http://localhost:3001/mockADHDData")
    .then((response) => {
      setResourceData(JSON.parse(response.data.data));
    })
    .catch((error) => {
      console.error(error);
    })
  },[])



  const resourceElements = resourceData.map(data => {
   return  <div className='single-resource-container' >
      <h1 className='resource-title'>{data.title}</h1>
      <p className='resource-body'> {data.body}</p>
      <p className='resource-source'>{data.source}</p>
      <a className="resource-url" href={data.url} target='_blank'>Article Link</a>
    </div>
  })


  return (
    <div>
      
      <img src={banner} alt="resource-banner" className='resource-banner'/>
      <div className='resources-container'>
      {resourceElements}
      </div>
    </div>
  );
}

export default ConditionDetailPage;
