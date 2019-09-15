var mongoose = require("mongoose");
mongoose.set('useCreateIndex', true);

var Schema = mongoose.Schema;

var BookSchema = new Schema({
    title: {
        type: String,
        required: true
    },

    authors: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    image: {
        type: String,
        required: false,
    },

    link: {
        type: String,
        required: false
    }
});

var Book = mongoose.model("books", BookSchema);

module.exports = Book;