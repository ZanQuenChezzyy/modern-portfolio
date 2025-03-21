import { assets, workData } from '@/assets/assets'
import { en } from '@/lang/en'
import { id } from '@/lang/id'
import { motion } from 'motion/react'
import Image from 'next/image'
import React, { useState } from 'react'

const Work = ({ isDarkMode, language }) => {
    const [visibleCount, setVisibleCount] = useState(4);
    const isAllVisible = visibleCount >= workData.length;

    const handleToggle = () => {
        if (isAllVisible) {
            setVisibleCount(4);
        } else {
            setVisibleCount(prev => Math.min(prev + 4, workData.length));
        }
    };
    return (
        <motion.div id='work' className='w-full px-[12%] py-10 scroll-mt-20'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, type: 'keyframes' }}
        >
            <motion.h4 className='text-center mb-2 text-lg font-Ovo'
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3, type: 'keyframes' }}
            >
                {language === 'EN' ? en.work.subTitle : id.work.subTitle}
            </motion.h4>
            <motion.h2 className='text-center text-5xl font-Ovo'
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5, type: 'keyframes' }}
            >
                {language === 'EN' ? en.work.title : id.work.title}
            </motion.h2>

            <motion.p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7, type: 'keyframes' }}
            >
                {language === 'EN' ? en.work.description : id.work.description}
            </motion.p>

            <motion.div
                className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-10 gap-5 dark:text-black'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.9, type: 'keyframes' }}
            >
                {workData.slice(0, visibleCount).map((project, index) => (
                    <motion.div
                        key={index}
                        style={{ backgroundImage: `url(${project.bgImage})` }}
                        className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group'
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className='bg-white bg-opacity-80 w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between group-hover:bottom-7 group-hover:bg-opacity-100 duration-500'>
                            <div>
                                <h2 className='font-semibold'>{project.title}</h2>
                                <p className='text-sm text-gray-700'>{project.description}</p>
                            </div>
                            <a
                                href={project.link}
                                className={`border rounded-md border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] transition ${project.Linkicon === assets.link_broken ? 'group-hover:bg-slate-300' : 'group-hover:bg-blue-300'}`}
                            >
                                <Image src={project.Linkicon} alt='Link Icon' className='w-5' />
                            </a>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            <motion.button
                onClick={handleToggle}
                className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500 hover:-translate-y-1 dark:text-white dark:border-white dark:hover:bg-darkHover'
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.9, type: 'keyframes' }}
            >
                {isAllVisible ? 'Show Less' : 'Show More'}
                <Image src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold} alt='Right Arrow Icon' className='w-4' />
            </motion.button>
        </motion.div>
    )
}

export default Work
