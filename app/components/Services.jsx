import { assets, serviceData } from '@/assets/assets';
import { en } from '@/lang/en';
import { id } from '@/lang/id';
import { motion } from 'motion/react';
import Image from 'next/image';
import React, { useState } from 'react';

const Services = ({ isDarkMode, language }) => {
    const [showFullDescriptionIndex, setShowFullDescriptionIndex] = useState(null);

    return (
        <motion.div id='services' className='w-full px-[12%] py-10 scroll-mt-20'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, type: 'keyframes' }}
        >
            <motion.h4 className='text-center mb-2 text-lg font-Ovo'
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3, type: 'keyframes' }}
            >
                {language === 'EN' ? en.services.subTitle : id.services.subTitle}
            </motion.h4>
            <motion.h2 className='text-center text-5xl font-Ovo'
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5, type: 'keyframes' }}
            >
                {language === 'EN' ? en.services.title : id.services.title}
            </motion.h2>

            <motion.p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7, type: 'keyframes' }}
            >
                {language === 'EN' ? en.services.description : id.services.description}
            </motion.p>

            <motion.div className='grid grid-cols-auto gap-6 my-10'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.9, type: 'keyframes' }}
            >
                {serviceData.map(({ icon, iconDark, title, description }, index) => (
                    <motion.div key={index} className='border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white'
                        whileHover={{ scale: 1.05 }}
                    >
                        <Image src={isDarkMode ? iconDark : icon} alt={title} className='w-10' />
                        <h3 className='text-lg my-4 text-gray-700 dark:text-white'>{language === 'EN' ? en.services[title] : id.services[title]}</h3>
                        <p className='text-sm text-gray-600 leading-5 dark:text-white/80 text-justify'>
                            {showFullDescriptionIndex !== index ? (language === 'EN' ? en.services[description].slice(0, 65) + (en.services[description].length > 65 ? '...' : '') : id.services[description].slice(0, 65) + (id.services[description].length > 65 ? '...' : '')) : null}
                            {showFullDescriptionIndex === index && (
                                <span className='text-sm text-gray-600 leading-5 dark:text-white/80 text-justify'>
                                    {language === 'EN' ? en.services[description] : id.services[description]}
                                </span>
                            )}
                        </p>
                        <a id='readMore' className='flex items-center gap-2 text-sm mt-5' onClick={(e) => { e.preventDefault(); setShowFullDescriptionIndex(showFullDescriptionIndex === index ? null : index); }}>
                            {showFullDescriptionIndex === index ? language === 'EN' ? en.services.showLess : id.services.showLess : language === 'EN' ? en.services.readMore : id.services.readMore} <Image src={showFullDescriptionIndex === index ? (isDarkMode ? assets.up_arrow_white : assets.up_arrow_black) : (isDarkMode ? assets.down_arrow_white : assets.down_arrow_black)} alt='Arrow Icon' className='w-4' />

                        </a>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    )
}

export default Services;
