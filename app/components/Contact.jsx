import { assets } from '@/assets/assets';
import { motion } from 'motion/react'
import Image from 'next/image';
import React, { useState } from 'react';
import Modal from './Modal';

const Contact = () => {
    const [result, setResult] = useState("");
    const [buttonText, setButtonText] = useState("Submit Now");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState({ name: "", email: "", message: "" });

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        setIsSubmitting(true);
        setErrors({ name: "", email: "", message: "" });

        const formData = new FormData(event.target);
        formData.append("access_key", process.env.NEXT_PUBLIC_ACCESS_KEY);

        let hasError = false;
        const name = formData.get('name');
        if (!name || name.length < 3 || name.length > 45) {
            setErrors(prev => ({ ...prev, name: "Name must be between 3 and 45 characters." }));

            hasError = true;
        }
        const email = formData.get('email');
        if (!email || email.length < 3 || email.length > 45) {
            setErrors(prev => ({ ...prev, email: "Email must be between 3 and 45 characters." }));

            hasError = true;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            setErrors(prev => ({ ...prev, email: "Email is invalid." }));
            hasError = true;
        }
        const message = formData.get('message');
        if (!message || message.length <= 10) {
            setErrors(prev => ({ ...prev, message: "Message must be more than 10 characters." }));

            hasError = true;
        }

        if (hasError) {
            setIsSubmitting(false);
            return; // Stop submission if there are errors
        }

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();
        setIsSubmitting(false);

        if (data.success) {
            setResult("Form Submitted Successfully!");
            setButtonText("Submitted Successfully!");
            setIsModalOpen(true);
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
            setButtonText("Submit Now");
        }
    };

    return (
        <motion.div id='contact' className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/assets/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, type: 'keyframes' }}
        >
            <motion.h4 className='text-center mb-2 text-lg font-Ovo'
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3, type: 'keyframes' }}
            >
                Connect With Me
            </motion.h4>
            <motion.h2 className='text-center text-5xl font-Ovo'
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5, type: 'keyframes' }}
            >
                Get in touch
            </motion.h2>

            <motion.p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7, type: 'keyframes' }}
            >
                I am a Backend Developer from Indonesia with 10 years of experience
                in multiple companies like Microsoft, Tesla and Apple.
            </motion.p>

            <motion.form onSubmit={onSubmit} className='max-w-2xl mx-auto'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.9, type: 'keyframes' }}
            >
                <div className='grid grid-cols-auto gap-6 mt-10 mb-8'>
                    <div>
                        <motion.input type="text" placeholder='Enter Your Name' name='name' required className='w-full flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-xl bg-white hover:border-gray-800 duration-500 dark:bg-darkHover/30 dark:border-white/50 dark:hover:border-white'
                            initial={{ x: -50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 1.1, type: 'keyframes' }}
                        />
                        {errors.name && <p className='text-red-500'>{errors.name}</p>}
                    </div>
                    <div>
                        <motion.input type="email" placeholder='Enter Your Email' name='email' required className='w-full flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-xl bg-white hover:border-gray-800 duration-500 dark:bg-darkHover/30 dark:border-white/50 dark:hover:border-white'
                            initial={{ x: 50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 1.2, type: 'keyframes' }}
                        />
                        {errors.email && <p className='text-red-500'>{errors.email}</p>}
                    </div>
                </div>
                <div>
                    <motion.textarea rows={4} placeholder='Enter Your Message' name='message' required className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-xl bg-white hover:border-gray-800 duration-500 dark:bg-darkHover/30 dark:border-white/50 dark:hover:border-white'
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 1.3, type: 'keyframes' }}
                    >
                    </motion.textarea>
                    {errors.message && <p className='text-red-500'>{errors.message}</p>}
                </div>
                <motion.button
                    type='submit'
                    className={`mt-6 py-3 px-8 w-max flex items-center justify-between gap-2 text-white rounded-xl mx-auto hover:bg-black duration-500 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover ${isSubmitting ? 'bg-black/50 hover:bg-black/50 dark:bg-black/10 dark:hover:bg-black/10' : 'bg-black/80 dark:bg-transparent'} `}
                    disabled={isSubmitting}
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1.4, type: 'keyframes' }}
                >
                    {isSubmitting ? "Sending..." : buttonText} <Image src={assets.right_arrow_white} alt='Right Arrow Icon' className='w-4' />
                </motion.button>
            </motion.form>
            {isModalOpen && (
                <Modal
                    message={result}
                    onClose={() => {
                        setIsModalOpen(false);
                        setButtonText("Submit Now");
                    }}
                />
            )}
        </motion.div>
    )
}

export default Contact;
