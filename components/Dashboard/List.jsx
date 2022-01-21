import Pagination from './Pagination';
import SingleItem from './SingleItem';

import data from '../../utils/data';

const List = () => {
  return (
    <div>
      <div className='hidden justify-between ml-2 mr-10 text-sm font-bold text-gray-700 mt-4 lg:flex'>
        <h5>IMAGES</h5>
        <h5>PRODUCT NAME</h5>
        <h5>STOCK</h5>
        <h5>STATUS</h5>
        <h5>ACTIONS</h5>
      </div>
      <div className='flex lg:block justify-center flex-wrap'>
        {data.map((item) => (
          <SingleItem key={item.id} item={item} />
        ))}
      </div>

      <Pagination />
    </div>
  );
};

export default List;
