import { useState } from 'react';
import NavTabs from './NavTabs';

import About from './pages/About';
import Portofolio from './pages/Portofolio';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Footer from './pages/footer';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
  
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portofolio') {
      return <Portofolio/>;
    }
    if (currentPage === 'Resume') {
      return <Resume/>;
    }
  
  return <Contact />;

    
  };

  const handlePageChange = (page) => setCurrentPage(page);
console.log(currentPage)
  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      <main className="mx-3">{renderPage()}</main>
      
     <Footer />
           
     
    </div>
    
  );
}