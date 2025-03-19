import { Outlet, useLocation } from 'react-router-dom'; 
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../components/Navbar';

const MainLayout = () => {
  const location = useLocation();

  return (
    <div>
      {location.pathname !== '/login' && <Navbar />}
      <Outlet />
      <ToastContainer />
    </div>
  );
};

export default MainLayout;
