import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router";

const MyPostedJobs = () => {
  const [jobs, setJobs] = useState();
  const { user } = useAuth();

  useEffect(() => {
    fetch(`http://localhost:5000/jobs?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
      });
  }, [user.email]);
  console.log(jobs);
  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-5">My Posted Jobs</h1>
      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Logo</th>
              <th>Job Title</th>
              <th>Company Name</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {jobs?.map((job, idx) => (
              <tr key={job._id}>
                <th>{idx + 1}</th>
                <td>
                  <img
                    src={job.company_logo}
                    alt="logo"
                    width="30px"
                    height="30px"
                  />
                </td>
                <td>{job.title}</td>
                <td>{job.company}</td>
                <td>
                  <Link to={`/viewApplications/${job._id}`} className="btn btn-xs">View Applications</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyPostedJobs;
