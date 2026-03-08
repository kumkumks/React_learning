import React from 'react'
import Navbar from './component/navbar/navbar'
import Header from './component/header/header'
import Card from './component/card'
import card1 from './assets/card1.jfif'
import card2 from './assets/card2.jfif'
import card3 from './assets/card3.jfif'
import card5 from './assets/card5.jfif'
import Tab from './component/tab'
import cardtab from './assets/cardtab.jfif'
import cardtab2 from './assets/cardtab2.jfif'
import Button from './component/button'
import Footer from './component/footer'

// card data

let cardData = [
  {
    id: 1,
    title: 'Card 1',
    image: card1
  },
  {
    id: 2,
    title: 'Card 2',
    image: card2
  },
  {
    id: 3,
    title: 'Card 3',
    image: card3
  },
  {
    id: 4,
    title: 'Card 4',
    image: card5
  }
];

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className='p-3'>
        <h1 className='text-2xl text-blue-950 text-center bg-blue-50  p-3 font-bold mt-1'>Our Gallery</h1>

        {/* card */}
        <Card>
          {cardData.map((card) => (
            <div className='flex flex-wrap rounded-4xl overflow-hidden shadow-md object-fit h-60 w-60 m-2 hover:translate-1.5 duration-100' key={card.id}>
              <img
                className='w-full'
                src={card.image}
                alt={card.title}
              />
              {/* <h3 className='text-center p-2 font-semibold'>{card.title}</h3> */}
            </div>
          ))}
        </Card>
      </div>

      {/* tab details */}
      <Tab className='bg-indigo-200 justify-between'>
        <div className='text-white h-72 w-80 rounded-2xl overflow-hidden mr-7 m-3 shadow-lg'>
          <img className='w-full h-full object-cover' src={cardtab} />
        </div>
        <div className='text-black mr-9 mt-3 flex justify-center items-center'>
          <div className='max-w-xl'>
            <h1 className='font-extrabold text-6xl mb-4'>Our Services</h1>
            <p className='text-lg leading-relaxed mb-3'>
              We specialize in creating beautiful, responsive, and user-friendly websites 
              that help your business stand out in the digital world.
            </p>
            <p className='text-base text-gray-700 mb-5'>
              Our team of expert designers and developers work together to deliver 
              exceptional web solutions tailored to your unique needs. From concept to 
              deployment, we ensure every detail is perfect.
            </p>
            <div className='flex justify-start mt-5'>
              <Button text='See More' />
            </div>
          </div>
        </div>
      </Tab>
      <Tab className='bg-red-200 justify-between'>
        <div className='text-black ml-9 mt-3 flex justify-center items-center'>
          <div className='max-w-xl'>
            <h1 className='font-extrabold text-6xl mb-4'>Why Choose Us</h1>
            <p className='text-lg leading-relaxed mb-3'>
              With years of experience in web development, we bring creativity and 
              technical expertise to every project. Your success is our priority.
            </p>
            <p className='text-base text-gray-700 mb-5'>
              We don't just build websites – we create digital experiences that engage 
              your audience and drive results. Our commitment to quality and customer 
              satisfaction sets us apart from the competition.
            </p>
            <div className='flex justify-start mt-5'>
              <Button text='See More' />
            </div>
          </div>
        </div>
       <div className='text-white h-72 w-80 rounded-2xl overflow-hidden ml-7 m-3 shadow-lg'>
          <img className='w-full h-full object-cover' src={cardtab2} />
        </div>
      </Tab>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App