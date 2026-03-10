import React from 'react'
import Navbar from './component/navbar/navbar'
import Header from './component/header/header'
import Servicetab from './component/servicetab/servicetab'
import Footer from './component/footer'
import { serviceTabsData } from './content'
import Gallery from './component/Gallery/gallery'

// card data


const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      
      <Gallery />

      {/* tab details */}
      {serviceTabsData.map((tab) => (
        <Servicetab
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

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App