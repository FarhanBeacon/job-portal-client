import React from "react";
import { useLoaderData } from "react-router";

const ViewApplications = () => {
  const applications = useLoaderData();
  const handleStatus = (event, id) => {
    const data = {
        status: event.target.value,
    }
    fetch(`http://localhost:5000/jobApplications/${id}`, {
        method: "PATCH",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(data),
    })
    .then((res)=> res.json())
    .then((check) => {
        console.log(check);
    })
  };
  return (
    <div>
      <h1 className="text-3xl text-center">View Applications</h1>
      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 mt-4">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Applicant_Email</th>
              {/* <th>LinkedIn_URL</th>
              <th>Github_URL</th> */}
              <th>Resume_URL</th>
              <th>Update Status</th>
            </tr>
          </thead>
          <tbody>
            {applications?.map((application, idx) => (
              <tr key={application._id}>
                <th>{idx + 1}</th>
                <td>{application.Applicant_Email}</td>
                {/* <td>{application.LinkedIn_URL}</td>
                <td>{application.Github_URL}</td> */}
                <td>{application.Resume_URL}</td>
                <td>
                  <select
                    defaultValue={application.Status || "Change Status"}
                    onChange={(event) => handleStatus(event, application._id)}
                    className="select focus:outline-none cursor-pointer"
                  >
                    <option disabled>Change Status</option>
                    <option value="Shortlisted">Shortlisted</option>
                    <option value="Interviewed">Interviewed</option>
                    <option value="Hired">Hired</option>
                    <option value="Rejected">Rejected</option>
                    <option value="On Hold">On Hold</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewApplications;
