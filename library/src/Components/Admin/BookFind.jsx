import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BookFind = () => {
    const [books, setBooks] = useState([]);

    // Function to fetch books from the backend
    const fetchBooks = async () => {
        try {
            const response = await axios.get('http://localhost:5000/admin/bookfind');
            setBooks(response.data); // Store the books in state
        } catch (error) {
            console.error('Error fetching books:', error);
        }
    };

    useEffect(() => {
        fetchBooks();
    }, []); // Fetch books on component mount

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Registered Books</h1>
            {books.length > 0 ? (
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Author</th>
                            <th>ISBN</th>
                            <th>Barcode</th>
                        </tr>
                    </thead>
                    <tbody>
                        {books.map((book) => (
                            <tr key={book._id}>
                                <td>{book.title}</td>
                                <td>{book.author}</td>
                                <td>{book.isbn}</td>
                                <td>
                                    <img src={book.barcode} alt="Barcode" style={{ width: '150px' }} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p className="text-center">No books found</p>
            )}
        </div>
    );
};

export default BookFind;
