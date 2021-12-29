import { useEffect, useState } from "react";
import Book from "./Book";

const BASE_URL = "https://openlibrary.org/search.json?q=";

function Books({ searchString, limitNum }) {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(getBooks, [searchString, limitNum]);

  function getBooks() {
    const url = `${BASE_URL}${searchString}&limit=${limitNum}`;
    setIsLoading(true);
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setBooks(data.docs);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
      });
  }

  const booksElements = books.map((book) => (
    <Book
      key={book.key}
      title={book.title}
      authorName={book.author_name ? book.author_name[0] : ""}
      img={
        book.isbn
          ? `https://covers.openlibrary.org/b/isbn/${book.isbn[0]}-M.jpg`
          : ""
      }
    />
  ));

  return (
    <div>
      {isLoading
        ? `search : ${searchString} , limit : ${limitNum} , loading .....`
        : booksElements}
    </div>
  );
}

export default Books;
