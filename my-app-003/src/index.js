import React from "react";
import ReactDOM from "react-dom/client";

import './index.css';
const books = [
  {
    author: 'Rebecca Yarros',
    title: 'Iron Flame (The Empyrean, 2)',
    img: 'https://images-na.ssl-images-amazon.com/images/I/A1FW1G46+aL._AC_UL600_SR600,400_.jpg',
  },
  
  {
    author: 'Keila Shaheen',
    title: 'The Shadow Work Journal: A Guide to...',
    img: 'https://m.media-amazon.com/images/I/31UAsu2Q94L._SY291_BO1,204,203,200_QL40_FMwebp_.jpg',
  },
]

const 

const BookList = () => {
  return (
    <section className="booklist">  
    {newNames}
    </section>
  );
};

const Book = (props) => {
  console.log(props);
  return (
  <article className="book">
    <img src={props.img} alt=""/>
    <h2>{props.title}</h2>  
    <h4>{props.author}</h4>
  </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);