import { assets } from '@/assets/assets'
import { en } from '@/lang/en'
import { id } from '@/lang/id'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

const Navbar = ({ isDarkMode, setIsDarkMode, language, setLanguage }) => {
    const [isScroll, setIsScroll] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const sideMenuRef = useRef();

    const openMenu = () => {
        setIsMenuOpen(true);
        sideMenuRef.current.style.transform = 'translateX(-16rem)';
    }
    const closeMenu = () => {
        setIsMenuOpen(false);
        sideMenuRef.current.style.transform = 'translateX(16rem)';
    }

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (scrollY > 50) {
                setIsScroll(true)
            } else {
                setIsScroll(false)
            }
        })
    }, [])

    return (
        <>
            <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden'>
                <Image src={assets.header_bg_color} alt='Header Background Color' className='w-full' priority />
            </div>
            <nav className={`w-full fixed px-5 lg:px-8 xl:px[-8%] py-4 flex items-center justify-between z-50 duration-500 ${isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:backdrop-blur dark:bg-darkTheme/50 dark:duration-500 dark:shadow-white/20 duration-500" : ""} ${isMenuOpen ? "h-full backdrop-blur" : ""}`}>
                <a href="#top">
                    <Image
                        src={isDarkMode ? assets.logo_dark : assets.logo}
                        className='w-36 cursor-pointer mr-14'
                        alt='Logo'
                        hidden={isMenuOpen}
                    />
                </a>
                <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? '' : 'bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent duration-500'}`}>
                    <li><a className='font-Ovo' href="#top">{language === 'EN' ? en.navbar.home : id.navbar.home}</a></li>
                    <li><a className='font-Ovo' href="#about">{language === 'EN' ? en.navbar.about : id.navbar.about}</a></li>
                    <li><a className='font-Ovo' href="#services">{language === 'EN' ? en.navbar.services : id.navbar.services}</a></li>
                    <li><a className='font-Ovo' href="#work">{language === 'EN' ? en.navbar.work : id.navbar.work}</a></li>
                    <li><a className='font-Ovo' href="#contact">{language === 'EN' ? en.navbar.contact : id.navbar.contact}</a></li>

                </ul>
                <div className={`flex items-center gap-4 ${isMenuOpen ? "hidden" : ""}`}>
                    <button onClick={() => setIsDarkMode(prev => !prev)}>
                        <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt='Moon Icon' className='w-6 md:hidden lg:block' />
                    </button>
                    <button className='w-12 flex md:hidden lg:hidden xl:flex items-center px-3 py-0 sm:py-0 justify-center border border-gray-500 rounded-full ml-4 font-Ovo dark:border-white/50' onClick={() => setLanguage(prev => prev === 'EN' ? 'ID' : 'EN')}>
                        {language === 'EN' ? 'ID' : 'EN'}
                    </button>
                    <a className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo dark:border-white/50' href="#contact">
                        Contact <Image src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} className='w-3' alt='Arrow Icon' />
                    </a>
                    <button className='block md:hidden ml-3' onClick={openMenu}>
                        <Image src={isDarkMode ? assets.menu_white : assets.menu_black} alt='Menu Icon' className='w-6' />
                    </button>
                </div>

                {/* Mobile Menu */}
                <ul ref={sideMenuRef} className={`flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-white transition dark:bg-darkTheme dark:text-white duration-500 ${isMenuOpen ? "shadow-2xl" : ""}`}>
                    <div className='' onClick={closeMenu}>
                        <Image
                            src={isDarkMode ? assets.logo_dark : assets.logo}
                            className='w-32 cursor-pointer absolute left-10 top-6 flex'
                            alt='Logo'
                        />
                        <Image src={isDarkMode ? assets.close_white : assets.close_black} alt='Close Icon' className='w-5 cursor-pointer absolute right-6 top-6 flex' />
                    </div>
                    <li><a className='font-Ovo' onClick={closeMenu} href="#top">{language === 'EN' ? en.navbar.home : id.navbar.home}</a></li>
                    <li><a className='font-Ovo' onClick={closeMenu} href="#about">{language === 'EN' ? en.navbar.about : id.navbar.about}</a></li>
                    <li><a className='font-Ovo' onClick={closeMenu} href="#services">{language === 'EN' ? en.navbar.services : id.navbar.services}</a></li>
                    <li><a className='font-Ovo' onClick={closeMenu} href="#work">{language === 'EN' ? en.navbar.work : id.navbar.work}</a></li>
                    <li><a className='font-Ovo' onClick={closeMenu} href="#contact">{language === 'EN' ? en.navbar.contact : id.navbar.contact}</a></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar
