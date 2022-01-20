import DashboardMenu from './DashboardMenu';
import DashboardSecondSection from './DashboardSecondSection';

const Dashboard = () => {
  return (
    <div className='w-4/5 bg-white h-auto my-5 mr-5 ml-0 rounded-3xl px-6'>
      <DashboardMenu />
      <DashboardSecondSection />
    </div>
  );
};

export default Dashboard;
