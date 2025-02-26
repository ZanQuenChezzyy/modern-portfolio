import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
    return (
        <div className='mt-20'>
            <div className='text-center'>
                <Image src={assets.logo} alt='Logo' className='w-36 mx-auto mb-2' />
                <div className='w-max flex items-center gap-2 mx-auto'>
                    <Image src={assets.mail_icon} alt='Mail Icon' className='w-6' />
                    work.andereyan@gmail.com
                </div>
            </div>

            <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
                <p>© 2025 Andereyan Muhammat. All Right Reserved.</p>
                <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
                    <li><a target='__blank' href="https://instagram.com/zanquenchezzy">Instagram</a></li>
                    <li><a target='__blank' href="https://instagram.com/zanquenchezzy">Github</a></li>
                    <li><a target='__blank' href="https://instagram.com/zanquenchezzy">LinkedIn</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer