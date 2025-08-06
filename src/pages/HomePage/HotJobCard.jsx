import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router";

const HotJobCard = ({ job }) => {
  const {
    _id,
    title,
    company,
    company_logo,
    location,
    requirements,
    description,
    salaryRange,
  } = job;
  return (
    <div className="card bg-base-100 shadow-sm cursor-pointer transform transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-center gap-2 m-2">
        <figure>
          <img className="w-16" src={company_logo} alt="logo" />
        </figure>
        <div>
          <h3 className="text-xl font-semibold">{company}</h3>
          <p className="text-gray-600 flex items-center gap-1">
            <CiLocationOn />
            {location}
          </p>
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="flex items-center gap-2 overflow-x-scroll">
          {requirements.map((requirement, idx) => (
            <p key={idx} className="btn">
              {requirement}
            </p>
          ))}
        </div>
        <div className="card-actions justify-between items-center">
          <div>
            <p className="text-xs text-gray-600">
              ${salaryRange.min} - ${salaryRange.max} / month
            </p>
          </div>
          <Link to={`/jobDetails/${_id}`}>
            <button className="btn btn-primary">Apply</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HotJobCard;
