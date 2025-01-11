const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const bookcollection =require('../models/BookModals');
const BookIsue = require('../models/BookIsue');
const StudentDetails = require("../models/Usersmodals");
const admincollection = require("../models/AdminModal");
const uploads= require(".././models/UploadDataModel");
const path = require("path");
const router = express.Router();
const nodemailer = require("nodemailer");

router.use(express.json());
router.use(bodyParser.json());
router.use(cors());
router.use(express.urlencoded({ extended: true }));
router.use('/images', express.static(path.join(__dirname, '..', '..', 'library', 'public', 'Images')));
console.log("Serving images from:", path.join(__dirname, '..', '..', 'library', 'public', 'Images'));

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "kritikraj920@gmail.com",
    pass: "cfhbrsyopsynckyu",
  },
});
// Serve images from the public/Images folder

// Generate Barcode Endpoint

// Dummy credentials for example

// Login Route
router.post('/login', async (req, res) => {
  const { name, password } = req.body;

  // Ensure you await the result of the query to get the admin data
  const mockAdmin = await admincollection.findOne({name});
  console.log(mockAdmin);
  if (mockAdmin && mockAdmin.password === password) {
    // Successful login
    return res.json({ success: true, message: 'Login successful',mockAdmin});
  } else {
    // Invalid credentials
    return res.status(400).json({ success: false, message: 'Invalid username or password' });
  }
});

router.post('/books', async (req, res) => {
   const {title,author,isbn, barcode}=req.body;
   const books= new bookcollection({title,author,isbn,barcode});
   console.log(books);
   books.save();
//    res.status(200).send({ message: 'Data saved successfully' });

});

router.get('/bookfind', async (req, res) => {
    try {
        const book = await bookcollection.find(); // Fetch all books
        res.status(200).json(book);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
// Fetch Student by Roll Number
router.get("/StudentDetails/:rollNumber", async (req, res) => {
    const student = await StudentDetails.findOne({ rollNo: req.params.rollNumber });
    console.log(student)
    if (student) return res.json(student);
    res.status(404).send("Student not found");
  });
  
  // Fetch Book by ISBN
  router.get("/BookDetails/:isbn", async (req, res) => {
    console.log(req.params.isbn)
    const book = await bookcollection.findOne({ isbn: req.params.isbn });
    console.log(book);
    if (book) return res.json(book);
    res.status(404).send("Book not found");
  });
  
  // Issue Book
  router.post("/issue", async (req, res) => {
    const issue = new BookIsue(req.body);
    console.log(issue)
    await issue.save();
    res.send("Book issued successfully");
  });


  router.get("/issuefind/:rollno",async (req,res)=>{
    const bookfind= await BookIsue.find({"student.rollNo": req.params.rollno} );
    res.json(bookfind);
  });
  router.post("/update", async (req, res) => {
    const { rollNumber, isbn } = req.body;
  
    if (!rollNumber || !isbn) {
      return res.status(400).json({ success: false, message: "Roll number and ISBN are required" });
    }
  
    try {
      // Find all records matching the roll number
      const studentRecords = await BookIsue.find({ 'student.rollNo': rollNumber });
  
      if (!studentRecords.length) {
        console.log("No student records found for roll number:", rollNumber);
        return res.status(404).json({ success: false, message: "No records found for the provided roll number" });
      }
  
      let updatedRecords = 0; // Counter to track how many records were updated
  
      for (const record of studentRecords) {
        console.log(record.issueDate);
        const book = record.book;
        
        // Check if the book ISBN matches
        if (book && book.isbn === isbn) {
          // Update the book's status and submission date
          record.status = "Submitted";
          record.submissionDate = new Date();
  
          console.log("Updated book in record:", book);
  
          // Save the updated record
          await record.save();
          updatedRecords++;
        }
      }
  
      if (updatedRecords === 0) {
        return res.status(404).json({ success: false, message: "No books found with the provided ISBN" });
      }
  
      res.json({
        success: true,
        message: `${updatedRecords} book(s) status updated successfully`,
      });
    } catch (error) {
      console.error("Error updating book status:", error);
      res.status(500).json({ success: false, message: "Internal server error" });
    }
  });


  
  router.get("/panding",async (req,res)=>{
    const bookfind= await BookIsue.find({'status': 'Isue'} );
    res.json(bookfind);
  });



  router.post("/mail/:email", (req, res) => {
    const email = req.params.email; // Extract the email
    console.log("Sending mail to:", email);
  
    async function main() {
      try {
        const info = await transporter.sendMail({
          from: "kritikraj920@gmail.com", // Sender's email
          to: email, // Recipient's email
          subject: "MBM LIBRARY Reminder", // Subject line
          html: "<h1>MBM LIBRARY</h1><p>This is a reminder from the MBM Library to return your pending books.</p>", // HTML body
        });
  
        console.log("Message sent: %s", info.messageId);
        res.json({ success: "true", message: "Email sent successfully" });
      } catch (error) {
        console.error("Error sending mail:", error);
        res.status(500).json({ success: "false", message: "Failed to send email" });
      }
    }
  
    main();
  });
  
  router.get("/departments", async (req, res) => {
    try {
      const departments = await BookIsue.distinct("student.department");
      res.status(200).json(departments);
    } catch (error) {
      console.error("Error fetching departments:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });
  router.get("/detailsByDepartment/:department", async (req, res) => {
    const { department } = req.params;
    try {
      const query =
      department == "All" || department == "" // Handle "All" or empty department
      ? { status: "Isue" } // Filter only by status
      : { "student.department": department, status: "Isue" }; // Filter by department and status
      console.log(query);
      const records = await BookIsue.find(query).select("student book issueDate status");
      // console.log(records);
      
      res.status(200).json(records);
    } catch (error) {
      console.error("Error fetching records by department:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  router.get("/newupload",async (req,res)=>{
    try{
      const newUploads = await uploads.find({ status: false });
      // console.log(newUploads);
      res.json(newUploads);
    }catch(error){
      console.log(error);
    }
  });
  router.get("/newupload2/:category",async (req,res)=>{
    try{
      const category = req.params.category;
      console.log(category);
      const newUploads = await uploads.find({ category,status:true});
      console.log(newUploads);
      res.json(newUploads);
    }catch(error){
      console.log(error);
    }
  });
  
  router.get("/download/:filename", (req, res) => {
    const filename = req.params.filename;
    const filePath = path.join("D:/Library_Managmnet/library/public/Uploads", filename);
    res.download(filePath, (err) => {
      if (err) {
        console.error("Error downloading file:", err);
        res.status(404).send("File not found");
      }
    });
  });
  router.delete("/deleteUpload/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const deletedRecord = await uploads.findByIdAndDelete(id);
      if (!deletedRecord) {
        return res.status(404).json({ message: "Record not found" });
      }
      res.status(200).json({ message: "Record deleted successfully" });
    } catch (error) {
      console.error("Error deleting record:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  router.put("/update-status/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const updatedRecord = await uploads.findByIdAndUpdate(
        id,
        { status: true },
        { new: true }
      );
  
      if (!updatedRecord) {
        return res.status(404).json({ message: "Record not found" });
      }
  
      res.status(200).json({ message: "Status updated successfully", record: updatedRecord });
    } catch (error) {
      console.error("Error updating status:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });
  router.get("/departmentsUpload", async (req, res) => {
    try {
      const departments = await uploads.distinct("department");
      res.status(200).json(departments);
    } catch (error) {
      console.error("Error fetching departments:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });
  router.get("/yearsUpload", async (req, res) => {
    try {
      const years = await uploads.distinct("year");
      res.status(200).json(years);
    } catch (error) {
      console.error("Error fetching years:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });
  
module.exports = router;