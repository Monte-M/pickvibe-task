import Image from 'next/image';
import SingleItem from './SingleItem';

const List = () => {
  return (
    <div>
      <div className='flex justify-between ml-2 mr-10 text-sm font-bold text-gray-700 mt-4'>
        <h5>IMAGES</h5>
        <h5>PRODUCT NAME</h5>
        <h5>STOCK</h5>
        <h5>STATUS</h5>
        <h5>ACTIONS</h5>
      </div>
      <SingleItem />
      <SingleItem />
      <SingleItem />
      <SingleItem />
      <SingleItem />
      <div className='flex w-1/4 justify-between mt-5'>
        <i className='fa fa-angle-double-left py-1'></i>
        <i className='fa fa-angle-left py-1'></i>
        <p className='py-1 text-sm'>...</p>
        <p className='py-1 text-sm'>1</p>
        <p className='bg-white py-1 p-3 text-sm rounded-md drop-shadow-sm'>2</p>
        <p className='py-1 text-sm '>3</p>
        <p className='py-1 text-sm'>...</p>
        <i className='fa fa-angle-double-right py-1'></i>
        <i className='fa fa-angle-right py-1'></i>
      </div>
    </div>
  );
};

export default List;
