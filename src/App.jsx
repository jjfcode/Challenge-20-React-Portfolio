import { useState } from 'react'
import Resume from './pages/resume'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Portfolio from './pages/portfolio'
import About from './pages/about'
import Contact from './pages/contact'

function App() {

  const [currentPage, setCurrentPage] = useState('About');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <>
      <NavBar handlePageChange={handlePageChange} currentPage={currentPage} />
      {renderPage()}
      <Footer />
    </>
  )
}

export default App
