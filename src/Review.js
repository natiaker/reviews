import React, { useState } from 'react';
import reviews from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
    const [index, setIndex] = useState(0);
    const { name, job, image, text } = reviews[index];

    const checkIndex = (i) => {
        if(i > reviews.length - 1) return 0;
        if(i < 0) return reviews.length - 1;
        return i;
    };
    const prevReview = () => {
        setIndex((index) => {
            let newIndex = index - 1;
            return checkIndex(newIndex);
        });
    };
    const nextReview = () => {
        setIndex((index) => {
            let newIndex = index + 1;
            return checkIndex(newIndex);
        });
    };
    const randomReview = () => {
        setIndex(() => {
            let randomIndex = Math.floor(Math.random() * reviews.length);
            if(randomIndex === index) {
                randomIndex = index + 1;
            }
            return checkIndex(randomIndex);
        });
    };

    return (
      <article className='flex flex-col justify-center items-center bg-white px-6 py-8'>
        <div className='img-container relative before:content-[""] before:bg-[#49a6e9] before:absolute before:-top-1 before:-right-2 before:w-full before:h-full before:rounded-full'>
          <img
            className='block relative w-40 h-40 rounded-full object-cover'
            src={image}
            alt={name}
          />
          <span className='quote-icon absolute top-0 left-0 bg-[#49a6e9] rounded-full w-10 h-10 flex justify-center items-center'>
            <FaQuoteRight className='fill-white' />
          </span>
        </div>
        <h4 className='mb-1 text-base tracking-widest font-bold capitalize'>{name}</h4>
        <p className='mb-1 text-[#49a6e9] text-sm uppercase'>{job}</p>
        <p className='mb-3 text-[#617d98] text-center'>{text}</p>
        <div className='button-container flex'>
          <FaChevronLeft className='fill-[#8bcbf9] text-xl mx-2	cursor-pointer' onClick={prevReview}/>
          <FaChevronRight className='fill-[#8bcbf9] text-xl mx-2 cursor-pointer' onClick={nextReview}/>
        </div>
        <button className='mt-3	bg-[#ebf7ff] text-[#49a6e9] px-2 py-1 rounded cursor-pointer text-sm' onClick={randomReview}>
          Surprise Me
        </button>
      </article>
    );
};

export default Review