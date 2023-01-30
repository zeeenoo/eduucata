import React, { useState, useEffect } from 'react';
import axios from 'axios';
import  Card  from '../components/Card';



function AnnouncesList() {
    const [announces, setAnnounces] = useState([]);
  
    useEffect(() => {
      axios.get('/api/annonces/')
        .then(res => setAnnounces(res.data))
        .catch(err => console.log(err));
    }, []);
    console.log(announces)

    return (
      <div>
        {announces.map(announce => (
          <Card key={announce._id} data={announce} />
        ))}
      </div>
    )

    
}  

export default AnnouncesList
