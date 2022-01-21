import List from './List';
import Menu from './Menu';
import SecondSection from './SecondSection';

const Dashboard = () => {
  return (
    <div className='w-4/5 bg-gray-100 h-auto my-5 mr-5 ml-0 rounded-3xl xs:px-6 px-2'>
      <Menu />
      <SecondSection />
      <List />
    </div>
  );
};

export default Dashboard;
