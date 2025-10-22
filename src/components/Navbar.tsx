import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between p-4'>
      {/* Search Bar */}
      <div className='hidden md:flex'>
<Image src="/search.png" alt="search icon" width={14} height={14} />
<input type="text" placeholder='Search...' />


      </div>
      {/* Icons and User */}
      <div className='flex items-center gap-6'>
        <div className='bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer'></div>
          <Image src="/message.png" alt="message icon" width={20} height={20} />
          <div className='flex items-center gap-6'>
        <div className='bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer'>
            <Image src="/announcement.png" alt="announcement icon" width={32} height={32} />
          </div>
          <div className='flex flex-col'>
            <span className='text-xs leading-3 font-medium'>John Doe</span>
            <span className=''>Admin</span>
          </div>
      </div>

      
      </div>
  )
};

export default Navbar;