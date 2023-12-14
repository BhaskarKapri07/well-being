import React from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios"
import "./ConditionDetailPage.css"
import adhdBanner from  "../../assets/images/adhd-banner.jpg"
import depressionBanner from  "../../assets/images/depression-banner.jpg"
import anxietyBanner from  "../../assets/images/anxiety-banner.jpg"
import bipolarBanner from  "../../assets/images/bipolar-banner.jpg"
import autismBanner from  "../../assets/images/autism-banner.jpg"
import schizophreniaBanner from  "../../assets/images/schizophrenia-banner.avif"
import ptsdBanner from  "../../assets/images/ptsd-banner.jpg"
import addictionBanner from  "../../assets/images/addiction-banner.jpg"
import ocdBanner from  "../../assets/images/ocd-banner.jpg"

function ConditionDetailPage() {
  const { conditionId } = useParams();

  const [resourceData,setResourceData] = React.useState([])

  const getImage = conditionId => {
    switch (conditionId) {
      case "ADHD":
        return adhdBanner;
      case "Anxiety Disorders":
        return anxietyBanner;
      case "Depression":
        return depressionBanner;
      case "Bipolar":
        return bipolarBanner;
      case "Schizophrenia":
        return schizophreniaBanner;
      case "Autism":
        return autismBanner;
      case "Addiction":
          return addictionBanner ;
      case "OCD":
        return ocdBanner;
      case "PTSD":
        return ptsdBanner;
      default:
        return adhdBanner; // Handle unknown conditions
    }
  };

  React.useEffect(()=> {

    const requestOptions = {
      method: 'post',
      url: `https://well-being.onrender.com/getResources`,
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        resourceId : conditionId
      }
    };  

    axios(requestOptions)
      .then(response => {
        console.log(response)
        setResourceData(response.data.data)
      })
      .catch(error => console.error(error));
    
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
      <div className='resource-banner-container'>
      <div class="centered">{conditionId}</div>
      <img src={getImage(conditionId)} alt="resource-banner" className='resource-banner'/>
      </div>
      <div className='resources-container'>
      {resourceElements}
      </div>
    </div>
  );
}

export default ConditionDetailPage;
