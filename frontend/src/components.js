import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Header Component
export const Header = () => {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-white">MBP</div>
        
        <nav className="hidden md:flex space-x-8">
          <a href="#about" className="text-white/80 hover:text-white transition-colors">About me</a>
          <a href="#contact" className="text-white/80 hover:text-white transition-colors">Contact</a>
          <a href="#data" className="text-white/80 hover:text-white transition-colors">data protection</a>
          <a href="#legal" className="text-white/80 hover:text-white transition-colors">Legal Info</a>
        </nav>
        
        <div className="flex space-x-4">
          <div className="w-6 h-6 bg-gray-400 rounded"></div>
          <div className="w-6 h-6 bg-gray-400 rounded"></div>
        </div>
      </div>
    </motion.header>
  );
};

// Hero Section Component
export const HeroSection = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Image Placeholder - Bedroom Scene */}
      <div className="absolute inset-0">
        <div className="w-full h-full bg-gradient-to-br from-amber-800 via-orange-700 to-amber-900 relative">
          {/* Bedroom elements to simulate the original */}
          <div className="absolute inset-0 opacity-60">
            {/* Wall pattern */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-b from-amber-600 to-amber-800"></div>
            {/* Bed area */}
            <div className="absolute bottom-0 left-1/4 right-1/4 h-1/3 bg-gradient-to-t from-amber-900 via-orange-800 to-amber-700 rounded-t-3xl"></div>
            {/* Side furniture */}
            <div className="absolute bottom-16 left-16 w-24 h-32 bg-amber-900 rounded"></div>
            <div className="absolute bottom-32 left-12 w-8 h-16 bg-amber-800 rounded"></div>
            {/* Lighting effect */}
            <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-yellow-400 opacity-20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      {/* Content */}
      <div className="relative z-10 flex items-center justify-start h-full max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-left"
        >
          <h1 className="text-6xl md:text-8xl font-light text-white mb-4 tracking-wide">
            Moritz Pahrmann
          </h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-xl md:text-2xl text-white/90 tracking-[0.3em] font-light"
          >
            VFX ARTIST
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

// My Story Section Component
export const MyStorySection = () => {
  return (
    <section className="flex flex-col md:flex-row min-h-screen">
      {/* Left Side - White Background */}
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="flex-1 bg-white text-black p-12 md:p-16 flex flex-col justify-center"
      >
        <h2 className="text-5xl md:text-6xl font-light mb-8 text-black">
          My<br />Story
        </h2>
        <div className="w-16 h-0.5 bg-black mb-8"></div>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-black border border-black px-8 py-3 self-start hover:bg-black hover:text-white transition-all duration-300"
        >
          Read More
        </motion.button>
      </motion.div>
      
      {/* Right Side - Dark Background */}
      <motion.div 
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="flex-1 bg-black text-white p-12 md:p-16 flex flex-col justify-center"
      >
        <h3 className="text-2xl md:text-3xl font-light mb-6">Get to Know Me</h3>
        <p className="text-white/80 leading-relaxed mb-4">
          I am a passionate student specializing in 3D Visual Effects at FH Vorarlberg where I focus on bringing
        </p>
        <p className="text-white/80 leading-relaxed mb-4">
          my work and connects with you.
        </p>
        <p className="text-white/80 leading-relaxed">
          I create high-quality 3D renders and designs that will support your next digital visualization project.
        </p>
      </motion.div>
    </section>
  );
};

// Latest Project Section Component
export const LatestProjectSection = () => {
  const [isVideoHovered, setIsVideoHovered] = useState(false);
  
  return (
    <section className="bg-black py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-light text-green-500 text-center mb-16 tracking-wider"
        >
          MY LATEST PROJEKT
        </motion.h2>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative max-w-4xl mx-auto"
        >
          <div 
            className="relative bg-black aspect-video rounded-lg overflow-hidden cursor-pointer border border-green-500/30"
            onMouseEnter={() => setIsVideoHovered(true)}
            onMouseLeave={() => setIsVideoHovered(false)}
          >
            {/* Video Placeholder - Green Robot/Mech */}
            <div className="w-full h-full bg-black flex items-center justify-center relative">
              {/* Robot silhouette */}
              <div className="relative">
                {/* Robot body */}
                <div className="w-32 h-40 bg-green-600 rounded-lg relative mx-auto">
                  {/* Robot head */}
                  <div className="w-20 h-16 bg-green-500 rounded-lg absolute -top-4 left-1/2 transform -translate-x-1/2"></div>
                  {/* Robot eyes */}
                  <div className="absolute top-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    <div className="w-2 h-2 bg-green-300 rounded-full"></div>
                    <div className="w-2 h-2 bg-green-300 rounded-full"></div>
                  </div>
                  {/* Robot arms */}
                  <div className="w-6 h-24 bg-green-700 rounded absolute top-4 -left-8"></div>
                  <div className="w-6 h-24 bg-green-700 rounded absolute top-4 -right-8"></div>
                  {/* Robot legs */}
                  <div className="w-8 h-16 bg-green-800 rounded absolute -bottom-16 left-2"></div>
                  <div className="w-8 h-16 bg-green-800 rounded absolute -bottom-16 right-2"></div>
                  {/* Chest details */}
                  <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-8 h-8 border-2 border-green-400 rounded"></div>
                </div>
              </div>
            </div>
            
            {/* Play Button Overlay */}
            <motion.div 
              initial={{ scale: 1 }}
              animate={{ scale: isVideoHovered ? 1.1 : 1 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <div className="w-0 h-0 border-l-[16px] border-l-white border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1"></div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Past Projects Section Component
export const PastProjectsSection = () => {
  return (
    <section className="relative">
      {/* Past Projects Header */}
      <div className="bg-black py-16">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-light text-white text-center"
        >
          Past Projects
        </motion.h2>
      </div>
      
      {/* Midterm300 Project */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative bg-gradient-to-br from-yellow-600 via-orange-500 to-amber-700 min-h-screen flex items-center justify-center"
      >
        {/* Background Placeholder */}
        <div className="absolute inset-0 bg-gray-500"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        
        {/* Content */}
        <div className="relative z-10 text-center text-white">
          <motion.h3 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl font-light mb-8"
          >
            Midterm300
          </motion.h3>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center justify-center space-x-3 mb-12"
          >
            <div className="w-6 h-6 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
              <div className="w-0 h-0 border-l-[8px] border-l-white border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent ml-0.5"></div>
            </div>
            <span className="text-lg underline">Play Video</span>
          </motion.div>
          
          {/* Character Placeholder */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative"
          >
            <div className="w-24 h-32 bg-gray-400 rounded-lg mx-auto"></div>
          </motion.div>
        </div>
        
        {/* All Videos Button */}
        <motion.button 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          whileHover={{ scale: 1.05 }}
          className="absolute bottom-16 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-sm border border-white/30 text-white px-6 py-3 rounded hover:bg-white/20 transition-all duration-300"
        >
          All Videos →
        </motion.button>
      </motion.div>
    </section>
  );
};

// Renders Section Component
export const RendersSection = () => {
  const renderImages = [
    { id: 1, title: "Interior Render 1" },
    { id: 2, title: "Sci-Fi Scene" },
    { id: 3, title: "Living Room" },
    { id: 4, title: "Bedroom Render" }
  ];
  
  return (
    <section className="bg-black py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent mb-8">
            RENDERS
          </h2>
          <p className="text-white/80 max-w-4xl mx-auto leading-relaxed text-lg">
            This is where I showcase a selection of 3D renders I created during my studies 
            and for freelance projects. Each piece reflects my passion for visual storytelling, 
            technical growth, and creative exploration in the world of digital design.
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {renderImages.map((image, index) => (
            <motion.div 
              key={image.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="relative group cursor-pointer"
            >
              <div className="bg-gray-600 aspect-[4/3] rounded-lg overflow-hidden">
                <div className="w-full h-full bg-gray-600 flex items-center justify-center">
                  <span className="text-white/60">{image.title}</span>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Software Skills Section Component
export const SoftwareSkillsSection = () => {
  const softwareIcons = [
    "Maya", "Arnold", "Nuke", "RSS", "Unreal", "Substance", "Blender", "PopcornFX", "Affinity"
  ];
  
  return (
    <section className="bg-black py-16">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-light text-white text-center mb-12"
        >
          Software Skills
        </motion.h2>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center items-center gap-6 md:gap-8"
        >
          {softwareIcons.map((software, index) => (
            <motion.div 
              key={software}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center cursor-pointer"
            >
              <span className="text-white text-xs md:text-sm font-medium">
                {software.slice(0, 1)}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Footer Component
export const Footer = () => {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-black border-t border-white/10 py-8"
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-white/60 text-sm mb-4 md:mb-0">
          © 2024 Moritz Pahrmann VFX
        </p>
        
        <div className="flex space-x-6">
          <a href="#datenschutz" className="text-white/60 hover:text-white text-sm transition-colors">
            Datenschutz
          </a>
          <a href="#legal" className="text-white/60 hover:text-white text-sm transition-colors">
            Legal Info
          </a>
        </div>
      </div>
    </motion.footer>
  );
};