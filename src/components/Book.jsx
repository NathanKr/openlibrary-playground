import './Book.css'

const Book = ({ title, authorName, img }) => {
  return (
    <div className='Book'>
      <p>{title}</p>
      <p>{authorName}</p>
      <img src={img} alt="" />
    </div>
  );
};

export default Book;
