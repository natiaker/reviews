import React from "react";
import Review from "./Review";

function App() {
  return (
    <main className='flex flex-col justify-center items-center min-h-screen bg-[#f1f5f8]'>
      <div className='container  w-4/5 h-auto max-w-2xl'>
        <div className='title text-center mb-16	'>
          <h2 className='text-4xl tracking-widest mb-3	 font-bold text-[#102a42]'>
            Our Reviews
          </h2>
          <div className='underline w-20	h-1	bg-sky-500 mx-auto'></div>
        </div>
        <Review />
      </div>
    </main>
  );
}

export default App;
