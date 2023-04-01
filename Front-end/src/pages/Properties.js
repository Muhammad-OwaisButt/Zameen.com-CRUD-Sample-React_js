import React, { useEffect } from 'react'
import axios from 'axios';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { BsTrashFill } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';

const Properties = () => {

  const navigate = useNavigate();

  useEffect(() => {
    getpropertydata()
  },[]);

  const [property,setProperty] = useState([]);
  // console.log(property);

  const getpropertydata = async () => {

    const config = {
      headers:{
        "Content-Type":"application/json"
      }
    };
    const result = await axios.get("/properties",config);
    
    if(result.data.status === 401 || !result.data){
      console.log("error");
    }else{
      setProperty(result.data);
    }
  };

  // Deleting property from front and backend

  const deleteproperty = async (id) => {

    const config = {
      headers:{
        "Content-Type":"application/json"
      }
    };
    const result = await axios.delete(`/properties/${id}`,config);
    
    if(result.data.status === 401 || !result.data){
      console.log("error");
    }else{
      getpropertydata()
      // console.log("1 property deleted successfuly...");
      // alert("Property Deleted");
    }
  };
  
  // Buy property from front and backend
      
  const detailproperty = (id) => {
    // console.log(id);
  };

  // Edit property
  const editproperty = (id, data) => {
    // console.log(id);
    navigate(`/updateproperty/${id}`, { state: data})
  };


  

  return (
    <>
      <div className='container mt-5' >
        {
          property.length > 0 ? property.map((obj, ind) =>
            <Card className="card mb-3 mt-3" style={{ maxWidth: "85%" }} key={obj._id}>
              <div className="row g-5">
                <div className="col-md-5">
                  <Card.Img variant="left" src={`/uploads/${obj.imgpath}`} style={{ margin: '15px', height: "65vh", width: '100%' }} />
                </div>
                <div className="col-md-7">
                  <Card.Body>
                    <Card.Title className="text-center">{obj.name}</Card.Title>
                    <div className=" row card-body">
                      <p className="card-text">Address : {obj.address}</p>
                      <p className="card-text">Marla : {obj.marla}</p>
                      <p className="card-text">District : {obj.district}</p>
                      <p className="card-text">City : {obj.city}</p>
                      <p className="card-text">Type : {obj.type}</p>
                      <p className="card-text">Category : {obj.category}</p>
                      <p className="card-text">Ph.no : {obj.contact}</p>
                      <p className="card-text">Price : {obj.price}</p>
                      <Button onClick={() => detailproperty(obj._id)} title='Detail' className='btn btn-success col-md-3'>Detail</Button>
                      <div className="col-md-2"></div>
                      <Button onClick={() => editproperty(obj._id, obj)} title='Edit' className='btn btn-warning col-md-2'><AiFillEdit /></Button>
                      <div className="col-md-2"></div>
                      <Button onClick={() => deleteproperty(obj._id)} title='Delete' className='btn btn-danger col-md-2'><BsTrashFill /></Button>
                    </div>
                  </Card.Body>
                </div>
              </div>
            </Card>
          )
            :
            <div className='text-center mt-5'>
              <hr />
              <h1>No Result Found</h1>
              <hr />
            </div>
        }

      </div>
    </>
  )
}

export default Properties;