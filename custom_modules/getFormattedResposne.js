const wreck = require('wreck');

const allBooksURL = 'https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/allBooks';

function mergeTwo(booksResponseObject) {
  const books = JSON.parse(booksResponseObject.payload.toString()).books;
  const resultObject = books.map((book) => {
    let updatedBook = book;
    updatedBook = wreck.get(`https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/findBookById/${book.id}`)
      .then((response) => {
        updatedBook.rating = JSON.parse(response.payload.toString()).rating;
        return updatedBook;
      });
    return updatedBook;
  });
  return resultObject;
}

function getFormattedResposne() {
  wreck.get(allBooksURL).then(response => mergeTwo(response))
    .then(promises => Promise.all(promises));
}

// function reorganzie(data){
//   let result[];
//   data.forEach(element => {

//   });
// =}
// getFormattedResposne().then((data) => {

// });
module.exports = getFormattedResposne;
