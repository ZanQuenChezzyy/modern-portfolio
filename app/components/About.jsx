import { assets, infoList, toolsData } from '@/assets/assets'
import { en } from '@/lang/en'
import { id } from '@/lang/id'
import { motion } from 'motion/react'
import Image from 'next/image'
import React from 'react'

const About = ({ isDarkMode, language }) => {
    return (
        <motion.div id='about' className='w-full px-[12%] py-10 scroll-mt-20'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, type: 'keyframes' }}
        >
            <motion.h4 className='text-center mb-2 text-lg font-Ovo'
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, type: 'keyframes' }}
            >
                {language === 'EN' ? en.about.subTitle : id.about.subTitle}
            </motion.h4>
            <motion.h2 className='text-center text-5xl font-Ovo'
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3, type: 'keyframes' }}
            >
                {language === 'EN' ? en.about.title : id.about.title}
            </motion.h2>

            <div className='flex justify-center'>
                <motion.div className='flex w-max flex-col lg:flex-row items-center gap-20 my-20'
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, type: 'keyframes' }}
                >
                    <motion.div className='w-64 sm:w-80 rounded-3xl max-w-none'
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.5, type: 'keyframes' }}
                    >
                        <Image src={assets.user_image} alt='User Image' className='w-full rounded-3xl' />
                    </motion.div>
                    <motion.div className='flex-1'
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.8, type: 'keyframes' }}
                    >
                        <p className='text-justify mb-10 max-w-2xl font-Ovo'>
                            {language === 'EN' ? en.about.description : id.about.description}
                        </p>
                        <motion.ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 1, type: 'keyframes' }}
                        >
                            {infoList.map(({ icon, iconDark, title, description }, index) => (
                                <motion.li key={index} className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50'
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <Image src={isDarkMode ? iconDark : icon} alt={title} className='w-7 mt-3' />
                                    <h3 className='my-4 font-semibold text-gray-700 dark:text-white'>{language === 'EN' ? en.about[title] : id.about[title]}</h3>
                                    <p className='text-gray-600 text-sm dark:text-white/80'>{language === 'EN' ? en.about[description] : id.about[description]}</p>
                                </motion.li>
                            ))}
                        </motion.ul>

                        <motion.h4 className='my-6 text-gray-700 font-Ovo dark:text-white/80'
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 1, type: 'keyframes' }}
                        >
                            {language === 'EN' ? en.about.toolsTitle : id.about.toolsTitle}
                        </motion.h4>
                        <motion.ul
                            className="grid grid-cols-4 sm:grid-cols-6 gap-3 sm:gap-5"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 1, type: 'keyframes' }}
                        >
                            {toolsData.map((tool, index) => {
                                const displayTool = tool === assets.github_white ? (isDarkMode ? assets.github_white : assets.github_black) : tool;
                                return (
                                    <motion.li
                                        key={index}
                                        className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500"
                                        whileHover={{ scale: 1.1 }}
                                    >
                                        <Image src={displayTool} alt={tool} className="w-5 sm:w-7" />
                                    </motion.li>
                                );
                            })}
                        </motion.ul>
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    )
}

export default About
