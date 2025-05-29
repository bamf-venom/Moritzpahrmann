import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header, HeroSection, MyStorySection, LatestProjectSection, PastProjectsSection, RendersSection, SoftwareSkillsSection, Footer } from './components';

const Home = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <HeroSection />
      <MyStorySection />
      <LatestProjectSection />
      <PastProjectsSection />
      <RendersSection />
      <SoftwareSkillsSection />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;