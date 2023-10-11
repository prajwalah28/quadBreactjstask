import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginAndRegister from './components/LoginAndRegister';
import Home from './components/Home';
import Apply from './components/Apply';
import JobDetail from './components/JobDetails';
import PageNotFound from './components/PageNotFound';

function App() {
  // State to hold selected job data
  const [selectedJob, setSelectedJob] = useState(null);

  return (
    <div className='App'>
      <Routes>
        <Route exact path='/' element={<LoginAndRegister />} />
        <Route
          exact
          path='/home'
          element={<Home updateJobData={setSelectedJob} />}
        />
        <Route exact path='/apply' element={<Apply />} />

        {/* Pass the selected job data as a prop to JobDetail */}
        <Route
          exact
          path="/job-detail"
          element={<JobDetail job={selectedJob} />}
        />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
