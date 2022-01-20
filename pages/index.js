import Dashboard from '../components/Dashboard/Dashboard';
import MenuContainer from '../components/Menu/MenuContainer';

export default function Home() {
  return (
    <div className='bg-blue-800 asm:h-screen flex'>
      <MenuContainer />
      <Dashboard />
    </div>
  );
}
