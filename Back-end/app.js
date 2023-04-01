const express = require("express");
const app = express();
require("./Database/Config")
const port = 5000;
const cors = require("cors");
const multer = require("multer");
const Property = require("./Model/Model");


const imgconfig = multer.diskStorage({
    destination:(req,file,cb) =>{
        cb(null, "./uploads")
    },
    filename:(req,file,cb) =>{
        cb(null, `image-${Date.now()}. ${file.originalname}`)
    }
});

const isImage = (req,file,cb) =>{
    if(file.mimetype.startsWith("image")){
        cb(null,true)
    }else{
        cb(new Error("Only Images are allowed...!"))
    }
};

const upload = multer({
    storage:imgconfig,
    fileFilter:isImage
});

//  Api

app.use(express.json());
app.use(cors());
app.use("/uploads",express.static("uploads"));

// for posting
app.post("/addproperty",upload.single("photo"),async (req, res) => {
    const {filename} = req.file;
    const {name,address,city,district,price,email,contact,category,marla,type,desc} = req.body;

    if(!name || !address || !city || !district || !price || !email || !contact || !category || !marla || !type || !desc || !filename){
        res.status(401).json({status:401,message:"Fill all the data"})
    }
    try {
        const propertydata = new Property({
            name: name,
            address: address,
            city: city,
            district: district,
            price: price,
            email: email,
            contact:contact,
            category: category,
            marla: marla,
            type: type,
            desc: desc,
            imgpath: filename,
            date: new Date()
        });

        const finaldata = await propertydata.save();

        res.status(201).json({status:201,finaldata});

        console.log("1 property added successfuly...");

    } catch (error) {
        res.status(401).json({status:401,error})
    }
});


// for get
app.get("/properties", async(req, res) => {

    const product = await Property.find();
    if(product.length > 0){
        res.send(product);
    }
});

// for updating

app.put('/updateproperty/:id' ,async (req, res) => {
    const result = await Property.updateOne(
        {_id: req.params.id},
        {
            $set: req.body
        }
        // {$set: req.files},
    )
    if(result)
    {
        res.send(result)
        
        console.log("1 property updated successfuly...");
    }else{
        res.send("Data is not updated.")
    }
});


// for deleting

app.delete('/properties/:id' ,async (req , res) => {
    
    const result = await Property.deleteOne({_id: req.params.id});
    if(result){
        res.send(result);
        console.log("1 property deleted successfuly...");
    }else{
        res.status(401).json({status:401,error});
    }
});

app.listen(port,()=>{
    console.log(`http://localhost:${port}`)
})