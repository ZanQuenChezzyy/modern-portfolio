'use client'
import { useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Work from "./components/Work";

export default function Home() {

  const [isDarkMode, setIsDarkMode] = useState(false);
  const [language, setLanguage] = useState('EN'); // Default value

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedLanguage = localStorage.getItem('language');
      if (storedLanguage) {
        setLanguage(storedLanguage);
      }
    }
  }, []); // Add the closing bracket here

  useEffect(() => {
    if (typeof window !== 'undefined' && (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches))) {
      setIsDarkMode(true)
    } else {
      setIsDarkMode(false)
    }
  }, [])

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
      localStorage.theme = 'dark'
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.theme = ''
    }
  }, [isDarkMode])

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language])

  return (
    <>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} language={language} setLanguage={setLanguage} />
      <Header isDarkMode={isDarkMode} language={language} />
      <About isDarkMode={isDarkMode} language={language} />
      <Services isDarkMode={isDarkMode} language={language} />
      <Work isDarkMode={isDarkMode} language={language} />
      <Contact isDarkMode={isDarkMode} language={language} />
      <Footer isDarkMode={isDarkMode} language={language} />
    </>
  );
}
