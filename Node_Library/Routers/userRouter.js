const express = require("express");
const session = require("express-session"); 
const router = express.Router();
const usercollection = require("../models/Usersmodals");
const UploadData = require("../models/UploadDataModel");
const multer = require('multer');
const bcrypt = require('bcrypt'); // Import bcrypt
router.use(express.json());
const path = require('path');
const cors = require("cors");
const Resource=require('../models/ResourceMoadl');

router.use(cors());
console.log(__dirname);

// Configure session
router.use(
  session({
    secret: "yourSecretKey", // Use a secure and random secret key
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }, // Set secure: true if using HTTPS
  })
);

const store = multer.diskStorage({
  destination: "D:/Library_Managmnet/library/public/Images",
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});
const upload = multer({ storage: store });

const storage = multer.diskStorage({
  destination: "D:/Library_Managmnet/library/public/Uploads", 
  filename: function(req,file,cb){
    cb(null, file.originalname);
  }
});
const upload2 = multer({ storage });

// Express middleware
router.use(express.urlencoded({ extended: true }));

// Route to handle file upload and save additional data
router.post("/upload", upload2.single("file"), async (req, res) => {
  try {
    const { StudentRollno, title, description, category, department, year, subject } = req.body;

    // Validate the user
    const user = await usercollection.findOne({ rollNo: StudentRollno });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Validate file
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    // Create and save the upload data
    const newUploadData = new UploadData({
      StudentRollno,
      title,
      description,
      category,
      department,
      year,
      subject,
      filePath: req.file.path,
      status: false,
      uploadedDate: new Date(),
    });
    console.log(newUploadData);
     newUploadData.save();
    res.json({ message: "Data uploaded successfully" });
  } catch (err) {
    console.error("Error saving data:", err); // Detailed error log
    res.status(500).json({ message: "Internal server error", error: err.message });
  }
});



//-------------------------registration-----------------------------------------------------
//-------------------------registration-----------------------------------------------------
router.post("/register", upload.single('image'), async (req, res) => {
  try {
    const {
      name, mothersName, dob, gender, rollNo, email, department,
      year, phoneNo, address, state, pincode, password, confirmPassword
    } = req.body;

    // Check if roll number or email already exists
    const existingUser = await usercollection.findOne({
      $or: [{ rollNo }, { email }],
    });

    if (existingUser) {
      const errorMessage = [];
      if (existingUser.rollNo === rollNo) errorMessage.push("Roll number already exists");
      if (existingUser.email === email) errorMessage.push("Email already exists");
      return res.status(400).send({ message: errorMessage.join(" and ") });
    }

    // Check if password and confirmPassword match
    if (password !== confirmPassword) {
      return res.status(400).send({ message: "Passwords do not match" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    const student = new usercollection({
      name,
      mothersName,
      dob,
      gender,
      rollNo,
      email,
      department,
      year,
      phoneNo,
      address,
      state,
      pincode,
      password: hashedPassword, // Save hashed password
      confirmPassword: hashedPassword, // Save hashed confirmPassword for consistency
      Image: req.file.filename,
    });

    console.log(student);
    await student.save();
    res.status(200).send({ message: "Data saved successfully" });
  } catch (error) {
    console.error("Error saving data:", error);
    res.status(500).send({ message: "Error saving data", error });
  }
});

//-------------------------login-----------------------------------------------------
router.post("/login", async (req, res) => {
  const { rollNo, password } = req.body;

  try {
    // Find user by rollNo
    const user = await usercollection.findOne({ rollNo });
    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }
    // Compare the entered password with the stored hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).send({ message: "Invalid password" });
    }
    
    // Store rollNo in session
    req.session.rollNo = rollNo;
    console.log(req.session.rollNo)

    // Respond with success message
    res.status(200).send({
      message: "Login successful",
      rollNo: req.session.rollNo, // Return session rollNo for reference
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).send({ message: "Error logging in", error });
  }
});

router.post("/logout", (req, res) => {
  try {
    // If you are using session-based auth, destroy the session
    req.session.destroy((err) => {
      if (err) {
        console.error("Error destroying session:", err);
        return res.status(500).send({ message: "Logout failed", error: err });
      }

      res.status(200).send({ message: "Logout successful" });
    });
  } catch (error) {
    console.error("Logout error:", error);
    res.status(500).send({ message: "Error logging out", error });
  }
});

router.get("/profile/:rollno",async (req,res)=>{
  const myprofile= await usercollection.findOne({"rollNo": req.params.rollno});
  res.send(myprofile);
});

// Route to share resource (using multer to handle file and other fields)
router.post('/share', upload.single('file'), async (req, res) => {
  try {
    const { rollNo, title, category, description } = req.body;
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    // Fetch student details from the user collection using rollNo
    const student = await usercollection.findOne({ rollNo });
    // console.log(student)
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }

    // Create new resource
    const newResource = new Resource({
      rollNo,
      studentName: student.name,
      PhoneNo: student.phoneNo,
      email:student.email,
      title,
      category,
      description,
      uploadedDate:Date.now(),
      filePath: req.file.path,  // Storing the file path
    });

    await newResource.save();
    console.log(newResource);

    res.status(201).json({ message: 'Resource shared successfully' });
  } catch (error) {
    console.error('Error sharing resource:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});
router.get('/resources', async (req, res) => {
  try {
    // Fetch all resources from the database
    const resources = await Resource.find().sort({ uploadedDate: -1 }); // Sorted by latest uploads
    res.status(200).json(resources);
  } catch (error) {
    console.error('Error fetching resources:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});
// Get resources by roll number
router.get('/resourcesfind/:rollNo', async (req, res) => {
  try {
    const resources = await Resource.find({ rollNo: req.params.rollNo });
    console.log(resources)
    res.json(resources);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});
router.delete('/resources/:id', async (req, res) => {
  try {
    const result = await Resource.findByIdAndDelete(req.params.id);
    if (!result) {
      return res.status(404).json({ message: 'Resource not found' });
    }
    res.json({ message: 'Resource deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});


module.exports = router;
