const DashboardSecondSection = () => {
  return (
    <div className='mt-6'>
      <h1 className='font-bold lg:text-left text-center'>Data List Layout</h1>
      <div className='mt-5 flex justify-between flex-col items-center lg:flex-row'>
        <div className='flex items-center'>
          <button className='text-white rounded-md bg-blue-800 py-2 px-2 text-sm drop-shadow-sm'>
            Add New Product
          </button>
          <button className='text-lg text-gray-500 font-light bg-white ml-2 py-1 px-3 rounded-md drop-shadow-sm'>
            +
          </button>
        </div>
        <div className='flex items-center m-2'>
          <p className='text-sm text-gray-400'>
            Showing 1 to 10 of 150 entries
          </p>
        </div>
        <div className='flex items-center relative'>
          <input
            className='bg-white w-44 rounded-md py-1 px-3 pr-8 text-sm'
            placeholder='Search...'
          />
          <i className='fa fa-search absolute right-4 text-gray-500'></i>
        </div>
      </div>
    </div>
  );
};

export default DashboardSecondSection;
