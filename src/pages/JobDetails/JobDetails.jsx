import React from "react";
import { Link, useLoaderData } from "react-router";

const JobDetails = () => {
  const {
    _id,
    title,
    location,
    jobType,
    category,
    applicationDeadline,
    salaryRange,
    description,
    company,
    requirements,
    responsibilities,
    status,
    hr_email,
    company_logo,
  } = useLoaderData();
  return (
    <div className="mt-4 mb-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl md:text-5xl font-semibold">{title}</h1>
        <img className="w-12 md:w-18" src={company_logo} alt="logo" />
      </div>
      <div className="flex items-center gap-4 my-4">
        <div className="flex items-center gap-2">
          <div aria-label="success" className="status status-success"></div>
          <p className="text-lg font-semibold">{status}</p>
        </div>
        <p className="text-lg font-semibold">{company}</p>
        <p className="text-gray-600">{location}</p>
        <p className="text-gray-600">Deadline: {applicationDeadline}</p>
      </div>
      <div className="my-4 space-y-2">
        <h2 className="text-xl font-semibold">Job Type: {jobType}</h2>
        <h2 className="text-xl font-semibold">Catagory: {category}</h2>
        <h2 className="text-xl font-semibold">
          Salary Range: {salaryRange.min} - {salaryRange.max}
        </h2>
      </div>
      <div className="my-4">
        <h2 className="text-xl font-semibold">Contact HR:</h2>
        <p className="text-gray-700">Email: {hr_email}</p>
      </div>
      <div className="my-4">
        <h2 className="text-xl font-semibold">Description:</h2>
        <p className="text-gray-700">{description}</p>
      </div>
      <div className="my-4">
        <h2 className="text-xl font-semibold">Requirements:</h2>
        <ul className="list-disc pl-5 text-gray-700">
          {requirements.map((req, index) => (
            <li key={index}>{req}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="text-xl font-semibold">Responsibilities:</h2>
        <ul className="list-disc pl-5 text-gray-700">
          {responsibilities.map((res, index) => (
            <li key={index}>{res}</li>
          ))}
        </ul>
      </div>
      <div className="my-4">
        <Link to={`/jobApply/${_id}`}>
          <button className="btn btn-primary">Apply Now</button>
        </Link>
      </div>
    </div>
  );
};

export default JobDetails;
