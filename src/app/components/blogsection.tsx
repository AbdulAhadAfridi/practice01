import React from 'react'

const blog = () => {
  return (
   
    <section className="w-[1920px] h-[286px] bg-[#F6F5FF] ">
   {/* Section Title */}
  <div className='ml-80 py-20 '>
      <h2 className="w-[300px] h-[36px]  sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl font-semibold text-black">Blog Page</h2>
  
      {/* Breadcrumb */}
      <p className="text-black text-sm flex space-x-5  text-center mt-6">
        <span className="text-black text-lg font-semibold">Home .</span>
        <span className="text-black text-lg font-semibold">pages .</span>
        <span className="text-lg text-[#FB2E86]">Blog Page</span>

      </p>
      </div>
  
  </section>
  )
}

export default blog
