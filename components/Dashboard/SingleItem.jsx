import Image from 'next/image';

const SingleItem = () => {
  return (
    <div className='bg-white flex items-center flex-col lg:flex-row py-2 px-3 rounded-md drop-shadow-sm  justify-between pr-8 m-2'>
      <div className='flex items-center relative'>
        <Image
          className='rounded-full '
          src='/img/woman.jpg'
          width={35}
          height={35}
          alt='woman-img'
        />
        <div className='z-1 right-5 absolute flex items-center border-2 border-white rounded-full'>
          <Image
            className='rounded-full '
            src='/img/nature.jpg'
            width={35}
            height={35}
            alt='woman-img'
          />
        </div>
        <div className='z-20 flex items-center border-2 border-white rounded-full'>
          <Image
            className='rounded-full'
            src='/img/man.jpeg'
            width={35}
            height={35}
            alt='woman-img'
          />
        </div>
      </div>
      <div className='lg:ml-10'>
        <h2 className='text-xs font-bold text-center'>
          Sony Master Series A9G
        </h2>
        <p className='text-xs text-gray-500 text-center'>Electronic</p>
      </div>
      <div className='lg:ml-12'>
        <h2 className='text-xs font-bold'>183</h2>
      </div>
      <div className='text-red-500 flex lg:ml-20'>
        <i className='fa fa-check-square-o mr-2'></i>
        <h2 className='text-xs text-red-500'>Active</h2>
      </div>
      <div className='flex lg:ml-5'>
        <i className='fa fa-pencil-square-o mr-1'></i>
        <h2 className='text-xs mr-4'>Edit</h2>
        <i className='fa fa-trash text-red-500 mr-1'></i>
        <h2 className='text-xs text-red-500'>Delete</h2>
      </div>
    </div>
  );
};

export default SingleItem;
