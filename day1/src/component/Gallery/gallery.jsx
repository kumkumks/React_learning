import React from 'react'
import Title from './title'
import Card from './card'
import { cardData } from '../../content'

const GalleryCard = ({ image, title }) => (
  <div className='rounded-4xl overflow-hidden shadow-md h-60 w-60 m-2 hover:scale-105 transition-transform duration-200'>
    <img className='w-full h-full object-cover' src={image} alt={title} />
  </div>
);

const Gallery = ({ cards }) => {
  return (
    <div>
        <Title text='Our Gallery' className='text-center mt-3 p-3 bg-purple-200' />
        <div className='flex flex-wrap justify-center'>
            {cardData.map((card, index) => (
                <GalleryCard key={index} image={card.image} title={card.title} />
            ))}
        </div>
    </div>
  )
}

export default Gallery