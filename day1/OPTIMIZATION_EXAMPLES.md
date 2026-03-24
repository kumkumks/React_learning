 # React Optimization Examples

## 1. Extract Data to Separate File

### data/content.js
```javascript
import card1 from '../assets/card1.jfif';
import card2 from '../assets/card2.jfif';
import card3 from '../assets/card3.jfif';
import card5 from '../assets/card5.jfif';
import cardtab from '../assets/cardtab.jfif';
import cardtab2 from '../assets/cardtab2.jfif';

export const cardData = [
  { id: 1, title: 'Card 1', image: card1 },
  { id: 2, title: 'Card 2', image: card2 },
  { id: 3, title: 'Card 3', image: card3 },
  { id: 4, title: 'Card 4', image: card5 }
];

export const serviceTabsData = [
  {
    id: 1,
    title: 'Our Services',
    description1: 'We specialize in creating beautiful, responsive, and user-friendly websites that help your business stand out in the digital world.',
    description2: 'Our team of expert designers and developers work together to deliver exceptional web solutions tailored to your unique needs. From concept to deployment, we ensure every detail is perfect.',
    image: cardtab,
    imageAlt: 'Web development services',
    bgColor: 'bg-indigo-200',
    imagePosition: 'left'
  },
  {
    id: 2,
    title: 'Why Choose Us',
    description1: 'With years of experience in web development, we bring creativity and technical expertise to every project. Your success is our priority.',
    description2: "We don't just build websites – we create digital experiences that engage your audience and drive results. Our commitment to quality and customer satisfaction sets us apart from the competition.",
    image: cardtab2,
    imageAlt: 'Why choose our services',
    bgColor: 'bg-red-200',
    imagePosition: 'right'
  }
];
```

## 2. Create Reusable ServiceTab Component

### components/sections/ServiceTab.jsx
```javascript
import React from 'react';
import Tab from '../tab';
import Button from '../button';

const ServiceTab = ({ title, description1, description2, image, imageAlt, bgColor, imagePosition }) => {
  const ImageSection = () => (
    <div className='text-white h-72 w-80 rounded-2xl overflow-hidden m-3 shadow-lg'>
      <img className='w-full h-full object-cover' src={image} alt={imageAlt} />
    </div>
  );

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
    <Tab className={`${bgColor} justify-between`}>
      {imagePosition === 'left' ? (
        <>
          <ImageSection />
          <ContentSection />
        </>
      ) : (
        <>
          <ContentSection />
          <ImageSection />
        </>
      )}
    </Tab>
  );
};

export default ServiceTab;
```

## 3. Create Gallery Section Component

### components/sections/Gallery.jsx
```javascript
import React from 'react';
import Card from '../card';

const GalleryCard = ({ image, title }) => (
  <div className='rounded-4xl overflow-hidden shadow-md h-60 w-60 m-2 hover:scale-105 transition-transform duration-200'>
    <img className='w-full h-full object-cover' src={image} alt={title} />
  </div>
);

const Gallery = ({ cards }) => {
  return (
    <section className='p-3'>
      <h1 className='text-2xl text-blue-950 text-center bg-blue-50 p-3 font-bold mt-1'>
        Our Gallery
      </h1>
      <Card>
        {cards.map((card) => (
          <GalleryCard key={card.id} image={card.image} title={card.title} />
        ))}
      </Card>
    </section>
  );
};

export default Gallery;
```

## 4. Refactored App.jsx

### App.jsx
```javascript
import React from 'react';
import Navbar from './component/navbar/navbar';
import Header from './component/header/header';
import Gallery from './component/sections/Gallery';
import ServiceTab from './component/sections/ServiceTab';
import Footer from './component/footer';
import { cardData, serviceTabsData } from './data/content';

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      
      <main>
        <Gallery cards={cardData} />
        
        <section className='services'>
          {serviceTabsData.map((tab) => (
            <ServiceTab
              key={tab.id}
              title={tab.title}
              description1={tab.description1}
              description2={tab.description2}
              image={tab.image}
              imageAlt={tab.imageAlt}
              bgColor={tab.bgColor}
              imagePosition={tab.imagePosition}
            />
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
```

## 5. Performance Optimizations

### Use React.memo for Pure Components
```javascript
import React, { memo } from 'react';

const Button = memo(({ text, onClick }) => {
  return (
    <button 
      className='rounded-xl h-12 w-24 justify-center flex items-center bg-black p-1 text-white hover:bg-gray-700 hover:cursor-pointer transition-colors'
      onClick={onClick}
    >
      <span className='font-medium'>{text}</span>
    </button>
  );
});

export default Button;
```

### Add Loading States
```javascript
const Gallery = ({ cards }) => {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    // Simulate loading
    setTimeout(() => setIsLoading(false), 500);
  }, []);

  if (isLoading) {
    return <div className='text-center p-10'>Loading...</div>;
  }

  return (
    // ... gallery content
  );
};
```

## 6. Accessibility Improvements

```javascript
// Add semantic HTML elements
<nav> instead of <div> for navigation
<main> for main content
<section> for sections
<article> for cards
<footer> for footer

// Add ARIA labels
<button aria-label="Learn more about our services">See More</button>

// Add focus states
className='... focus:ring-2 focus:ring-blue-500 focus:outline-none'
```

## 7. CSS Class Organization (Tailwind)

### Before (Hard to read)
```javascript
className='flex flex-wrap rounded-4xl overflow-hidden shadow-md object-fit h-60 w-60 m-2 hover:translate-1.5 duration-100'
```

### After (Organized)
```javascript
className='
  flex flex-wrap 
  h-60 w-60 m-2 
  rounded-4xl overflow-hidden 
  shadow-md 
  object-fit 
  hover:translate-1.5 
  duration-100
'
```

## Key Takeaways

1. ✅ **Separate concerns**: Data, Components, Styling
2. ✅ **Reusable components**: DRY (Don't Repeat Yourself)
3. ✅ **Props validation**: Consider using PropTypes or TypeScript
4. ✅ **Semantic HTML**: Better for SEO and accessibility
5. ✅ **Performance**: Use memo, useMemo, useCallback when needed
6. ✅ **Code organization**: Logical folder structure
7. ✅ **Naming conventions**: Descriptive and consistent
8. ✅ **Alt text**: Always provide for images
9. ✅ **Use const**: Unless you need to reassign
10. ✅ **Clean up**: Remove unused imports and commented code
