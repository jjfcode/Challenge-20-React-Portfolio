import { useState } from 'react'
import Home from './pages/home'
import NavBar from './components/NavBar'
import Portfolio from './pages/portfolio'
import About from './pages/about'
import Contact from './pages/contact'

function App() {

  const [currentPage, setCurrentPage] = useState('Home');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <>
      <NavBar handlePageChange={handlePageChange} currentPage={currentPage} />
      {renderPage()}
    </>
  )
}

export default App
