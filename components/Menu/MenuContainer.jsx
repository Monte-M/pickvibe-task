import Image from 'next/image';
import MenuItem from './MenuItem';

const MenuContainer = () => {
  return (
    <div className='w-1/5 h-auto my-5 ml-5 mr-0 px-6'>
      <div className='flex items-center border-b border-gray-400 py-2 px-2'>
        <Image
          src='/img/icons/adminIcon.png'
          width={30}
          height={30}
          alt='admin-img'
        />

        <h1 className='text-white ml-4'>Admin</h1>
      </div>
      <div className='p-2 bg-white mt-6 rounded-l-3xl w-72 flex items-center'>
        <Image
          src='/img/icons/home.png'
          width={20}
          height={20}
          alt='home-img'
        />
        <h1 className='font-semibold text-sm ml-4'>CRUD example</h1>
      </div>
      <div className='px-2 py-3 flex items-center'>
        <Image src='/img/icons/box.png' width={20} height={20} alt='box-img' />
        <h4 className='ml-4 text-white text-sm'>Menu item </h4>
        <i className='fa fa-angle-up text-white text-sm ml-28'></i>
      </div>
      <div className='bg-blue-900 rounded-sm'>
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </div>
    </div>
  );
};

export default MenuContainer;
