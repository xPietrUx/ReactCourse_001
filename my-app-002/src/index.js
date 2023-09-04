import React from "react";
import ReactDOM from "react-dom/client";

import './index.css';

const firstBook = {
  author: 'Rebecca Yarros',
  title: 'Iron Flame (The Empyrean, 2)',
  img: 'https://images-na.ssl-images-amazon.com/images/I/A1FW1G46+aL._AC_UL600_SR600,400_.jpg',
}

const secondBook = {
  author: 'Keila Shaheen',
  title: 'The Shadow Work Journal: A Guide to...',
  img: 'https://m.media-amazon.com/images/I/31UAsu2Q94L._SY291_BO1,204,203,200_QL40_FMwebp_.jpg',
}

/*
const Author = () => {

  const inlineHeadingStyles = {
    color: '#617d98',
    fontSize: '0.75rem',
    marginTop: '0.5rem'
  };
  return <h2 style={inlineHeadingStyles}>Rebecca Yarros</h2>
};
const Title = () => <h2 style={{ color: "black" }}>Iron Flame (The Empyrean, 2)</h2>;
const Image = () => <img src="https://images-na.ssl-images-amazon.com/images/I/A1FW1G46+aL._AC_UL600_SR600,400_.jpg" alt="" />;
*/

/*
const Image = 'https://images-na.ssl-images-amazon.com/images/I/A1FW1G46+aL._AC_UL600_SR600,400_.jpg';
const Title = 'Iron Flame (The Empyrean, 2)';
const Author = 'Rebecca Yarros';
*/

const BookList = () => {
  return (
    <section className="booklist">
      <Book 
      author={firstBook.author} 
      title={firstBook.title} 
      img={firstBook.img}/>
      <Book 
      author={secondBook.author} 
      title={secondBook.title} 
      img={secondBook.img}/>
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