import Hero from '../components/Hero';
import HomeCards from '../components/HomeCards';
import JobListings from '../components/JobListings';
import ViewAllJobs from '../components/ViewAllJobs';

const HomePage: React.FC = () => {
  return (
    <div>
        <Hero/>
        <HomeCards/>
        <JobListings isHome={true}/>
        <ViewAllJobs/>
    </div>
  );
};

export default HomePage;
