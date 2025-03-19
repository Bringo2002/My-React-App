import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  LoaderFunctionArgs,
} from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import LoginPage from './pages/LoginPage';

import HomePage from './pages/HomePage';
import JobsPage from './pages/JobsPage';
import NotFoundPage from './pages/NotFoundPage';
import JobPage, { jobLoader } from './pages/JobPage';
import AddJobPage from './pages/AddJobPage';
import EditJobPage from './pages/EditJobPage';

const App: React.FC = () => {
  // Add New Job
  const addJob = async (newJob: { title: string; description: string }) => {
    await fetch('/api/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newJob),
    });
    return;
  };

  // Delete Job
  const deleteJob = async (id: string) => {
    await fetch(`/api/jobs/${id}`, {
      method: 'DELETE',
    });
    return;
  };

  // Update Job
  const updateJob = async (job: { id: string; title: string; description: string }) => {
    await fetch(`/api/jobs/${job.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(job),
    });
    return;
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/jobs' element={<JobsPage />} />
        <Route path='/add-job' element={<AddJobPage addJobSubmit={addJob} />} />
        <Route
          path='/edit-job/:id'
          element={<EditJobPage updateJobSubmit={updateJob} />}
          loader={({ params }: LoaderFunctionArgs) => jobLoader({ params: { id: params.id as string } })}
        />
        <Route
          path='/jobs/:id'
          element={<JobPage deleteJob={deleteJob} />}
          loader={({ params }: LoaderFunctionArgs) => jobLoader({ params: { id: params.id as string } })}
        />
        <Route path='/login' element={<LoginPage />} />
        <Route path='*' element={<NotFoundPage />} />

      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
