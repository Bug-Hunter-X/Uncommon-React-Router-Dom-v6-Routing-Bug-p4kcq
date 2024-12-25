import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* Solution: Added a catch-all route */}
        <Route path="/*" element={<NotFound />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() { return <div>Home</div> }
function About() { return <div>About</div> }
function Contact() { return <div>Contact</div> }
function NotFound() { return <div>404 Not Found</div> }
export default App; 