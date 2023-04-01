import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

const Addproperty = () => {

  const navigate = useNavigate();

  // Name
  const [name , setName] = useState('');
  //Description 
  const [desc , setDesc] = useState('');
  // Address
  const [address , setAddress] = useState('');
  // Price
  const [price , setPrice] = useState('');
  // Contact
  const [contact , setContact] = useState('');
  // Email
  const [email , setEmail] = useState('');
  // Category
  const [category , setCategory] = useState('');
  // Type
  const [type , setType] = useState('');
  // City
  const [city , setCity] = useState('');
  // District
  const [district , setDistrict] = useState('');
  // Marla
  const [marla , setMarla] = useState('');
  // Image Upload 
  const [file,setFile] = useState("");


  const Addproperty = async (event) => {

    event.preventDefault()

    const formData = new FormData();
    formData.append("desc",desc);
    formData.append("type",type);
    formData.append("city",city);
    formData.append("name",name);
    formData.append("photo",file);
    formData.append("price",price);
    formData.append("email",email);
    formData.append("marla",marla);
    formData.append("address",address);
    formData.append("contact",contact);
    formData.append("category",category);
    formData.append("district",district);

    // console.log(name,address,city,district,price,email,contact,category,marla,file,type,desc)

    const config = {
      headers:{
        "Content-Type":"multipart/form-data"
      }
    };
    if(!name || !address || !city || !district || !price || !email || !contact || !category || !marla || !type || !desc || !file){
      console.log("error");
      alert("Please fill all form data...!");
    }else{

      const result = await axios.post("/addproperty",formData,config);
      
      if(result.data.status === 401 || !result.data){
        console.log("error");
        alert("Your Property Not Added Successfuly...!");
      }else{
        alert("Your Property Added Successfuly...!");
        navigate("/properties");
      }
    }
    // console.log(result);
    
  }

  return (
    <>
        <h1 className='container mt-3 mb-3'>Add "Properties" of your "Property" !..</h1>
        <div className='container'>
        <Form>

        <div className="form-row row">
        <Form.Group className="mb-3 col-md-6" >
            <Form.Label>Property Name</Form.Label>
            <Form.Control  name='name' type="text" onChange={(e) => {setName(e.target.value)}} placeholder="Enter Full Name..." />
        </Form.Group>
        <Form.Group className="mb-3 col-md-6" >
            <Form.Label>Property Address</Form.Label>
            <Form.Control  name='address' type="text" onChange={(e) => {setAddress(e.target.value)}} placeholder="Enter Full Address..." />
        </Form.Group>
        </div>

        <div className="form-row row">
        <Form.Group className="mb-3 col-md-3" >
            <Form.Label>Contact No.</Form.Label>
            <Form.Control  name='contact' type="text" onChange={(e) => {setContact(e.target.value)}} placeholder="Enter Full Name..." />
        </Form.Group>
        <Form.Group className="mb-3 col-md-3" >
            <Form.Label>Em@il</Form.Label>
            <Form.Control  name='email' type="email" onChange={(e) => {setEmail(e.target.value)}} placeholder="Enter Full Address..." />
        </Form.Group>

        <Form.Group className="mb-3 col-md-3" >
            <Form.Label>City</Form.Label>
            <Form.Select defaultValue="Choose City..."   name='city' type="text" onChange={(e) => {setCity(e.target.value)}}>
            <option value=''>Choose City...</option>
            <option value='Islamabad'>Islamabad</option>
            <option value='Lahore'>Lahore</option>
            <option value='Karachi'>Karachi</option>
            <option value='Faisalabad'>Faisalabad</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3 col-md-3" >
            <Form.Label>District</Form.Label>
            <Form.Select defaultValue="Choose District..."  name='district' type="text" onChange={(e) => {setDistrict(e.target.value)}}>
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
            <Form.Control  name='price' type="text" onChange={(e) => {setPrice(e.target.value)}} placeholder="Price of your property..." />
        </Form.Group>
        <Form.Group className="mb-3 col-md-3" >
            <Form.Label>Marla</Form.Label>
            <Form.Control  name='marla' type="text" onChange={(e) => {setMarla(e.target.value)}} placeholder="Marla..." />
        </Form.Group>

        <Form.Group className="mb-3 col-md-3" >
            <Form.Label>Category</Form.Label>
            <Form.Select defaultValue="Choose Category..."   name='category' type="text" onChange={(e) => {setCategory(e.target.value)}}>
            <option value=''>Choose Category...</option>
            <option value='Sell'>Sell</option>
            <option value='Rent'>Rent</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3 col-md-3" >
            <Form.Label>Property Type</Form.Label>
            <Form.Select defaultValue="Choose Property Type..."  name='type' type="text" onChange={(e) => {setType(e.target.value)}}>
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
            <Form.Control as="textarea" rows={4}  name='desc' onChange={(e) => {setDesc(e.target.value)}} placeholder="Describe your property details..."/>
        </Form.Group>

        <Form.Group className="mb-3 col-md-6" controlId="formBasicPassword">
            <Form.Label>Upload Image</Form.Label>
            <Form.Control name='photo' type="file" onChange={(e) => {setFile(e.target.files[0])}} placeholder="Image only...!" />
        </Form.Group>
        </div>
        <Button title="Add Property Live" variant="success" type="submit" onClick={Addproperty}>
            Add Property
        </Button>
        </Form>
        </div>
    </>
  )
}

export default Addproperty;