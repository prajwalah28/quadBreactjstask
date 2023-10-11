import React from 'react';
import { Link } from 'react-router-dom';
import './JobCard.css'; // Import the CSS file

const JobCard = ({ job, onViewDetails }) => {
    const { employer_name, job_title, job_city } = job;
    return (
        <div className="job-card">
            <div className="job-header">
                <strong>{job_title}</strong> at <span>{employer_name}</span>
            </div>
            <div className="job-location">
                <b>Location:</b> {job_city}
            </div>
            <button onClick={() => onViewDetails(job)}>View Details</button>
        </div>
    );
}

export default JobCard;
