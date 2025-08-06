import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

const MyApplication = () => {
  const { user } = useAuth();
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/jobApplications?email=${user.email}`)
      .then((response) => response.json())
      .then((data) => {
        setJobs(data);
      })
      .catch((error) => {
        console.error("Error fetching job applications:", error);
      });
  }, [user.email]);

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>SL</th>
              <th></th>
              <th>JobTitle</th>
              <th>CompanyName</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            {/* body */}
            {jobs.map((job, index) => (
              <tr key={job._id}>
                <th>{index + 1}</th>
                <td><img src={job.CompanyLogo} alt="logo" width="40px" /></td>
                <td>{job.JobTitle}</td>
                <td>{job.CompanyName}</td>
                <td>{job.JobLocation}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyApplication;
