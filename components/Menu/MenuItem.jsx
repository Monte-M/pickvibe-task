import Image from 'next/image';

const MenuItem = () => {
  return (
    <div className='px-2 py-3 flex items-center '>
      <Image
        src='/img/icons/activity.png'
        width={20}
        height={20}
        alt='admin-img'
      />
      <h5 className='text-gray-200 text-sm ml-4 tracking-wide'>
        Sub menu item 1
      </h5>
    </div>
  );
};

export default MenuItem;
