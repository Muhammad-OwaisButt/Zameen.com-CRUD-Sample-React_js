// import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useParams , useNavigate , useLocation} from 'react-router-dom'
import { useFormik } from "formik";

const Updateproperty = () => {
  const params = useParams();
  // console.log( 'params is ', params)
  const location = useLocation();
  const { state } = location;
  // console.log('location is', location)
  
  const navigate = useNavigate();
  
  const [myObject, setObject] = useState('');
  

  const formik = useFormik({
    initialValues: {
      name: state.name,
      desc: state.desc,
      address: state.address,
      price: state.price,
      contact: state.contact,
      email: state.email,
      category: state.category,
      district: state.district,
      type: state.type,
      city: state.city,
      marla: state.marla,
    },
    onSubmit: async (values) => {
      let result = await fetch(`http://localhost:5000/updateproperty/${params.id}`,{
      method: 'Put',
      body: JSON.stringify(values, null, 2),
      headers: {
        'Content-Type' : 'application/json'
      }
    });
    result = await result.json();
      setObject(result);
      console.log('My object is', myObject)
    console.log(result);
    
    if(result)
    {
      navigate('/properties');
      alert('data is added to db');
    }else{
      
      alert('data is added not to db');
    }
    },
  });

  
  return (
    <>
        <h1 className='container mt-3 mb-3'>Update "Properties" of your "Property" !..</h1>
        <div className='container'>

        <Form onSubmit ={formik.handleSubmit}>

        <div className="form-row row">
        <Form.Group className="mb-3 col-md-6" >
            <Form.Label>Property Name</Form.Label>
            <Form.Control   value={formik.values.name} type="text" name="name"  onChange={formik.handleChange} placeholder="Enter Full Name..." />
            {/* <Form.Control value={formData.name} name="name" type="text" onChange={changeHandler} placeholder="Enter Full Name..." /> */}
        </Form.Group>
        <Form.Group className="mb-3 col-md-6" >
            <Form.Label>Property Address</Form.Label>
            <Form.Control value={formik.values.address} type="text" name="address" onChange={formik.handleChange} placeholder="Enter Full Address..." />
            {/* <Form.Control value={formData.address} type="text" name="address" onChange={changeHandler} placeholder="Enter Full Address..." /> */}
        </Form.Group>
        </div>

        <div className="form-row row">
        <Form.Group className="mb-3 col-md-3" >
            <Form.Label>Contact No.</Form.Label>
            <Form.Control value={formik.values.contact} type="text" name="contact" onChange={formik.handleChange}placeholder="Enter Full Name..." />
            {/* <Form.Control value={formData.contact} type="text" name="contact" onChange={changeHandler} placeholder="Enter Full Name..." /> */}
        </Form.Group>
        <Form.Group className="mb-3 col-md-3" >
            <Form.Label>Em@il</Form.Label>
            <Form.Control value={formik.values.email} type="email" name="email" onChange={formik.handleChange} placeholder="Enter Full Address..." />
            {/* <Form.Control value={formData.email} type="email" name="email" onChange={changeHandler} placeholder="Enter Full Address..." /> */}
        </Form.Group>

        <Form.Group className="mb-3 col-md-3" >
            <Form.Label>City</Form.Label>
            <Form.Select name="city" value={formik.values.city} onChange={formik.handleChange}>
            {/* <Form.Select defaultValue="Choose City..." value={formData.city} name="city" type="text" onChange={changeHandler}> */}
            <option value=''>Choose City...</option>
            <option value='Islamabad'>Islamabad</option>
            <option value='Lahore'>Lahore</option>
            <option value='Karachi'>Karachi</option>
            <option value='Faisalabad'>Faisalabad</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3 col-md-3" >
            <Form.Label>District</Form.Label>
            <Form.Select name="district" value={formik.values.district} onChange={formik.handleChange}>
            {/* <Form.Select defaultValue="Choose District..." value={formData.district} name="district" type="text" onChange={changeHandler}> */}
            <option value=''>Choose District...</option>
            <option value='Punjab'>Punjab</option>
            <option value='Sindh'>Sindh</option>
            <option value='Balochistan'>Balochistan</option>
          </Form.Select>
        </Form.Group>
        </div>

        <div className="form-row row">
        <Form.Group className="mb-3 col-md-3" >
            <Form.Label>Price</Form.Label>
            <Form.Control value={formik.values.price} type="text" name="price" onChange={formik.handleChange} placeholder="Price of your property..." />
            {/* <Form.Control value={formData.price} type="text" name="price" onChange={changeHandler} placeholder="Price of your property..." /> */}
        </Form.Group>
        <Form.Group className="mb-3 col-md-3" >
            <Form.Label>Marla</Form.Label>
            <Form.Control value={formik.values.marla} type="text" name="marla" onChange={formik.handleChange} placeholder="Marla..." />
            {/* <Form.Control value={formData.marla} type="text" name="marla" onChange={changeHandler} placeholder="Marla..." /> */}
        </Form.Group>

        <Form.Group className="mb-3 col-md-3" >
            <Form.Label>Category</Form.Label>
            <Form.Select name="category"  value={formik.values.category} onChange={formik.handleChange}>
            {/* <Form.Select defaultValue="Choose Category..." name="category"  value={formData.category} type="text" onChange={changeHandler}> */}
            <option value=''>Choose Category...</option>
            <option value='Sell'>Sell</option>
            <option value='Rent'>Rent</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3 col-md-3" >
            <Form.Label>Property Type</Form.Label>
            <Form.Select value={formik.values.type} name="type" onChange={formik.handleChange}>
            {/* <Form.Select defaultValue="Choose Property Type..." name="type1" value={formData.type1} type="text" onChange={changeHandler}> */}
            <option value=''>Choose Property Type...</option>
            <option value='Plot'>Plot</option>
            <option value='House'>House</option>
            <option value='Flat'>Flat</option>
            <option value='Office'>Office</option>
            <option value='Shop'>Shop</option>
            <option value='Farm House'>Farm House</option>
            <option value='Restaurant'>Restaurant</option>
            <option value='Shopping Mall'>Shopping Mall</option>
            <option value='Fields'>Fields</option>
          </Form.Select>
        </Form.Group> 
        </div>

        <div className="form-row row">
        <Form.Group className="mb-3 col-md-6" controlId="formBasicPassword">
            <Form.Label>Details of Property</Form.Label>
            <Form.Control as="textarea" rows={4} value={formik.values.desc} name="desc" onChange={formik.handleChange} placeholder="Describe your property details..."/>
        </Form.Group>

        {/* <Form.Group className="mb-3 col-md-6" controlId="formBasicPassword">
            <Form.Label>Upload Image</Form.Label>
            <Form.Control name='photo' value={file} type="file" onChange={(e) => {setFile(e.target.files[0])}} placeholder="Image only...!" />
        </Form.Group> */}
        </div>
        <Button title="Add Property Live" variant="warning" type="submit" >
            Update Property
        </Button>
        </Form>
        </div>
    </>
  )
}

export default Updateproperty;