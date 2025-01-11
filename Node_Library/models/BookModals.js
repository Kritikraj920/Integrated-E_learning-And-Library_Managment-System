const mongoose= require("mongoose");
const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    isbn: String,
    barcode: String,
});
module.exports= new mongoose.model('BooksEntery', bookSchema);