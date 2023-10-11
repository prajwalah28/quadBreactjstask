import React, { useState, useEffect } from 'react';
import axios from 'axios';
import JobCard from './JobCard';
import JobDetail from './JobDetails';
import '../App.css'
import { useSelector } from 'react-redux/es/hooks/useSelector';

const Home = () => {

    const currentUser = useSelector((state) => state.user.currentUser);
    const [selectedLang, setSelectedLang] = useState('');
    const [jobListings, setJobListings] = useState([]);
    const [selectedJob, setSelectedJob] = useState(null);
    const [loading, setLoading] = useState(false);
    
    const fetchJobListings = async () => {
        setLoading(true);

        const options = {
            method: 'GET',
            url: 'https://jsearch.p.rapidapi.com/search',
            params: {
                query: selectedLang
            },
            headers: {
                'X-RapidAPI-Key': '515863d9b5msh16d789b85d700a8p1121ffjsnbace9274a983',
                'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
            },
        };

        try {
            const response = await axios.request(options);
            const dataList = await response.data.data;
            setJobListings(dataList);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const handleViewDetails = (job) => {
        setSelectedJob(job);
    };

    useEffect(() => {
        if (selectedLang) {
            fetchJobListings();
        } else {
            setJobListings([]);
        }
    }, [selectedLang]);

    return (
        <div>
            <h2>Find Jobs by Programming Language for {currentUser && currentUser.email}</h2>
            <select onChange={(e) => setSelectedLang(e.target.value)}>
                <option value="">Select language</option>
                <option value="JavaScript">JavaScript</option>
                <option value="C++">C++</option>
                <option value="C">C</option>
                <option value="Go">Go</option>
                <option value="Java">Java</option>
                <option value="Python">Python</option>
            </select>

            {/* Display job listings based on selected language */}
            {loading ? (
                <p>Loading...</p>
            ) : jobListings.length > 0 ? (
                <div>
                    <h3>Job Listings for {selectedLang}</h3>
                    <div className='cardList'>
                        {jobListings.map((job, index) => (
                            <div key={index}>
                                {/* Pass the callback to the JobCard component */}
                                <JobCard job={job} onViewDetails={handleViewDetails} />
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <p>No jobs found for {selectedLang}</p>
            )}

            {selectedJob && <JobDetail job={selectedJob} />}
        </div>
    );
};

export default Home;
