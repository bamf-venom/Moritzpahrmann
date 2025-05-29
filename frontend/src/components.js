import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Header Component
export const Header = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-white cursor-pointer" onClick={() => scrollToSection('hero')}>MBP</div>
        
        <nav className="hidden md:flex space-x-8">
          <button onClick={() => scrollToSection('about')} className="text-white/80 hover:text-white transition-colors duration-300">About me</button>
          <button onClick={() => scrollToSection('contact')} className="text-white/80 hover:text-white transition-colors duration-300">Contact</button>
          <button onClick={() => scrollToSection('data-protection')} className="text-white/80 hover:text-white transition-colors duration-300">data protection</button>
          <button onClick={() => scrollToSection('legal')} className="text-white/80 hover:text-white transition-colors duration-300">Legal Info</button>
        </nav>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button className="text-white">
            <div className="w-6 h-0.5 bg-white mb-1"></div>
            <div className="w-6 h-0.5 bg-white mb-1"></div>
            <div className="w-6 h-0.5 bg-white"></div>
          </button>
        </div>
        
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
    <section id="hero" className="relative h-screen overflow-hidden">
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
  const [isExpanded, setIsExpanded] = useState(false);
  
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
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-black border border-black px-8 py-3 self-start hover:bg-black hover:text-white transition-all duration-300"
        >
          {isExpanded ? 'Show Less' : 'Read More'}
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
        <p className="text-white/80 leading-relaxed mb-4">
          I create high-quality 3D renders and designs that will support your next digital visualization project.
        </p>
        
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="w-16 h-0.5 bg-white/30 my-6"></div>
              <p className="text-white/80 leading-relaxed mb-4">
                My journey in VFX started during my studies where I discovered my passion for creating immersive digital worlds. 
                I specialize in 3D modeling, texturing, lighting, and animation using industry-standard software.
              </p>
              <p className="text-white/80 leading-relaxed mb-4">
                Each project challenges me to push creative boundaries while maintaining technical excellence. 
                I believe in the power of visual storytelling to create emotional connections and memorable experiences.
              </p>
              <p className="text-white/80 leading-relaxed">
                Whether working on personal projects or collaborating with clients, I bring dedication, creativity, 
                and technical expertise to every frame.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
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
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Desert Background Placeholder */}
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-600 via-orange-500 to-amber-700">
          {/* Desert dunes simulation */}
          <div className="absolute bottom-0 left-0 w-full h-1/2">
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-amber-800 to-orange-600 rounded-t-full transform rotate-1"></div>
            <div className="absolute bottom-0 right-0 w-2/3 h-24 bg-gradient-to-t from-yellow-700 to-yellow-500 rounded-t-full transform -rotate-2"></div>
            <div className="absolute bottom-0 left-1/4 w-1/2 h-20 bg-gradient-to-t from-orange-700 to-orange-500 rounded-t-full"></div>
          </div>
          {/* Sky gradient */}
          <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-yellow-300 via-orange-400 to-transparent"></div>
        </div>
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
            <div className="relative mx-auto">
              {/* Character body */}
              <div className="w-16 h-24 bg-blue-800 rounded-lg mx-auto relative">
                {/* Character head */}
                <div className="w-12 h-12 bg-blue-700 rounded-full absolute -top-3 left-1/2 transform -translate-x-1/2"></div>
                {/* Character arms */}
                <div className="w-3 h-12 bg-blue-900 rounded absolute top-2 -left-4"></div>
                <div className="w-3 h-12 bg-blue-900 rounded absolute top-2 -right-4"></div>
                {/* Character legs */}
                <div className="w-4 h-8 bg-blue-900 rounded absolute -bottom-8 left-2"></div>
                <div className="w-4 h-8 bg-blue-900 rounded absolute -bottom-8 right-2"></div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* All Videos Button */}
        <motion.button 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          whileHover={{ scale: 1.05 }}
          onClick={() => {
            const element = document.getElementById('all-videos');
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          className="absolute bottom-16 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-sm border border-white/30 text-white px-6 py-3 rounded hover:bg-white/20 transition-all duration-300 cursor-pointer"
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

// About Me Section Component
export const AboutMeSection = () => {
  return (
    <section id="about" className="bg-gray-900 py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-light text-white mb-8">About Me</h2>
          <div className="w-24 h-0.5 bg-white mx-auto mb-12"></div>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gray-600 aspect-square rounded-lg mb-6"></div>
            <p className="text-white/60 text-sm text-center">Professional VFX Artist Portrait</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-light text-white mb-4">Moritz Pahrmann</h3>
            <p className="text-white/80 leading-relaxed">
              As a dedicated VFX artist currently studying at FH Vorarlberg, I am passionate about creating stunning visual experiences that captivate and inspire. My specialization in 3D Visual Effects combines technical expertise with creative vision.
            </p>
            <p className="text-white/80 leading-relaxed">
              I have experience in various aspects of VFX production including 3D modeling, texturing, lighting, animation, and compositing. My work spans from architectural visualization to character animation and environmental design.
            </p>
            <div className="space-y-3">
              <h4 className="text-xl text-white font-semibold">Education & Experience</h4>
              <ul className="text-white/70 space-y-2">
                <li>• 3D Visual Effects Student at FH Vorarlberg</li>
                <li>• Freelance VFX Artist</li>
                <li>• Specialized in Architectural Visualization</li>
                <li>• Character Animation & Environmental Design</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );

// About Me Section Component
export const AboutMeSection = () => {
  return (
    <section id="about" className="bg-gray-900 py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-light text-white mb-8">About Me</h2>
          <div className="w-24 h-0.5 bg-white mx-auto mb-12"></div>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gray-600 aspect-square rounded-lg mb-6"></div>
            <p className="text-white/60 text-sm text-center">Professional VFX Artist Portrait</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-light text-white mb-4">Moritz Pahrmann</h3>
            <p className="text-white/80 leading-relaxed">
              As a dedicated VFX artist currently studying at FH Vorarlberg, I am passionate about creating stunning visual experiences that captivate and inspire. My specialization in 3D Visual Effects combines technical expertise with creative vision.
            </p>
            <p className="text-white/80 leading-relaxed">
              I have experience in various aspects of VFX production including 3D modeling, texturing, lighting, animation, and compositing. My work spans from architectural visualization to character animation and environmental design.
            </p>
            <div className="space-y-3">
              <h4 className="text-xl text-white font-semibold">Education & Experience</h4>
              <ul className="text-white/70 space-y-2">
                <li>• 3D Visual Effects Student at FH Vorarlberg</li>
                <li>• Freelance VFX Artist</li>
                <li>• Specialized in Architectural Visualization</li>
                <li>• Character Animation & Environmental Design</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// All Videos Section Component
export const AllVideosSection = () => {
  const videos = [
    { id: 1, title: "Latest Robot Project", description: "Green mech animation showcase", duration: "2:30" },
    { id: 2, title: "Midterm300", description: "Desert environment with character", duration: "1:45" },
    { id: 3, title: "Interior Visualization", description: "Photorealistic bedroom render", duration: "1:20" },
    { id: 4, title: "Sci-Fi Environment", description: "Futuristic cityscape animation", duration: "3:15" },
    { id: 5, title: "Character Study", description: "Detailed character modeling", duration: "2:10" },
    { id: 6, title: "Lighting Demo", description: "Advanced lighting techniques", duration: "1:55" }
  ];

  return (
    <section id="all-videos" className="bg-black py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-light text-white mb-8">All Videos</h2>
          <p className="text-white/70 max-w-3xl mx-auto">
            Explore my complete collection of VFX projects, animations, and visual effects work.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group cursor-pointer"
            >
              <div className="relative bg-gray-600 aspect-video rounded-lg overflow-hidden mb-4">
                <div className="w-full h-full bg-gray-600 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                      <div className="w-0 h-0 border-l-[12px] border-l-white border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1"></div>
                    </div>
                    <span className="text-white/60 text-sm">{video.duration}</span>
                  </div>
                </div>
                <div className="absolute top-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
                  {video.duration}
                </div>
              </div>
              <h3 className="text-white font-semibold mb-2 group-hover:text-green-400 transition-colors">
                {video.title}
              </h3>
              <p className="text-white/60 text-sm">{video.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Contact Section Component
export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="bg-gradient-to-b from-gray-900 to-black py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-light text-white mb-8">Contact</h2>
          <p className="text-white/70 max-w-3xl mx-auto">
            Ready to bring your vision to life? Let's discuss your next VFX project.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-light text-white mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex-shrink-0"></div>
                  <span className="text-white/80">moritz.pahrmann@example.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex-shrink-0"></div>
                  <span className="text-white/80">+43 XXX XXX XXXX</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex-shrink-0"></div>
                  <span className="text-white/80">Vorarlberg, Austria</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-xl text-white mb-4">Services</h4>
              <ul className="text-white/70 space-y-2">
                <li>• 3D Modeling & Animation</li>
                <li>• Architectural Visualization</li>
                <li>• Character Design</li>
                <li>• Visual Effects</li>
                <li>• Post-Production</li>
              </ul>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-green-500 transition-colors"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-green-500 transition-colors"
                />
              </div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-green-500 transition-colors"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows={6}
                value={formData.message}
                onChange={handleInputChange}
                required
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-green-500 transition-colors resize-none"
              ></textarea>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg transition-colors duration-300"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Data Protection Section Component
export const DataProtectionSection = () => {
  return (
    <section id="data-protection" className="bg-gray-800 py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-light text-white mb-8">Data Protection</h2>
          <div className="w-24 h-0.5 bg-white mx-auto"></div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="prose prose-invert max-w-none"
        >
          <div className="text-white/80 space-y-6 leading-relaxed">
            <h3 className="text-2xl text-white mb-4">Privacy Policy</h3>
            <p>
              This privacy policy explains how I collect, use, and protect your personal information when you visit this website or contact me for services.
            </p>
            
            <h4 className="text-xl text-white mb-3">Information Collection</h4>
            <p>
              I collect information you provide directly to me, such as when you fill out a contact form, send me an email, or request my services. This may include your name, email address, phone number, and any message content.
            </p>
            
            <h4 className="text-xl text-white mb-3">Use of Information</h4>
            <p>
              I use the information collected to:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li>Respond to your inquiries and provide requested services</li>
              <li>Communicate with you about projects and services</li>
              <li>Improve my website and services</li>
            </ul>
            
            <h4 className="text-xl text-white mb-3">Data Security</h4>
            <p>
              I implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>
            
            <h4 className="text-xl text-white mb-3">Contact</h4>
            <p>
              If you have questions about this privacy policy or how your data is handled, please contact me at moritz.pahrmann@example.com.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Legal Info Section Component
export const LegalInfoSection = () => {
  return (
    <section id="legal" className="bg-gray-900 py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-light text-white mb-8">Legal Information</h2>
          <div className="w-24 h-0.5 bg-white mx-auto"></div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white/80 space-y-6 leading-relaxed"
        >
          <h3 className="text-2xl text-white mb-4">Impressum / Legal Notice</h3>
          
          <div>
            <h4 className="text-xl text-white mb-3">Information according to § 5 TMG</h4>
            <p>
              Moritz Pahrmann<br />
              VFX Artist & 3D Designer<br />
              Vorarlberg, Austria<br />
              Email: moritz.pahrmann@example.com
            </p>
          </div>
          
          <div>
            <h4 className="text-xl text-white mb-3">Liability for Contents</h4>
            <p>
              As service providers, we are liable for own contents of these websites according to Sec. 7, Para. 1 of the TMG (Telemediengesetz – Tele Media Act by German law). However, we are not under obligation to monitor externally provided information or to investigate circumstances indicating illegal activity.
            </p>
          </div>
          
          <div>
            <h4 className="text-xl text-white mb-3">Copyright</h4>
            <p>
              The content and works on these pages created by the site operator are subject to German copyright law. The duplication, processing, distribution and any kind of exploitation beyond the scope of copyright require the written consent of the author or creator.
            </p>
          </div>
          
          <div>
            <h4 className="text-xl text-white mb-3">Disclaimer</h4>
            <p>
              This website is a portfolio showcase for educational and professional purposes. All 3D renders, animations, and VFX work displayed are original creations by Moritz Pahrmann unless otherwise noted.
            </p>
          </div>
        </motion.div>
      </div>
    </section>