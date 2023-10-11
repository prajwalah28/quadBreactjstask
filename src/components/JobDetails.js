import React, { useState } from 'react';
import './JobDetails.css';

const JobDetail = ({ job }) => {
    const [isDetailsOpen, setDetailsOpen] = useState(false);
    const [isApplying, setApplying] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        coverLetter: '',
        resume: null,
    });

    const handleViewDetailsClick = () => {
        setDetailsOpen(true);
    };

    const handleApplyClick = () => {
        setDetailsOpen(true);
        setApplying(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here (e.g., send data to a server)
        console.log(formData);
        // After successful submission, reset the form and show a success message
        setFormData({
            name: '',
            email: '',
            coverLetter: '',
            resume: null,
        });
        setApplying(false);
    };

    if (!job) {
        return <p>No job data available.</p>;
    }

    return (
        <div className="job-detail-container">
            <h2>Job Details</h2>
            <div className="job-info">
                <strong className="job-title">Job Title:</strong> {job.job_title}
            </div>
            <div className="job-info">
                <strong className="job-employer">Employer:</strong> {job.employer_name}
            </div>
            <div className="job-info">
                <strong className="job-location">Location:</strong> {job.job_city}
            </div>

            <button className="view-details-button" onClick={handleViewDetailsClick}>View Details</button>

            {isDetailsOpen && (
                <div className="details-popup">
                    {isApplying ? (
                        <div className="apply-form">
                            <h3>Apply for {job.job_title}</h3>
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="name">Name:</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email:</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="coverLetter">Cover Letter:</label>
                                    <textarea
                                        id="coverLetter"
                                        name="coverLetter"
                                        value={formData.coverLetter}
                                        onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="resume">Resume (optional):</label>
                                    <input
                                        type="file"
                                        id="resume"
                                        name="resume"
                                        accept=".pdf,.doc,.docx"
                                        onChange={(e) => setFormData({ ...formData, resume: e.target.files[0] })}
                                    />
                                </div>
                                <button type="submit" className="submit-button">Submit</button>
                            </form>
                        </div>
                    ) : (
                        <div className="details-content">
                            <h3>{job.job_title}</h3>
                            <p className="job-description">{job.job_description}</p>
                            <button className="apply-button" onClick={handleApplyClick}>Apply</button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default JobDetail;
