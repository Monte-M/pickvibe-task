import Image from 'next/image';

const DashboardMenu = () => {
  return (
    <div className='py-2 border-b border-gray-200 flex lg:justify-between lg:flex-row flex-col items-center '>
      <div className='flex items-center'>
        <h4 className='text-sm '>Application </h4>
        <i className='fa fa-angle-right text-sm mx-2'></i>
        <h4 className='text-sm text-blue-800'>Dashboard</h4>
      </div>
      <div className='flex items-center relative mt-2 sm:md-0'>
        <input
          className='bg-gray-300 w-44 rounded-3xl py-1 px-3 pr-8 text-sm'
          placeholder='Search...'
        />
        <i className='fa fa-search absolute sm:right-24 right-16 text-gray-500'></i>
        <i className='fa fa-bell-o mx-5'></i>
        <div className='hidden sm:flex items-center'>
          <Image
            className='rounded-full'
            src='/img/woman.jpg'
            width={30}
            height={30}
            alt='woman-img'
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardMenu;
