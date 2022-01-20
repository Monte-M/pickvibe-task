import Image from 'next/image';

const MenuItem = () => {
  return (
    <div className='px-2 py-3 flex items-center '>
      <div className='hidden sm:block'>
        <Image
          src='/img/icons/activity.png'
          width={20}
          height={20}
          alt='admin-img'
        />
      </div>

      <h5 className='text-gray-200 text-xs sm:ml-4 tracking-wide lg:text-sm'>
        Sub menu item 1
      </h5>
    </div>
  );
};

export default MenuItem;
