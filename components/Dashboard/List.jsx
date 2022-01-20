import Pagination from './Pagination';
import SingleItem from './SingleItem';

const List = () => {
  const n = 10;
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
        {[...Array(n)].map((e, i) => (
          <SingleItem key={i} />
        ))}
      </div>

      <Pagination />
    </div>
  );
};

export default List;
