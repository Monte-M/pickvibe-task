const Pagination = () => {
  return (
    <div className='flex lg:w-1/4 justify-between my-5'>
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
  );
};

export default Pagination;
