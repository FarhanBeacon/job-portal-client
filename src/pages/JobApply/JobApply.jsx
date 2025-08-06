import React from "react";
import { useNavigate, useParams } from "react-router";
import useAuth from "../../hooks/useAuth";
import swal from 'sweetalert';

const JobApply = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleJobApply = (event) => {
    event.preventDefault();
    const form = event.target;
    const linkedIn = form.linkedIn.value;
    const github = form.github.value;
    const resume = form.resume.value;
    const applicationData = {
      JobId: id,
      Applicant_Email: user.email,
      LinkedIn_URL: linkedIn,
      Github_URL: github,
      Resume_URL: resume,
    };
    // console.log("Application Data:", applicationData);

    fetch("http://localhost:5000/jobApplications", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(applicationData),
    })
    .then((response)=> response.json())
    .then((data)=> {
        if (data.insertedId) {
            swal("Good Job","Your Application Is Submitted", "success");
            navigate("/myApplication");
        }
    })
  }
  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="card bg-base-300 w-full max-w-sm shrink-0 shadow-sm">
        <div className="card-body">
          <form onSubmit={handleJobApply} className="fieldset">
            <label className="label">LinkedIn URL</label>
            <input type="url" name="linkedIn" className="input" placeholder="LinkedIn URL" />
            <label className="label">Github URL</label>
            <input type="url" name="github" className="input" placeholder="Github URL" />
            <label className="label">Resume URL</label>
            <input type="url" name="resume" className="input" placeholder="Resume URL" />
            <button className="btn btn-neutral mt-4">Apply</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JobApply;
