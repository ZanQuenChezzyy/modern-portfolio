import { assets } from '@/assets/assets'
import { en } from '@/lang/en'
import { id } from '@/lang/id'
import Image from 'next/image'
import React from 'react'
import { motion } from 'motion/react'

const Header = ({ language }) => {

    return (
        <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, type: 'keyframes' }}
            >
                <Image src={assets.profile_img} alt='Profile Image' className='rounded-full w-32' />
            </motion.div>
            <motion.h3
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3, type: 'keyframes' }}
                className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'
            >
                {language === 'EN' ? en.header.greeting : id.header.greeting}
            </motion.h3>
            <motion.h1
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5, type: 'keyframes' }}
                className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'
            >
                {language === 'EN' ? en.header.title : id.header.title}
            </motion.h1>
            <motion.p
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.7, type: 'keyframes' }}
                className='max-w-2xl mx-auto font-Ovo'
            >
                {language === 'EN' ? en.header.description : id.header.description}
            </motion.p>
            <motion.div className='flex flex-col sm:flex-row items-center gap-4 mt-4'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1, type: 'keyframes' }}
            >
                <motion.a
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.2, type: 'keyframes' }}
                    href="#contact"
                    className='px-10 py-3 border border-white rounded-full bg-black/80 hover:bg-black duration-500 text-white flex items-center gap-2 dark:bg-transparent dark:hover:bg-darkHover'
                >
                    {language === 'EN' ? en.header.contactMe : id.header.contactMe} <Image src={assets.phone_white} alt='Arrow Icon' className='w-5' />
                </motion.a>
                <motion.a
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.2, type: 'keyframes' }}
                    href="/assets/cv/sample-resume.pdf" download className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white hover:bg-gray-100 duration-500 dark:text-black'>
                    {language === 'EN' ? en.header.downloadCV : id.header.downloadCV} <Image src={assets.document_black} alt='Arrow Icon' className='w-6' />
                </motion.a>
            </motion.div>
        </div>
    )
}

export default Header
