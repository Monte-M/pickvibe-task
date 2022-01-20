import Image from 'next/image';
import { useState } from 'react';
import MenuItem from './MenuItem';

const MenuContainer = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <div className='w-1/5 h-auto my-5 lg:ml-5 mr-0 lg:px-6'>
      <div className='flex items-center border-b border-gray-400 py-2 px-2'>
        <div className='hidden sm:block'>
          <Image
            src='/img/icons/adminIcon.png'
            width={30}
            height={30}
            alt='admin-img'
          />
        </div>

        <h1 className='text-white sm:ml-4'>Admin</h1>
      </div>
      <div className='p-2 bg-gray-100 mt-6 rounded-l-3xl lg:w-96 flex items-center'>
        <Image
          src='/img/icons/home.png'
          width={20}
          height={20}
          alt='home-img'
        />
        <h1 className='font-semibold text-sm ml-4 sm:block hidden'>
          CRUD example
        </h1>
      </div>
      <div
        className='px-2 py-3 flex items-center'
        onClick={() => setToggle(!toggle)}
      >
        <div className='hidden sm:block'>
          <Image
            src='/img/icons/box.png'
            width={20}
            height={20}
            alt='box-img'
          />
        </div>

        <h4 className='lg:ml-4 ml-1 text-white text-sm'>Menu item </h4>
        <i className='fa fa-angle-up text-white text-sm lg:ml-16 ml-1'></i>
      </div>
      {toggle && (
        <div className='bg-blue-900 rounded-sm'>
          <MenuItem />
          <MenuItem />
          <MenuItem />
        </div>
      )}
    </div>
  );
};

export default MenuContainer;
