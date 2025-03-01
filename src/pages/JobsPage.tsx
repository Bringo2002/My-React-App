import JobListings from "../components/JobListings";

const JobsPage: React.FC = () => {
    return (
        <div>
            <section className='bg-blue-50 px-4 py-6'>
        <JobListings />
        </section>
        </div>
    );
    }

export default JobsPage;