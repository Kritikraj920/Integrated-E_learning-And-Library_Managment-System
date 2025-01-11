import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import bwipjs from 'bwip-js';
import JsBarcode from 'jsbarcode';
const Bookreg = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [isbn, setIsbn] = useState('');
    const [barcode, setBarcode] = useState('');

    // Function to generate barcode
    const generateBarcode = (isbn) => {
        const canvas = document.createElement('canvas');
        JsBarcode(canvas, isbn, {
            format: 'CODE128',
            displayValue: false, // Do not display the text
        });
        setBarcode(canvas.toDataURL()); // Store barcode image as base64
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        generateBarcode(isbn); 
        try {
             const response =await axios.post('http://localhost:5000/admin/books', {
                title,
                author,
                isbn,
                barcode,
            });
            console.log('Book registered:', response.data);
            
            setTitle('');
            setAuthor('');
            setIsbn('');
            setBarcode('');
            // alert(response.data.message);
        } catch (error) {
            console.error('Error submitting book:', error);
        }
    };
 


    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Book Registration</h1>
            <form onSubmit={handleSubmit} className="mb-4">
                <div className="row mb-3">
                    <div className="col">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input
                            type="text"
                            className="form-control"
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Enter book title"
                            required
                        />
                    </div>
                    <div className="col">
                        <label htmlFor="author" className="form-label">Author</label>
                        <input
                            type="text"
                            className="form-control"
                            id="author"
                            value={author}
                            onChange={(e) => setAuthor(e.target.value)}
                            placeholder="Enter author name"
                            required
                        />
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="isbn" className="form-label">ISBN</label>
                    <input
                        type="text"
                        className="form-control"
                        id="isbn"
                        value={isbn}
                        onChange={(e) => setIsbn(e.target.value)}
                        placeholder="Enter ISBN"
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary w-100">Register Book</button>
            
            </form>
           </div>
    );
};

export default Bookreg;
