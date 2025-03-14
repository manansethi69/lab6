import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Header from './components/Header';
import Footer from './components/Footer';
import NotFound from './pages/NotFound';
import Errors from './components/Errors';


const App = () => {
    return (
        <>
            <Header />
            <main className="container mt-4">
                <Errors>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </Errors>
            </main>
            <Footer />
        </>
    );
};

export default App;
