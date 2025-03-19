import Hero from '../components/Hero';
import HomeCards from '../components/HomeCards';
import JobListings from '../components/JobListings';
import ViewAllJobs from '../components/ViewAllJobs';
import About from '../components/About';

const HomePage: React.FC = () => {
  return (
    <div>
        <Hero/>
        <HomeCards/>
        <JobListings isHome={true}/>
        <About/>
        <ViewAllJobs/>
    </div>
  );
};

export default HomePage;
