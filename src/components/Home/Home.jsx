import React from 'react'
import "./Home.css"

import Card from "./Card"
const Home = () => {
    const cardsData = [
        {
          id: 1,
          imageSrc: 'https://cdn.pixabay.com/photo/2015/01/21/14/14/apple-606761_640.jpg',
          title: 'Card 1',
          description: 'A computer is an electronic device that manipulates information, or data. It has the ability to store, retrieve, and process data. You may already know that you can use a computer to type documents, send email, play games, and browse the Web. A computer is an electronic device that manipulates information, or data. It has the ability to store, retrieve, and process data. You may already know that you can use a computer to type documents, send email, play games, and browse the Web. ',
          rating: 4.5
        },
        {
          id: 2,
          imageSrc: 'https://cdn.pixabay.com/photo/2015/01/21/14/14/apple-606761_640.jpg',
          title: 'Card 2',
          description: 'A computer is an electronic device that manipulates information, or data. It has the ability to store, retrieve, and process data. You may already know that you can use a computer to type documents, send email, play games, and browse the Web.  A computer is an electronic device that manipulates information, or data. It has the ability to store, retrieve, and process data. You may already know that you can use a computer to type documents, send email, play games, and browse the Web. ',
          rating: 4.2
        },
        {
          id: 3,
          imageSrc: 'https://cdn.pixabay.com/photo/2015/01/21/14/14/apple-606761_640.jpg',
          title: 'Card 3',
          description: 'A computer is an electronic device that manipulates information, or data. It has the ability to store, retrieve, and process data. You may already know that you can use a computer to type documents, send email, play games, and browse the Web. Description for Card 3 A computer is an electronic device that manipulates information, or data. It has the ability to store, retrieve, and process data. You may already know that you can use a computer to type documents, send email, play games, and browse the Web. ',
          rating: 4.8
        },
        {
          id: 4,
          imageSrc: 'https://cdn.pixabay.com/photo/2015/01/21/14/14/apple-606761_640.jpg',
          title: 'Card 4',
          description: 'A computer is an electronic device that manipulates information, or data. It has the ability to store, retrieve, and process data. You may already know that you can use a computer to type documents, send email, play games, and browse the Web. Description for Card 4 A computer is an electronic device that manipulates information, or data. It has the ability to store, retrieve, and process data. You may already know that you can use a computer to type documents, send email, play games, and browse the Web. ',
          rating: 4.0
        }
      ];
    
  return (
    <div className='container'>
      <h1>Best Website builders in the US</h1>
      <div className='subtitles'>
        <div className='left'>
            <span className='item'>Last Updated</span>
            <span className='item'>February 22,2020</span>
            <span className='item'>Advertising disclosure</span>
        </div>
        <span className='right'>Top Relevant</span>
      </div>
      <div className='subtitles2'>
            <span className='item'>Tools</span>
            <span className='item'>AWS Builder</span>
            <span className='item'>Start Build</span>
            <span className='item'>Build Supplies</span>
            <span className='item'>Tooling</span>
            <span className='item'>BlueHosting</span>
      </div>
      <div className='subtitles3'>
            <span className='item'>Home</span>
            <span className='item'>Hosting for all</span>
            <span className='item'>Hosting</span>
            <span className='item'>Hosting6</span>
            <span className='item'>Hosting5</span>
            
      </div>
      <div className='home'>
      {cardsData.map(card => (
        <Card
          key={card.id}
          imageSrc={card.imageSrc}
          title={card.title}
          description={card.description}
          rating={card.rating}
        />
      ))}
    </div>
    </div>
  )
}

export default Home
