import Image from 'next/image';

const SingleItem = ({ item }) => {
  return (
    <div className='bg-white flex items-center flex-col lg:flex-row py-2 px-3 rounded-md drop-shadow-sm justify-between m-2 lg:w-auto asm:w-44 w-full'>
      <div className='flex items-center relative '>
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
      <div className='my-1 flex lg:items-start items-center flex-col lg:w-48 lg:ml-9'>
        <h2 className='text-xs font-bold text-center'>{item.title}</h2>
        <p className='text-xs text-gray-400 text-center mt-1'>
          {item.category}
        </p>
      </div>
      <div className='lg:w-24'>
        <h2 className='text-xs font-bold'>{item.stock}</h2>
      </div>
      {item.status == 'Active' ? (
        <div className='text-red-500 flex lg:w-24 lg:pl-1'>
          <i className='fa fa-check-square-o mr-2'></i>
          <h2 className='text-xs text-red-500'>Active</h2>
        </div>
      ) : (
        <div className='text-green-400 flex lg:w-24 lg:pl-1'>
          <i className='fa fa-square-o mr-2'></i>
          <h2 className='text-xs text-green-400'>Inactive</h2>
        </div>
      )}
      <div className='flex lg:pr-2 '>
        <i className='fa fa-pencil-square-o mr-1'></i>
        <h2 className='text-xs mr-4'>Edit</h2>
        <i className='fa fa-trash text-red-500 mr-1'></i>
        <h2 className='text-xs text-red-500'>Delete</h2>
      </div>
    </div>
  );
};

export default SingleItem;
