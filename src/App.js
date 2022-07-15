import './css/App.css';
import Navbar from './components/navbar/Navbar';
import About from './components/About';
import Skills from './components/skill/Skills';
import Projects from './components/project/Projects';
import Blog from './components/blog/Blog';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="skills" element={<Skills />} />
        <Route path="blog" element={<Blog />} />
        <Route path="resume" element={<Resume />} />
        <Route path="contact" element={<Contact />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
      <Footer></Footer>
    </React.Fragment>
  );
}

export default App;
