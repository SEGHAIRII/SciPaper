import { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';


function App() {
  
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      // Calculate the difference between the initial height and the new height
      const heightDifference = window.innerHeight - document.documentElement.clientHeight;

      // Check if the height difference is positive (keyboard opened)
      setIsKeyboardOpen(heightDifference > 0);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    // If the keyboard is open, you can scroll to a specific element or position
    if (isKeyboardOpen) {
      // You can adjust this value based on your design
      const scrollAmount = 100;

      // Scroll to a specific position or element
      window.scrollBy(0, scrollAmount);
    }
  }, [isKeyboardOpen]);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage/>}>

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
