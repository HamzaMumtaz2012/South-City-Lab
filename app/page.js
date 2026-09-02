'use client'
import Image from "next/image";
import ServiceCard from "@/Components/ServiceCard";
import { useState, useEffect } from "react";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { id: 0, src: "/Slider01.jpg", alt: "South City Lab - Slide 1" },
    { id: 1, src: "/Slider02.jpg", alt: "South City Lab - Slide 2" },
    { id: 2, src: "/Slider03.jpg", alt: "South City Lab - Slide 3" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  const goToSlide = (index) => setCurrentSlide(index);

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Announcement Bar */}
      <div className="bg-gray-50 py-2 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <h1 className="text-lg font-semibold text-red-600">Welcome to South City Lab</h1>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <svg 
                  className="text-red-600 h-5 w-5 shrink-0" 
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M1.5 4.5a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 4.5v15a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 19.5v-15zM3.25 5l8.75 6.562L20.75 5H3.25z" />
                </svg>
                <a href="mailto:info@southcitylab.org" className="text-gray-600 hover:text-red-600 transition-colors">info@southcitylab.org</a>
              </div>
              <div className="flex items-center gap-2">
                <svg 
                  className="text-red-600 h-5 w-5 shrink-0" 
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.27c1.21.49 2.53.76 3.88.76.55 0 1 .45 1 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.35.27 2.67.76 3.88.11.33.03.71-.27 1.11l-2.2 2.2z" />
                </svg>
                <a href="tel:02135373300" className="text-gray-600 hover:text-red-600 transition-colors">021-35373300</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <img className="h-12" src="/Logo.jpeg" alt="South City Lab Logo" />
            </div>
            <ul className="hidden md:flex items-center gap-8">
              <li><a href="#" className="text-red-400 font-semibold hover:text-red-600 transition-colors">Home</a></li>
              <li><a href="#" className="text-red-400 hover:font-semibold transition-all">About</a></li>
              <li><a href="#" className="text-red-400 hover:font-semibold transition-all">Locations</a></li>
              <li><a href="#" className="text-red-400 hover:font-semibold transition-all">Covid Section</a></li>
              <li><a href="#" className="text-red-400 hover:font-semibold transition-all">Contact Us</a></li>
            </ul>
          </div>
        </div>
      </nav>

<div className="hero flex items-center">
      {/* Hero Carousel */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        <div className="relative w-full rounded-lg overflow-hidden shadow-lg bg-gray-900">
          {/* Slides Container */}
          <div className="relative h-56 md:h-96 bg-gray-900">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  index === currentSlide ? "opacity-100" : "opacity-0"
                }`}
              >
                <img
                  src={slide.src}
                  alt={slide.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Carousel Indicators */}
          <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-white w-8"
                    : "bg-white/60 hover:bg-white"
                }`}
                aria-current={index === currentSlide}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Previous Button */}
          <button
            onClick={prevSlide}
            className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            aria-label="Previous slide"
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 hover:bg-white/50 group-focus:ring-4 group-focus:ring-white transition-colors">
              <svg
                className="w-5 h-5 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m15 19-7-7 7-7"
                />
              </svg>
            </span>
          </button>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            aria-label="Next slide"
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 hover:bg-white/50 group-focus:ring-4 group-focus:ring-white transition-colors">
              <svg
                className="w-5 h-5 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m9 5 7 7-7 7"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        <div className="bg-white rounded-2xl shadow-md p-8">
          <div className="form">
          <h2 className="text-2xl font-extralight font-sans text-gray-800 mb-4">USER ID</h2>
            <input className="bg-[#f8f9fa] h-10 p-2 w-[90%] mb-6 rounded-md" type="text" placeholder="User Id"/>
          <h2 className="text-2xl font-extralight font-sans text-gray-800 mb-4">PASSWORD</h2>
            <input type="text" className="bg-[#f8f9fa] h-10 p-2 w-[90%] rounded-md" placeholder="Password"/>
            <div className="w-full flex justify-end">
            <button className="bg-red-600 py-1 px-4 rounded-sm text-white mt-3 mr-16">Login</button>
            </div>
          </div>
        </div>
      </div>
</div>
      {/* About Us Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="flex flex-col">
              <h1 className="text-5xl font-bold text-red-600 mb-4">About Us</h1>
              <div className="w-full h-[0.5px] bg-red-600 mb-6"></div>
              <p className="text-gray-700 text-base leading-relaxed mb-8 font-light">
                Our team consists of hematologists, chemical pathologists, microbiologists 
                and histopathologists. The accuracy and precision of the tests are 
                monitored by strict internal quality control procedures. Most of the special 
                tests are reported within 12 to 24 hrs. The laboratory is equipped with state-
                of-the-art instruments such as the Hitachi Cobas, Vitors, Bactec, Sysmex 
                hematology analyzer and Sysmex coagulation analyzer. They enable us to do 
                all kinds of routine and special tests in all disciplines of pathology: 
                Biochemistry, Hematology, Microbiology, Immunology, Histopathology and 
                Cytology
              </p>
              <button className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition-colors w-fit">
                Read More
              </button>
            </div>

            {/* Right Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <img 
                  src="/about.jpg" 
                  alt="South City Lab" 
                  className="w-full max-w-md rounded-lg shadow-lg"
                />
               
              </div>
            </div>
          </div>
        </div>
      </div>
        {/* Services Section */}
      <div className="services-section py-4">
        <div className="top text-center w-full">

        <samp className="text-5xl block tracking-tighter text-red-500 my-2">Service We Offer</samp>
        <strong className="text-2xl">Pathological Laboratory services including:</strong>
        <div className="w-full h-px my-3 bg-red-700"></div>

        </div>
        <div className="services grid grid-cols-3 py-7 gap-y-21 ">
          <ServiceCard text="ROUTINE TEST"/>
          <ServiceCard text="HORMONES"/>
          <ServiceCard text="CHEMISTRY"/>
          <ServiceCard text="VIROLOGY"/>
          <ServiceCard text="MOLECULAR PATHOLOGY (PCR)"/>
          <ServiceCard text="MICROBIOLOGY"/>
          <ServiceCard text="HISTOPATHOLOGY"/>
          <ServiceCard text="MOLECULAR PATHOLOGY (PCR)"/>
          <ServiceCard text="COVID 19"/>
        </div>
          </div>
          {/* Quick Facilities */}
      <div className="quick-facilities bg-white ">
        <h1 className="text-5xl text-red-600 text-center  py-4">Our Quick Facilities</h1>
        <div className="w-full h-px my-3 bg-red-700"></div>
        <div className="container flex justify-center mx-auto gap-10">
          <div className="left ml-15">
          <img src="/CovidSectionImage.jpg" alt="" />
          </div>
          <div className="right flex px-9   justify-end items-center w-[50%] ">
            <div className="flex flex-col items-center w-full space-y-1">
<span className="text-3xl font-sans font-medium">COVID PCR AND </span> 
           <samp className="text-3xl  font-medium text-gray-400">ANTI-BODY TESTING </samp> 
           <samp className="text-lg  font-medium text-red-600">The Trusted Leader In Caring </samp>
           <samp className="text-lg  font-medium text-red-600">For People & Advancing Health</samp> 
           <samp className="text-3xl  font-medium bg-gray-200">FOR INTERNATIONAL PASSENGERS</samp>
           <samp className="w-full ">
            <span ><img className="inline" src="/EmirateLogo.jpg" alt="" /></span>
            <span><img className="inline mx-2" src="/QatarAirLineLogo.jpg" alt="" /></span>
            <span><img className="inline" src="/FlyDubaiLogo.jpg" alt="" /></span>
           </samp>
           <div className='h-px w-full bg-red-600'></div>
            </div>
          </div>
        </div>
    
      </div>
      {/* Home-sampling */}
<div className="home-sampling-section bg-white mt-10">
  <div className="container flex justify-center items-center  w-full pl-20">
<div className="left flex flex-col items-center w-[90%] ">
  <h1 className="text-6xl text-gray-500 font-semibold">Home Sampling</h1>
  <samp className="text-xl text-red-600 font-semibold block">Get Accurate and Fast</samp>
  <samp className="text-xl text-red-600 font-semibold mb-1">Routine Test Result with in same day</samp> 
  <samp className="text-2xl font-medium bg-gray-300 w-full ">GET YOUR SAMPLE COLLECTION AT YOUR DOOR STEP</samp>
  <div className="h-px w-full bg-red-500 mt-4"></div>
</div>
<div className="right w-full flex justify-center">
  <img className="rounded-xl mt-10" src="/homeCollectionImage.jpg" alt="" />
</div>
  </div>
</div>

    {/* Footer */}
    <footer className="bg-white py-16 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Left Column - Logo & Description */}
          <div>
            <img className="h-25 mb-4 " src="/Logo.jpeg" alt="South City Lab Logo" />
            <p className="text-red-600 text-xl leading-relaxed font-light max-w-[260px]">
              A leading Private Laboratory in Karachi offering the highest standards of laboratory services.
            </p>
          </div>

          {/* Middle Column - Quick Links */}
          <div>
            <h3 className="text-red-600 text-2xl font-bold mb-6">Quick Link</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-700 hover:text-red-600 transition-colors text-lg font-medium">About US</a></li>
              <li><a href="#" className="text-gray-700 hover:text-red-600 transition-colors text-lg font-medium">Service</a></li>
              <li><a href="#" className="text-gray-700 hover:text-red-600 transition-colors text-lg font-medium">Covid Test</a></li>
              <li><a href="#" className="text-gray-700 hover:text-red-600 transition-colors text-lg font-medium">Contact Us</a></li>
            </ul>
          </div>

          {/* Right Column - Newsletter */}
          <div>
            <h3 className="text-red-600 text-2xl font-bold mb-4">Subscribe To Our Newsletter</h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-4 font-medium">
              Subscribe to the our mailing list to recevie updtes on new arrivals, special offers and other discount information.
            </p>
            <button className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition-colors text-md font-medium">
              Subscribe
            </button>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-8 mb-8 pb-8 border-b border-gray-300 ">
          <a href="#" className="text-red-600 hover:text-red-700 transition-colors">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
          <a href="#" className="text-red-600 hover:text-red-700 transition-colors">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75-2.35 7-6 7-10.55A4.47 4.47 0 0023 3z"/>
            </svg>
          </a>
          <a href="#" className="text-red-600 hover:text-red-700 transition-colors">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
          </a>
        </div>

      </div>
    </footer>
        {/* Copyright & Credits */}
    
        <div className="text-center w-[100vw] bg-red-500 py-4 ">
          <p className="text-white text-2xl mb-4">
            All rights reserved by <span className="font-bold">South City Lab.</span> Copyright - 2021
          </p>
          <p className="text-white text-lg ">
            Website Developed By: <a href="#" className="text-white underline">Business Brain System</a>
          </p>
        </div>
 
</div>
  )}
