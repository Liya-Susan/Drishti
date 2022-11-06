import React, { useEffect, useState } from 'react'
import axios from 'axios'
import RequestCard from './RequestCard';
import './Requestscreen.css'
function Requestscreen() {
    const [requests,setRequests]=useState();
    const sendRequest = async () => {
        const res = await axios
          .get("http://localhost:8080/api/request/")
          .catch((err) => console.log(err));
          const data = await res.data;
          return data
    };
    useEffect(() => {
    
        sendRequest().then((data) => setRequests(data.requests));
      }, []);
  return (
    <>

    <h1 style={{color:'white',padding:'5%'}}>All Requests</h1>
    <div className='applycss' style={{marginLeft:'38%'}}>
    <div className='flex-container'>
     
     {requests &&
        requests.map((request, index) => (
         <div className='flex-container-div'>
          
            <RequestCard
          key={request._id}
          id={request._id}
          faculty={request.faculty}
          location={request.location}
          grade={request.grade}
          alert={request.alert}
          details={request.details}
          />
         </div> 
          
          
        ))}
    </div>
    </div>
      
    </>
    
  )
}

export default Requestscreen
