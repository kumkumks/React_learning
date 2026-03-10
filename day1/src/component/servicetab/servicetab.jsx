import React from 'react'
import Tab from './tab'
import Button from './button'

const Servicetab = ({ title, description1, description2, image, imageAlt, bgColor, imagePosition }) => {

    // Component for the image section
    const ImageSection = () => (
        <div className='text-white h-72 w-80 rounded-2xl overflow-hidden m-3 shadow-lg'>
            <img className='w-full h-full object-cover' src={image} alt={imageAlt} />
        </div>
    );

    //   content section component
    const ContentSection = () => (
        <div className='text-black mt-3 flex justify-center items-center mx-9'>
            <div className='max-w-xl'>
                <h1 className='font-extrabold text-6xl mb-4'>{title}</h1>
                <p className='text-lg leading-relaxed mb-3'>{description1}</p>
                <p className='text-base text-gray-700 mb-5'>{description2}</p>
                <div className='flex justify-start mt-5'>
                    <Button text='See More' />
                </div>
            </div>
        </div>
    );

    return (
        <div>
            <Tab className={`${bgColor} justify-between`}>
                {imagePosition === 'Left' ?(
                    <>
                    <ImageSection />
                    <ContentSection />
                    </>
                    ):(
                      <>
                      <ContentSection />
                      <ImageSection />
                      </>
                    )
                    }
            </Tab>
        </div>
    )
}

export default Servicetab