import { useEffect, useState } from "react";
import "./App.css";

const BASE_URL = "https://openlibrary.org/search.json?q=";

function App() {
  const [count, setCount] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(getBooks, []);

  function getBooks() {
    const searchStuff = "books";
    const limitNum = 10;
    const url = `${BASE_URL}${searchStuff}&limit=${limitNum}`;
    setIsLoading(true);
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let books = data.docs;
        books.forEach((book) => {
          const img = `https://covers.openlibrary.org/b/isbn/${book.isbn[0]}-M.jpg`;
          console.log(book);
          console.log(book.title, ",", book.author_name[0], ",", img);
        });
        setCount(books.length);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
      });
  }

  return (
    <div className="App">
      <p>{isLoading ? "loading ....." : null}</p>
      <p>count : {count}</p>
    </div>
  );
}

export default App;
