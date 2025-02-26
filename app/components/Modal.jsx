import React from 'react';

const Modal = ({ message, onClose }) => {
    return (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
            <div className='bg-white p-10 rounded-2xl shadow-lg'>
                <h2 className='text-lg font-semibold text-gray-700 font-Ovo text-center'>Success!</h2>
                <p className='mt-4 text-sm font-Ovo'>{message}</p>
                <button
                    onClick={onClose}
                    className='mt-7 py-2 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-xl mx-auto hover:bg-black duration-500'
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default Modal;
