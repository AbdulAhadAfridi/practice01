import React from 'react';
import Image from 'next/image';
import { IoIosSearch } from 'react-icons/io';
import Blogsection from '../components/blogsection';

const Home = () => {
  return (
    <>
    <Blogsection />
    

<div className="max-w-screen-2xl mx-auto bg-white p-4 sm:p-6 md:p-8 w-full h-auto">
  {/* Main Container */}
  <div className="max-w-7xl mx-auto flex flex-col lg:flex-row">
    {/* Blog Post Section 01 */}
    <div className="bg-white overflow-hidden mt-8 lg:w-2/3">
      <Image
        src="/blog01.png"
        alt="pic"
        width={850}
        height={500}
        className="object-contain w-full"
      />
      <div className="mt-6">
        <div className="flex flex-wrap gap-10">
          <div className="flex items-center">
            <Image
              src="/bloglogoo1.png"
              alt="Icon"
              width={0}
              height={0}
              className="w-5 h-5"
            />
            <p className="text-[#151875] bg-[#FFECE2] w-[160px] h-[23px] text-[14px] ml-2 px-8 py-1">Surf Auxion</p>
          </div>
          <div className="flex items-center">
            <Image
              src="/bloglogoo2.png"
              alt="Icon"
              width={0}
              height={0}
              className="w-5 h-5"
            />
            <p className="text-[#151875] bg-[#FFECE2]  w-[160px] h-[23px] text-[14px] ml-2 px-10 py-1">Aug 09 2020</p>
          </div>
         
        </div>

        <h2 className="text-lg sm:text-xl md:text-[30px]  font-semibold text-[#151875] my-6">
        Mauris at orci non vulputate diam tincidunt nec.        </h2>
        <p className="text-[#8A8FB9] text-[15px] sm:text-base w-[817px] h-[115px] leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.        </p>
        <button className="text-[#151875] font-medium text-[16px] mt-8 mb-12">
          Read More
        </button>
      </div>
      {/* Blog Post Section 02 */}
      <Image
        src="/blog02.png"
        alt="pic"
        width={850}
        height={500}
        className="object-contain w-full"
      />
      <div className="mt-6">
        <div className="flex flex-wrap gap-10">
          <div className="flex items-center">
            <Image
              src="/bloglogoo1.png"
              alt="Icon"
              width={0}
              height={0}
              className="w-5 h-5"
            />
            <p className="text-[#151875] bg-[#FFECE2] w-[160px] h-[23px] text-[14px] ml-2 px-8 py-1">Surf Auxion</p>
          </div>
          <div className="flex items-center">
            <Image
              src="/bloglogoo2.png"
              alt="Icon"
              width={0}
              height={0}
              className="w-5 h-5"
            />
            <p className="text-[#151875] bg-[#FFECE2]  w-[160px] h-[23px] text-[14px] ml-2 px-8 py-1">Aug 09 2020</p>
          </div>
         
        </div>

        <h2 className="text-lg sm:text-xl md:text-[30px]  font-semibold text-[#151875] my-6">
        Aenean vitae in aliquam ultrices lectus. Etiam.       </h2>
        <p className="text-[#8A8FB9] text-[15px] sm:text-base w-[817px] h-[115px] leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.        </p>
        <button className="text-[#24253b] font-medium text-[16px] mt-8 mb-12">
          Read More
        </button>
      </div>
      {/* Blog Post Section 03 */}

      <Image
        src="/blog03.png"
        alt="pic"
        width={850}
        height={500}
        className="object-contain w-full"
      />
      <div className="mt-6">
        <div className="flex flex-wrap gap-10">
          <div className="flex items-center">
            <Image
              src="/bloglogoo1.png"
              alt="Icon"
              width={0}
              height={0}
              className="w-5 h-5"
            />
            <p className="text-[#151875] bg-[#FFECE2] w-[160px] h-[23px] text-[14px] ml-2 px-8 py-1">Surf Auxion</p>
          </div>
          <div className="flex items-center">
            <Image
              src="/bloglogoo2.png"
              alt="Icon"
              width={0}
              height={0}
              className="w-5 h-5"
            />
            <p className="text-[#151875] bg-[#FFECE2]  w-[160px] h-[23px] text-[14px] ml-2 px-10 py-1">Aug 09 2020</p>
          </div>
         
        </div>

        <h2 className="text-lg sm:text-xl md:text-[30px]  font-semibold text-[#151875] my-6">
        Sit nam congue feugiat nisl, mauris amet nisi.         </h2>
        <p className="text-[#8A8FB9] text-[15px] sm:text-base w-[817px] h-[115px] leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.        </p>
        <button className="text-[#151875] font-medium text-[16px] mt-8 mb-12">
          Read More
        </button>
      </div>
       {/* Pagination Section */}
<div className="flex justify-center md:items-center flex-wrap space-x-4  mb-20 w-full  mt-6 lg:ml-[100px]  ">
  <button className="w-8 h-8  flex justify-center items-center  bg-[#FB2CA8] text-gray-800 font-medium">
    1
  </button>
  <button className="w-8 h-8  flex justify-center items-center border bg-white text-gray-800 font-medium">
    2
  </button>
  <button className="   lg:mt-0 w-8 h-8  flex justify-center items-center border bg-white text-gray-800 font-medium">
    3
  </button>
  <button className="  xl:mt-0 w-8 h-8  flex justify-center items-center border bg-white text-gray-800 font-medium">
    4
  </button>
</div>
<Image
        src="/logosec.png"
        alt='icon'
        className='ml-10 mb-10'
        width={904}
        height={93}
        />
    </div>
    
     
    {/* Sidebar */}
    <div className=" ml-16 rounded-[10px] flex flex-col  mt-6 ">
      {/* Search Bar */}
      <h3 className="font-semibold text-[28px] text-[#151875] mb-4">Search</h3>

      <div className="flex items-center border border-gray-400 px-4 py-2  w-[311px] h-[58] ">
        
        <input
          type="text"
          className="flex-grow outline-none text-sm"
          placeholder="Search..."
        />
        <IoIosSearch className="text-black text-2xl" />
      </div>

      {/* Categories */}
      <div className="bg-white p-6 mt-2 ">
        <h3 className="font-semibold text-[28px] text-[#151875]">Categories</h3>
        <ul className="mt-4 space-y-4 text-[16px] text-[#9F9F9F] ">
          <li className=" border  text-[#FFFFFF] bg-[#F939BF]">Hobbies (14) <span className='ml-20'>Women (21)</span></li>
          <li className="   text-[#3F509E] ">Women (21)  <span className='ml-20'>Women (21)</span></li>
          <li className="   text-[#3F509E] ">Women (21)  <span className='ml-20'>Women (21)</span></li>
          <li className="   text-[#3F509E] ">Women (21)  <span className='ml-20'>Women (21)</span></li>
        </ul>
      </div>

      {/* Recent Posts 01 */}
      <div className="bg-white p-6 ">
        <h3 className="font-semibold text-[28px] text-[#151875]">Recent Posts</h3>
        <ul className="mt-8 space-y-4">
          <li className="flex items-center">
            <Image src="/recpost1.png" alt="Post thumbnail" width={70}
              height={52} className="w-[70px] h-[70px]  " />
            <div className="ml-4">
              <a href="#" className="text-black text-sm">It is a long established fact</a>
              <p className="text-gray-500 text-xs">Aug 09 2020</p>
            </div>
          </li>
         {/* Recent Posts 02 */}
          <li className="flex items-center">
            <Image src="/recpost2.png" alt="Post thumbnail" width={70}
              height={0} className="w-[70px] h-[70px]" />
            <div className="ml-4">
            <a href="#" className="text-black text-sm">It is a long established fact</a>
            <p className="text-gray-500 text-xs">Aug 09 2020</p>
            </div>
          </li>
          {/* Recent Posts 03 */}
          <li className="flex items-center">
            <Image src="/recpost3.png" alt="Post thumbnail" width={70}
              height={0} className="w-[70px] h-[70px]" />
            <div className="ml-4">
            <a href="#" className="text-black text-sm">It is a long established fact</a>
            <p className="text-gray-500 text-xs">Aug 09 2020</p>
            </div>
          </li>
          {/* Recent Posts 04 */}
          <li className="flex items-center">
            <Image src="/recpost4.png" alt="Post thumbnail"  width={70}
              height={0}className="w-[70px] h-[70px]" />
            <div className="ml-4">
            <a href="#" className="text-black text-sm">It is a long established fact</a>
            <p className="text-gray-500 text-xs">Aug 09 2020</p>
            </div>
          </li>
          {/* Sale products */}
          <h3 className="font-semibold text-[28px] text-[#151875]">Sale Products </h3>

          <li className="flex items-center">
            <Image src="/salepro01.png" alt="Post thumbnail"  width={70}
              height={0}className="w-[70px] h-[70px]" />
            <div className="ml-4">
            <a href="#" className="text-black text-sm">Elit ornare in enim mauris.</a>
            <p className="text-gray-500 text-xs">Aug 09 2020</p>
            </div>
          </li>
          <li className="flex items-center">
            <Image src="/salepro02.png" alt="Post thumbnail"  width={70}
              height={0}className="w-[70px] h-[70px]" />
            <div className="ml-4">
            <a href="#" className="text-black text-sm">Viverra pulvinar et enim.</a>
            <p className="text-gray-500 text-xs">Aug 09 2020</p>
            </div>
          </li>
          <li className="flex items-center">
            <Image src="/salepro03.png" alt="Post thumbnail"  width={70}
              height={0}className="w-[70px] h-[70px]" />
            <div className="ml-4">
            <a href="#" className="text-black text-sm">Mattis varius donec fdsfd</a>
            <p className="text-gray-500 text-xs">Aug 09 2020</p>
            </div>
          </li>
          {/* offer product */}
            <h3 className="font-semibold text-[28px] text-[#151875]">Offer product</h3>
            <div className="container mx-auto px-4 py-8">
      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
        {/** Card 1 */}
        <div className="text-center">
          <Image
            src="/offer01.png"
            alt="Product 1"
            width={126}
            height={0}
            className="w-32 h-32 mx-auto object-cover"
          />
          <p className="text-[#151875] text-sm mt-2">Duis lectus est.</p>
          <p className="text-gray-400 text-xs">$12.00 - $15.00</p>
        </div>

        {/** Card 2 */}
        <div className="text-center">
          <Image
            src="/offer02.png"
            alt="Product 2"
            width={126}
            height={0}
            className="w-32 h-32 mx-auto object-cover"
          />
          <p className="text-[#151875] text-sm mt-2">Sed placerat.</p>
          <p className="text-gray-400 text-xs">$12.00 - $15.00</p>
        </div>

        {/** Card 3 */}
        <div className="text-center">
          <Image
            src="/offer03.png"
            alt="Product 3"
            width={126}
            height={0}
            className="w-32 h-32 mx-auto object-cover"
          />
          <p className="text-[#151875] text-sm mt-2">Netus proin.</p>
          <p className="text-gray-400 text-xs">$12.00 - $15.00</p>
        </div>

        {/** Card 4 */}
        <div className="text-center">
          <Image
            src="/offer04.png"
            alt="Product 4"
            width={126}
            height={0}
            className="w-32 h-32 mx-auto object-cover"
          />
          <p className="text-[#151875] text-sm mt-2">Platea in.</p>
          <p className="text-gray-400 text-xs">$13.00 - $15.00</p>
        </div>
      </div>

      {/* Social Follow */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-4 text-[#151875]">Follow</h3>
        <div className="flex space-x-4">
        <Image
            src="/logo01.png"
            alt="Product 4"
            width={0}
            height={0}
            className="w-[25] h-[25]  object-cover"
          />
          <Image
            src="/logo02.png"
            alt="Product 4"
            width={0}
            height={0}
            className="w-[25] h-[25]  object-cover"
          />
          <Image
            src="/logo03.png"
            alt="Product 4"
            width={0}
            height={0}
            className="w-[25] h-[25]  object-cover"
          />
        </div>
      </div>

      {/* Tags */}
      <div className="mt-8 w-[228px] h-[64px]">
        <h3 className="text-lg font-semibold mb-4 text-[#151875]">Tags</h3>
        <div className="flex flex-wrap gap-3">
          <a href="#" className="text-[#151875] underline text-[16px]">
            General
          </a>
          <a href="#" className="text-[#FB2E86] underline text-[16px]">
            Aliquet
          </a>
          <a href="#" className="text-[#151875] underline text-[16px]">
            Insas
          </a>
          <a href="#" className="text-[#151875] underline text-[16px]">
            Bibasas
          </a>
          <a href="#" className="text-[#151875] underline text-[16px]">
            Nulla
          </a>
        </div>
      </div>
    </div>

        </ul>
      </div>
    </div>
  </div>
</div>

    
    </>
  );
};

export default Home;
